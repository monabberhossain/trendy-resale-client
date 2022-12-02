import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ bookedProduct }) => {
    const [success, setSuccess] = useState("");
    const [cardError, setCardError] = useState();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const { price, email, name, _id } = bookedProduct;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
            console.log(error);
        } else {
            setCardError("");
            console.log(paymentMethod);
        }

        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (confirmError) {
            console.log(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                bookingId: _id,
                transactionId: paymentIntent.id,
                email,
                price,
            };
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setSuccess(
                            "Congrats! Your Payment Completed Successfully."
                        );
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="border"
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <div className="mt-3">
                    <p className="text-red-600 font-semibold">{cardError}</p>
                </div>
                <button
                    className="btn btn-sm btn-primary text-white font-bold px-6 mt-6"
                    type="submit"
                    // disabled={!stripe || !clientSecret || processing}
                    disabled={success || !stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            {success && (
                <div className="mt-6">
                    <p className="text-green-600 font-semibold">{success}</p>
                    <p>
                        Your Transaction ID:{" "}
                        <span className="font-bold">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;

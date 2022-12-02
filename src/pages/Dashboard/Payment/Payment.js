import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const navigation = useNavigation();
    const bookedProduct = useLoaderData();
    const { productName, price } = bookedProduct;

    if(navigation.state === "loading"){
        return <Spinner></Spinner>;
    }

    return (
        <div className="mt-6">
            <h3 className="text-3xl">Payment For {productName}</h3>
            <p className="mt-3 text-xl">
                Please pay <strong>${price}</strong> for your order of{" "}
                {productName}.
            </p>
            <div className="my-8 w-full max-w-xs">
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookedProduct={bookedProduct} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ product, setProduct, refetch }) => {
    const {
        _id,
        name,
        price,
        image,
        purchasedDate,
        seller,
        location,
    } = product;
    console.log(product);
    const { user } = useContext(AuthContext);
    const [districts, setDistricts] = useState([]);

    const url = "/districts.json";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDistricts(data));
    }, []);

    const handleBooking = (event) => {
        event.preventDefault();

        const form = event.target;
        const userPhone = form.userPhone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookedProduct = {
            productName: name,
            productId: _id,
            price: price,
            productImage: image,
            purchasedDate,
            name: user.displayName,
            email: user.email,
            seller: seller,
            userPhone,
            sellerLocation: location,
            meetingLocation,
        };

        fetch("http://localhost:5000/bookedProducts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(bookedProduct);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success("Booking Confirmed!");
                    refetch();
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle bg-orange-600 border-none absolute right-6 top-5"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold text-orange-600">
                        {name}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-5 mt-10"
                    >
                        <input
                            name="itemName"
                            type="text"
                            defaultValue={name}
                            disabled
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="price"
                            type="text"
                            defaultValue={price}
                            disabled
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="name"
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Full Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="userPhone"
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full"
                            required
                        />
                        <select
                            name="meetingLocation"
                            className="select select-bordered w-full"
                        >
                            {districts.map((district, index) => (
                                <option key={index} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="btn btn-accent bg-orange-700 border-none w-full text-white"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;

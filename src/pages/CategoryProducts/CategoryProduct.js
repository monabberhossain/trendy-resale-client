import React, { useContext } from "react";

const CategoryProduct = ({ categoryProduct, setProduct }) => {
    const {
        name,
        image,
        location,
        price,
        marketPrice,
        seller,
        purchasedDate,
        postedTime,
    } = categoryProduct;

    const splittedTimeFirst = postedTime.split(",");
    const splittedDateFirst = splittedTimeFirst[0].split("/");
    const yearFirst = parseInt(splittedDateFirst[2]);

    const splittedTimeSecond = purchasedDate.split(",");
    const splittedDateSecond = splittedTimeSecond[0].split("/");
    const yearSecond = parseInt(splittedDateSecond[2]);

    let yearOfUse = yearFirst - yearSecond;
    if (yearOfUse < 0) {
        yearOfUse = 1;
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-orange-600">
                        {name}
                    </h2>
                    <p className="font-bold">
                        Resale Price:{" "}
                        <span className="text-2xl text-orange-600">
                            ${price}
                        </span>
                    </p>
                    <p className="font-bold">
                        Original Price:{" "}
                        <span className="text-xl text-gray-600">
                            ${marketPrice}
                        </span>
                    </p>
                    <p className="font-semibold">
                        Purchased At: {purchasedDate}
                    </p>
                    <p className="font-semibold">Posted At: {postedTime}</p>
                    <p className="font-semibold">
                        Seller: {seller}                        
                    </p>
                    <p className="font-semibold">Location: {location}</p>
                    <div className="card-actions mt-4">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary bg-orange-600 border-none text-white font-bold"
                            onClick={() => setProduct(categoryProduct)}
                        >
                            Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;

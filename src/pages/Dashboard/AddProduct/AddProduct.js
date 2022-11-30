import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: districts = [] } = useQuery({
        queryKey: ["districts"],
        queryFn: async () => {
            const res = await fetch(
                "https://bdapis.herokuapp.com/api/v1.1/districts"
            );
            const data = await res.json();
            return data.data;
        },
    });

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories");
            const data = await res.json();
            return data;
        },
    });

    const handleAddProduct = (data) => {  
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                const product = {
                    seller: user.displayName,
                    email: user.email,
                    name: data.productName,
                    category: data.category,
                    image: imgData.data.url,
                    price: data.price,
                    marketPrice: data.marketPrice,
                    condition: data.condition,
                    purchasedDate: data.purchasedDate,
                    mobile: data.mobileNumber,
                    location: data.location,
                    description: data.description
                };

                fetch("https://localhost:5000/products", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify(product),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        toast.success("Product added successfully!");
                        navigate("/dashboard/myproducts");
                    });
            });
    };

    if (isLoading) {
        return <Spinner></Spinner>;
    }
    
    return (
        <div>
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4 flex justify-between">
                Add A Product
                <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </h2>
            <div className="form-control w-full max-w-xs bg-base-100 rounded-xl shadow-xl p-8">
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("productName", {
                                required: "Product name is required",
                            })}
                        />
                        {errors.productName && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.productName?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select
                            {...register("category", {
                                required: "Product category is required",
                            })}
                            className="select select-bordered w-full max-w-xs"
                        >
                            {categories.map((category) => (
                                <option
                                    key={category._id}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.category?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">
                                Choose Category Photo
                            </span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full"
                            {...register("image", {
                                required: "Photo is required",
                            })}
                        />
                        {errors.image && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.image?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("price", {
                                required: "Price is required",
                            })}
                        />
                        {errors.price && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.price?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Market Price</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("marketPrice", {
                                required: "Price is required",
                            })}
                        />
                        {errors.marketPrice && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.marketPrice?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select
                            {...register("condition", {
                                required: "Product condition is required",
                            })}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        {errors.category && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.category?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Date of Purchased
                            </span>
                        </label>
                        <input
                            type="month"
                            className={`input input-bordered w-full ${
                                errors.purchasedDate &&
                                "focus:border-red-600 focus:ring-red-600 border-red-600"
                            }`}
                            {...register("purchasedDate", {
                                required: "Date is required",
                            })}
                        />
                        {errors.purchasedDate && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.purchasedDate?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("mobileNumber", {
                                required: "Mobile number is required",
                            })}
                        />
                        {errors.mobileNumber && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.mobileNumber?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select
                            {...register("location", {
                                required: "Location is required",
                            })}
                            className="select select-bordered w-full max-w-xs"
                        >
                            {districts.map((district) => (
                                <option value={district.district}>
                                    {district.district}
                                </option>
                            ))}
                        </select>
                        {errors.location && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.location?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Product Description
                            </span>
                        </label>
                        <textarea
                            type="text"
                            className="input input-bordered w-full"
                            {...register("marketPrice", {
                                required: "Price is required",
                            })}
                        />
                        {errors.marketPrice && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.marketPrice?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <input
                        className="btn btn-accent w-full mt-6"
                        value="Add Category"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

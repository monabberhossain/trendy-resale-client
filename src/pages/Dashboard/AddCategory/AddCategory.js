import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddCategory = (data) => {
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
                const category = {
                    name: data.name,
                    image: imgData.data.url,
                };

                fetch("https://localhost:5000/categories", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    body: JSON.stringify(category),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        toast.success("Category added successfully!");
                        navigate("/dashboard/categories");
                    });
            });
    };

    return (
        <div className="">
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4">
                Add A Category
            </h2>
            <div className="form-control w-full max-w-xs bg-base-100 rounded-xl shadow-xl p-8">
                <form onSubmit={handleSubmit(handleAddCategory)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.name?.message}
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

export default AddCategory;

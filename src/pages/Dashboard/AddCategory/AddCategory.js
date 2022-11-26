import React from "react";
import { useForm } from "react-hook-form";

const AddCategory = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    return (
        <div className="">
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2">
                Add A Category
            </h2>
            <div className="form-control w-full max-w-xs bg-base-100 rounded-xl shadow-xl p-8">
                <form>
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

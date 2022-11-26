import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [signupError, setSignUpError] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState("s");
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate("/");
    }

    const handleSignUp = (data) => {
        setSignUpError("");
        createUser(data.email, data.password)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
                toast.success("User Created Successfully.");
                const userProfile = {
                    displayName: data.name,
                    role: data.role
                };
                updateUserProfile(userProfile)
                    .then(() => {
                        saveUserToDB(data.name, data.role, data.email);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };

    const saveUserToDB = (name, role, email) => {
        const user = { name, role, email };

        fetch(
            "https://localhost/5000/users",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setCreatedUserEmail(email);
            });
    };    

    return (
        <div className="flex justify-center items-center py-24">
            <div className="form-control w-full max-w-xs bg-base-100 rounded-xl shadow-xl p-8">
                <h2 className="text-xl text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.email?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
                                    message:
                                        "Password must have at least a number, a special and a uppercase character ",
                                },
                            })}
                        />
                        {errors.password && (
                            <label className="label">
                                <span className=" label-text text-red-600">
                                    {errors.password?.message}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Role</span>
                        </label>
                        <select
                            {...register("role", {
                                required: "User Role is required",
                            })}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    {signupError && (
                        <label className="label">
                            <span className="label-text-alt text-red-600">
                                {signupError}
                            </span>
                        </label>
                    )}
                    <input
                        className="btn btn-accent w-full mt-6"
                        value="Sign Up"
                        type="submit"
                    />
                </form>
                <p className="text-xs mt-4">
                    Already Have An Account?
                    <Link className="ml-1 text-secondary" to="/login">
                        Please Login
                    </Link>
                </p>
                <div className="divider my-6">OR</div>
                <button className="btn btn-accent btn-outline w-full">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;

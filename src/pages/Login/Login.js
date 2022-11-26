import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { login } = useContext(AuthContext);

    const [loginError, setLoginError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState("");

    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data);
        setLoginError("");
        login(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setLoginUserEmail(data.email);
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };
    return (
        <div className="flex justify-center items-center py-24">
            <div className="form-control w-full max-w-xs bg-base-100 rounded-xl shadow-xl p-8">
                <h2 className="text-xl text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <label className="label">
                            <span className="label-text-alt">
                                <Link
                                    className="font-semibold text-orange-600"
                                    to="/"
                                >
                                    Forgot Password?
                                </Link>
                            </span>
                        </label>
                    </div>
                    {loginError && (
                        <label className="label">
                            <span className="label-text-alt text-red-600">
                                {loginError}
                            </span>
                        </label>
                    )}
                    <input
                        className="btn btn-accent w-full mt-6"
                        value="Login"
                        type="submit"
                    />
                </form>
                <p className="text-xs mt-4 font-semibold">
                    New to Trendy Resale?
                    <Link className="ml-1 text-orange-600" to="/signup">
                        Create New Account
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

export default Login;

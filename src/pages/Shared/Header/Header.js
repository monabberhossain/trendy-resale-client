import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaIdCard, FaSignOutAlt, FaUser, FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    return (
        <div className="w-screen fixed lg:px-[12%] bg-base-200 shadow z-50">
            <nav className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost hover:bg-orange-600 lg:hidden mr-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={1}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-64 md:w-72"
                        >
                            <div className="lg:hidden form-control">
                                <div className="relative text-orange-600">
                                    <input
                                        className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 bg-white h-11 px-5 pr-16 rounded-lg text-sm focus:outline-none border-none"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                    />
                                    <button
                                        type="submit"
                                        className=" text-white focus:rounded-r-lg bg-orange-600 focus:outline-orange-600 absolute right-0 top-0 p-3 rounded-r-lg"
                                    >
                                        <svg
                                            className=" h-5 w-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            version="1.1"
                                            id="Capa_1"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 56.966 56.966"
                                            style={{
                                                enableBackground:
                                                    "new 0 0 56.966 56.966",
                                            }}
                                            xmlSpace="preserve"
                                            width="512px"
                                            height="512px"
                                        >
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <li tabIndex={1}>
                                <Link className="justify-between font-semibold rounded-lg text-stone-900 hover:bg-orange-600 hover:text-white">
                                    Products
                                    <svg
                                        className="fill-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </Link>
                                <ul className="rounded-box bg-base-300 shadow p-2">
                                    <li>
                                        <Link className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                            Category 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                            Category 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                            Category 3
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/blog" className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="px-2 btn normal-case text-xl md:text-2xl"
                    >
                        <span className="tracking-tighter font-semibold md:font-bold">
                            trendy
                        </span>
                        <strong className="text-4xl pb-3 md:pb-2 text-orange-600">
                            Resale
                        </strong>
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex={2}>
                            <Link className="rounded-lg font-semibold text-lg text-stone-900 hover:bg-orange-600 hover:text-white">
                                Products
                                <svg
                                    className="fill-orange-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-1 shadow bg-base-200 rounded-box">
                                <li>
                                    <Link className="rounded-lg  font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                        Category 1
                                    </Link>
                                </li>
                                <li>
                                    <Link className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                        Category 2
                                    </Link>
                                </li>
                                <li>
                                    <Link className="rounded-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                        Category 3
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog" className="rounded-lg text-lg font-semibold text-stone-900 hover:bg-orange-600 hover:text-white">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:block form-control">
                        <div className="relative text-orange-600">
                            <input
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 bg-white h-11 px-5 pr-16 rounded-lg text-sm focus:outline-none border-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className=" text-white focus:rounded-r-lg bg-orange-600 focus:outline-orange-600 absolute right-0 top-0 p-3 rounded-r-lg"
                            >
                                <svg
                                    className=" h-5 w-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{
                                        enableBackground:
                                            "new 0 0 56.966 56.966",
                                    }}
                                    xmlSpace="preserve"
                                    width="512px"
                                    height="512px"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {user?.uid ? (
                        <>
                            <div className="dropdown dropdown-end pl-2">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost hover:bg-orange-600 btn-circle"
                                >
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm bg-orange-600 indicator-item border-none h-5">
                                            8
                                        </span>
                                    </div>
                                </label>
                                <div
                                    tabIndex={0}
                                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                                >
                                    <div className="card-body">
                                        <span className="font-bold text-lg">
                                            8 Items
                                        </span>
                                        <span className="text-info">
                                            Subtotal: $999
                                        </span>
                                        <div className="card-actions">
                                            <button className="btn btn-block">
                                                View cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end pl-2">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost hover:bg-orange-600 btn-circle avatar"
                                >
                                    {user?.photoURL ? (
                                        <div className="text-2xl rounded-full">
                                            <img src={user.photoURL} alt="" />
                                        </div>
                                    ) : (
                                        <div className="text-2xl rounded-full">
                                            <FaUser></FaUser>
                                        </div>
                                    )}
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
                                >
                                    <li>
                                        <Link className="justify-between rounded-lg hover:bg-orange-600 hover:text-white">
                                            <span>{user.displayName}</span>
                                            <span>
                                                <FaUserEdit></FaUserEdit>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/dashboard"
                                            className="justify-between rounded-lg hover:bg-orange-600 hover:text-white"
                                        >
                                            <span>Dashboard</span>
                                            <span>
                                                <FaIdCard></FaIdCard>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={handleLogOut}
                                            className="justify-between rounded-lg hover:bg-orange-600 hover:text-white"
                                        >
                                            <span>Logout</span>
                                            <span>
                                                <FaSignOutAlt></FaSignOutAlt>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="ml-4">
                                <Link
                                    className="btn btn-outline hover:border-orange-600 rounded-lg text-lg font-semibold md:font-bold text-orange-600 hover:bg-orange-600"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;

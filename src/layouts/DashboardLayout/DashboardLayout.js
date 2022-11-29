// import React, { useContext } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Header from "../../pages/Shared/Header/Header";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="px-[2%] lg:px-[12%] py-[72px] drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content mt-4 lg:mt-8 p-4 bg-green-50">
                    <Outlet></Outlet>                    
                </div>
                <div className="drawer-side bg-indigo-50 w-60 mt-4 lg:mt-8">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-full text-base-content">
                        <li className="bg-indigo-500 rounded mb-4">
                            <h2 className="text-white font-bold text-xl">
                                Dashboard
                            </h2>
                        </li>
                        <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                            <Link to="/dashboard">My Orders</Link>
                        </li>
                        {(isAdmin || isSeller) && (
                            <>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/addproduct">
                                        Add A Product
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/myproducts">
                                        My Products
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/mybuyers">
                                        My Buyers
                                    </Link>
                                </li>
                            </>
                        )}
                        {isAdmin && (
                            <>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/addcategory">
                                        Add Category
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/categories">
                                        Categories
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/buyers">
                                        All Buyers
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/sellers">
                                        All Sellers
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/orders">
                                        All Orders
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/products">
                                        Products
                                    </Link>
                                </li>
                                <li className="hover:bg-indigo-500 hover:text-white hover:rounded-lg font-semibold">
                                    <Link to="/dashboard/allusers">
                                        All Users
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

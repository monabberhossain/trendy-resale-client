// import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";
// import useAdmin from "../../hooks/useAdmin";
import Header from "../../pages/Shared/Header/Header";

const DashboardLayout = () => {
    // const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="px-[12%] py-16 lg:py-18 drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content p-8">
                    <Outlet></Outlet>
                    <label
                        htmlFor="dashboard-drawer"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side bg-slate-50">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu mt-4 p-4 w-80 text-base-content">
                        <li className="bg-indigo-500 rounded mb-4">
                            <h2 className="text-white font-bold text-xl">Dashboard</h2>
                        </li>
                        <li>
                            <Link to="/dashboard">My Appointments</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/allusers">All Users</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addcategory">
                                Add A Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

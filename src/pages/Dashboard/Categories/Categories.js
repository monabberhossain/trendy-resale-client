import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Categories = () => {
    const { user } = useContext(AuthContext);

    const url = `https://y-black-alpha.vercel.app/categories`;

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });
    return (
        <div className="">
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4 flex justify-between">
                List of Categories
                <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category._id}>
                                <th>{index + 1}</th>
                                <td>{category.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={category.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-xs text-white btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Categories;

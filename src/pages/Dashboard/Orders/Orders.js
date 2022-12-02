import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Orders = () => {
    const { data: bookedProducts = [], refetch } = useQuery({
        queryKey: ["bookedproducts"],
        queryFn: async () => {
            const res = await fetch(
                "https://y-black-alpha.vercel.app/bookedproducts"
            );
            const data = await res.json();
            return data;
        },
    });

    const handleVerifySeller = (id) => {
        fetch(`https://y-black-alpha.vercel.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Seller Verified Successfully!");
                    refetch();
                }
            });
    };

    const handleDeleteUser = (id) => {
        fetch(`https://y-black-alpha.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success(`User Deleted Successfully!`);
                    refetch();
                }
            });
    };
    return (
        <div>
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4 flex justify-between">
                List of All Orders
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
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedProducts.map((bookedProduct, index) => (
                            <tr key={bookedProduct._id}>
                                <th>{index + 1}</th>
                                <td>{bookedProduct.name}</td>
                                <td>{bookedProduct.email}</td>
                                <td>{bookedProduct.role}</td>
                                <td>
                                    {bookedProduct?.status === "Verified" && (
                                        <span className="bg-green-200 px-1 rounded-md font-bold">
                                            {bookedProduct.status}
                                        </span>
                                    )}
                                    {bookedProduct?.status ===
                                        "Non-verified" && (
                                        <span className="bg-red-200 px-1 rounded-md font-bold">
                                            {bookedProduct.status}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {bookedProduct?.role === "Seller" &&
                                        bookedProduct?.status !==
                                            "Verified" && (
                                            <button
                                                onClick={() =>
                                                    handleVerifySeller(
                                                        bookedProduct._id
                                                    )
                                                }
                                                className="btn btn-xs text-white btn-secondary"
                                            >
                                                Verify
                                            </button>
                                        )}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteUser(bookedProduct._id)
                                        }
                                        className="btn btn-xs text-white btn-error"
                                    >
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

export default Orders;

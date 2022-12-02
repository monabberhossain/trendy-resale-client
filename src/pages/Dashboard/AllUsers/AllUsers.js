import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data;
        },
    });

    const handleVerifySeller = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
        fetch(`http://localhost:5000/users/${id}`, {
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
                All Users
                <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-primary btn-sm md:btn-md lg:btn-lg drawer-button bg-indigo-500 text-white lg:hidden"
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
                            <th>Verification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {user?.status === "Verified" && (
                                        <span className="bg-green-200 px-1 rounded-md font-bold">
                                            {user.status}
                                        </span>
                                    )}
                                    {user?.status === "Non-verified" && (
                                        <span className="bg-red-200 px-1 rounded-md font-bold">
                                            {user.status}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {user?.role === "Seller" &&
                                        user?.status !== "Verified" && (
                                            <button
                                                onClick={() =>
                                                    handleVerifySeller(user._id)
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
                                            handleDeleteUser(user._id)
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

export default AllUsers;

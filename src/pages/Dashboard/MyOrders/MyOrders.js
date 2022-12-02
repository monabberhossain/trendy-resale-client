import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookedProducts = [], refetch } = useQuery({
        queryKey: ["bookedproducts", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/bookedproducts/${user.email}`
            );
            const data = await res.json();
            console.log(data);
            return data;
        },
    });

    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/bookedproducts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success(`Order Deleted Successfully!`);
                    refetch();
                }
            });
    };
    return (
        <div>
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4 flex justify-between">
                List of My Orders
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
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Purchased Date</th>
                            <th>Seller</th>
                            <th>Seller Location</th>
                            <th>Meeting Location</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedProducts.map((bookedProduct, index) => (
                            <tr key={bookedProduct._id}>
                                <th>{index + 1}</th>
                                <td>{bookedProduct.productName}</td>
                                <td>{bookedProduct.productId}</td>
                                <td>{bookedProduct.price}</td>
                                <td>{bookedProduct.productImage}</td>
                                <td>{bookedProduct.purchasedDate}</td>
                                <td>{bookedProduct.seller}</td>
                                <td>{bookedProduct.sellerLocation}</td>
                                <td>{bookedProduct.meetingLocation}</td>
                                <td>
                                    {bookedProduct.price &&
                                        !bookedProduct.paid && (
                                            <Link
                                                to={`/dashboard/payment/${bookedProduct._id}`}
                                            >
                                                <button className="btn btn-sm btn-primary">
                                                    Pay
                                                </button>
                                            </Link>
                                        )}
                                    {bookedProduct.price &&
                                        bookedProduct.paid && (
                                            <span className="text-white font-bold bg-success px-2 rounded-md">
                                                Paid
                                            </span>
                                        )}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteOrder(bookedProduct._id)
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

export default MyOrders;

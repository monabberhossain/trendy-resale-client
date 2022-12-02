import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const Products = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`);
            const data = await res.json();
            console.log(data);
            return data;
        },
    });

    // const handleMakeAdmin = (id) => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success("Admin Authorized Successfully!");
    //                 refetch();
    //             }
    //         });
    // };

    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success(`Product Deleted Successfully!`);
                    refetch();
                }
            });
    };
    return (
        <div>
            <h2 className="text-3xl font-semibold bg-indigo-300 rounded p-2 mb-4 flex justify-between">
                List of My Products
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
                            <th>Seller</th>
                            {/* <th>Verification</th> */}
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Market Price</th>
                            <th>Condition</th>
                            <th>Purchased Date</th>
                            <th>Post Time</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id}>
                                <th>{index + 1}</th>
                                <th>{product.seller}</th>
                                <td>{product.email}</td>
                                <td>{product.mobile}</td>
                                <td>{product.location}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <img
                                        className="w-[48px] h-[32px]"
                                        src={product.image}
                                        alt=""
                                    />
                                </td>
                                <td>$ {product.price}</td>
                                <td>$ {product.marketPrice}</td>
                                <td>{product.condition}</td>
                                <td>{product.purchasedDate}</td>
                                <td>{product.postedTime}</td>
                                <td>
                                    <span className="btn btn-xs border-0 font-bold mr-1 btn-disabled bg-green-200 text-orange-600">
                                        {product.status}
                                    </span>
                                </td>
                                <td>
                                    {product.description.substring(0, 20) +
                                        " ..."}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteProduct(product._id)
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

export default Products;

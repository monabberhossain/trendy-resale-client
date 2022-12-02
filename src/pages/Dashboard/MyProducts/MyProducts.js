import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ["myproducts"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/myproducts/${user.email}`
            );
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
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Post Time</th>
                            <th>Sales Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts.map((product, index) => (
                            <tr key={product._id}>
                                <th>{index + 1}</th>
                                <th>{product.name}</th>
                                <td>{product.brand}</td>
                                <td>
                                    <img
                                        className="w-[60px] md:w-[75px] lg:w-[120px] h-[40px] md:h-[50px] lg:h-[80px]"
                                        src={product.image}
                                        alt=""
                                    />
                                </td>
                                <td>$ {product.price}</td>
                                <td>{product.postedTime}</td>
                                <td>
                                    <span className="btn btn-xs border-0 font-bold mr-1 btn-disabled bg-green-200 text-orange-600">
                                        {product.status}
                                    </span>
                                    {product.status === "Available" && (
                                        <span>
                                            <button
                                                // onClick={() =>
                                                //     handleAdvertise(product._id)
                                                // }
                                                className="btn btn-xs text-white btn-secondary"
                                            >
                                                Advertise
                                            </button>
                                        </span>
                                    )}
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

export default MyProducts;

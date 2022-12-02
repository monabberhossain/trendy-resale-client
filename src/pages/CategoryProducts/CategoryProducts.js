import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import BookingModal from "./BookingModal";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = () => {
    const url = window.location.href;
    const section = url.split("/");
    const id = section[4];

    const [product, setProduct] = useState(null);

    const {
        data: categoryProducts = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["categoryProducts"],
        queryFn: async () => {
            const res = await fetch(
                `https://y-black-alpha.vercel.app/categories/${id}`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner></Spinner>;
    }
    return (
        <div className="w-screen lg:px-[12%]">
            <div className="py-16 lg:py-24">
                <div className="flex justify-center items-center">
                    <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                        <div className="flex flex-col justify-center items-center space-y-10">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-5 lg:leading-7 xl:leading-9 text-gray-800">
                                    Watches For Category
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                {categoryProducts.map((categoryProduct) => (
                                    <CategoryProduct
                                        key={categoryProduct._id}
                                        categoryProduct={categoryProduct}
                                        setProduct={setProduct}
                                    ></CategoryProduct>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {product && (
                    <BookingModal
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                        refetch={refetch}
                    ></BookingModal>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;

import React from "react";
import axios from "axios";
import catDigital from "../../../assets/category/catDigitalWatch.png";
import catBand from "../../../assets/category/catSmartBand.png";
import catWatch from "../../../assets/category/catSmartWatch.png";
import catMechanical from "../../../assets/category/catMechanicalWatch.png";
import { useQuery } from "@tanstack/react-query";
import CategoryOption from "./CategoryOption";

const CategoryOptions = () => {
    const getAllCategories = async () => {
        try {
            const response = await axios.get(
                "https://y-black-alpha.vercel.app/categories"
            );
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    const { data: categories = [], refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(
                "https://y-black-alpha.vercel.app/categories"
            );
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="pb-16 px-8">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-5 lg:leading-7 xl:leading-9 text-gray-800">
                                Shop By Category
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                            {categories.map((category) => (
                                <CategoryOption
                                    key={category._id}
                                    category={category}
                                ></CategoryOption>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOptions;

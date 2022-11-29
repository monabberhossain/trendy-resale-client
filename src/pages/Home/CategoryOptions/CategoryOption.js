import React from "react";
import { Link } from "react-router-dom";

const CategoryOption = ({ category }) => {
    const { _id, name, image } = category;
    return (
        <div className="flex flex-col gap-8">
            <div className="h-full w-full">
                <Link to={`/categories/${_id}`} className="relative group flex justify-center items-center hover:opacity-70">
                    <img
                        className="object-center object-cover h-full w-full"
                        src={image}
                        alt={name}
                    />
                    <button className="bottom-2 right-4 z-10 absolute text-xl font-bold leading-none py-3 w-60 bg-white text-orange-600">
                        {name}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryOption;

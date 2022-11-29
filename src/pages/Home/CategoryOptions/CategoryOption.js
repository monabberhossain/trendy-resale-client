import React from 'react';

const CategoryOption = () => {
    return (
        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
            <div className="relative group flex justify-center items-center h-full w-full">
                <img
                    className="object-center object-cover h-full w-full"
                    src=""
                    alt=""
                />
                <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                    Smart Watch
                </button>
            </div>
        </div>
    );
};

export default CategoryOption;
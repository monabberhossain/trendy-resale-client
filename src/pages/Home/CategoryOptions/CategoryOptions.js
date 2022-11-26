import React from "react";
import catDigital from "../../../assets/category/catDigi.png";
import catBand from "../../../assets/category/catBand.png";
import catWatch from "../../../assets/category/catWatch.png";
import catMechanical from "../../../assets/category/catMechanical.png";

const CategoryOptions = () => {
    return (
        <div className="pb-16 px-8">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <h1 className="mb-4 text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                                Shop By Category
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img
                                    className="object-center object-cover h-full w-full"
                                    src={catMechanical}
                                    alt=""
                                />
                                <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                                    Mechanical Watch
                                </button>
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img
                                        className="object-center object-cover h-full w-full"
                                        src={catWatch}
                                        alt=""
                                    />
                                    <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                                        Smart Watch
                                    </button>
                                </div>
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img
                                        className="object-center object-cover h-full w-full"
                                        src={catBand}
                                        alt=""
                                    />
                                    <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                                        Smart Band
                                    </button>
                                </div>
                            </div>
                            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img
                                    className="object-center object-cover h-full w-full"
                                    src={catDigital}
                                    alt=""
                                />
                                <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                                    Digital Watch
                                </button>
                            </div>
                            <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <img
                                    className="object-center object-cover h-full w-full"
                                    src={catDigital}
                                    alt=""
                                />
                                <button className="bottom-4 z-10 absolute text-xl font-bold leading-none py-3 w-36 bg-white text-orange-600">
                                    Digital Watch
                                </button>{" "}
                            </div>
                        </div>
                        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                            <img
                                className="object-center object-cover h-full w-full"
                                src={catDigital}
                                alt=""
                            />
                            <button className="bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                                Digital Watch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryOptions;

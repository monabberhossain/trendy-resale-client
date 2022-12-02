import React from "react";
import { FaAppStore, FaArrowRight, FaDesktop, FaGraduationCap } from "react-icons/fa";

const Resources = () => {
    return (
        <div>
            <section className="mx-auto container py-16">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-5 lg:leading-7 xl:leading-9 text-gray-800">
                        <h1>Resources for new sellers</h1>
                    </div>
                    <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-10 px-4 md:px-6 lg:px-10">
                        <div className="cursor-pointer shadow-xl p-10 w-full flex justify-center flex-col rounded-lg border-[1px] border-gray-100">
                            <div className="mb-6 text-orange-600 text-3xl lg:text-4xl xl:5xl">
                                <FaDesktop></FaDesktop>
                            </div>
                            <div className="text-gray-800 text-3xl lg:text-4xl xl:5xl font-bold text-left mt-3">
                                <h2>Beginner’s Guide</h2>
                            </div>
                            <div className="text-gray-500 mt-3 font-normal text-start ">
                                <p>
                                    Get a quick overview of what to expect as
                                    you begin your Trendy Resale journey.
                                </p>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-12 text-md font-bold">
                                <p className="inline-flex">
                                    Let's Go
                                    <span className="ml-4 mt-1 text-orange-600">
                                        <FaArrowRight></FaArrowRight>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="cursor-pointer shadow-xl p-10 w-full flex justify-center flex-col rounded-lg border-[1px] border-gray-100">
                            <div className="mb-6 text-orange-600 text-3xl lg:text-5xl xl:5xl">
                                <FaGraduationCap></FaGraduationCap>
                            </div>
                            <div className="text-gray-800 text-3xl lg:text-4xl xl:5xl font-bold text-left mt-3">
                                <h2>Seller University</h2>
                            </div>
                            <div className="text-gray-500 mt-3 font-normal text-start ">
                                <p>
                                    Explore educational resources to help you
                                    learn to succeed as an Trendy Resale selling
                                    partner.
                                </p>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-12 text-md font-bold">
                                <p className="inline-flex">
                                    Explore Seller University
                                    <span className="ml-4 mt-1 text-orange-600">
                                        <FaArrowRight></FaArrowRight>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="cursor-pointer shadow-xl p-10 w-full flex justify-center flex-col rounded-lg border-[1px] border-gray-100">
                            <div className="mb-6 text-orange-600 text-3xl lg:text-4xl xl:5xl">
                                <FaAppStore></FaAppStore>
                            </div>
                            <div className="text-gray-800 text-3xl lg:text-4xl xl:5xl font-bold text-left mt-3">
                                <h2>Selling Partner App Store</h2>
                            </div>
                            <div className="text-gray-500 mt-3 font-normal text-start ">
                                <p>
                                    Discover approved third-party software
                                    partners to automate, manage, and grow your
                                    business.
                                </p>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-12 text-md font-bold">
                                <p className="inline-flex">
                                    Learn more
                                    <span className="ml-4 mt-1 text-orange-600">
                                        <FaArrowRight></FaArrowRight>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;

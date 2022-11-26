import React from "react";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
    return (
        <div className="">
            <div className="py-16 lg:py-24">
                <div className="">
                    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center px-8 lg:px-0 gap-8">
                        <div className="mt-6 lg:mt-10">
                            <h1 className="text-stone-700 text-3xl md:text-4xl lg:text-6xl font-bold lg:font-extrabold leading-tight">
                                Start buying/selling
                                <br />
                                with trendyResale
                            </h1>
                            <p className="text-gray-900 text-xl font-semibold my-7">
                                You can buy your need and can also list your new
                                or used items
                                <br /> to sell and pay a final value fee only
                                when it sells
                            </p>
                            <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                        <div className="mt-10">
                            <img className="" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

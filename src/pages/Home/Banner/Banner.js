import React from "react";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
    return (
        <div className="">
            <div className="py-24">
                <div className="">
                    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center px-8 gap-8">
                        <div>
                            <h1 className="text-stone-700 text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                                Start buying/selling
                                <br />
                                with Trendy Resale
                            </h1>
                            <p className="text-gray-900 text-xl font-semibold my-7">
                                You can buy your need and can also list your new
                                or used items
                                <br /> to sell and pay a final value fee only
                                when it sells
                            </p>
                            <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                        <div className="">
                            <img className="" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

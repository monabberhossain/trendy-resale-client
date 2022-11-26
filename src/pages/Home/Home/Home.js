import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import CategoryOptions from "../CategoryOptions/CategoryOptions";

const Home = () => {
    return (
        <div className="w-screen lg:px-[12%]">
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <CategoryOptions></CategoryOptions>
        </div>
    );
};

export default Home;

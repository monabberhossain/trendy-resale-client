import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="w-screen lg:px-[12%]">
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;

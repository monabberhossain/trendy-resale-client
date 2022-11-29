import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import CategoryOptions from "../CategoryOptions/CategoryOptions";
import Resources from "../Resources/Resources";

const Home = () => {
    return (
        <div className="w-screen lg:px-[12%]">
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <CategoryOptions></CategoryOptions>
            <Resources></Resources>
        </div>
    );
};

export default Home;

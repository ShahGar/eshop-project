import React from "react";
import BannerBackground from "../LandingPage/Assets/home-banner-background.png";
import BannerImage from "../LandingPage/Assets/home-banner-image3.png";
import Navbar from "../LandingPage/Navbar";
import { FiArrowRight } from "react-icons/fi";
import Banner from "../LandingPage/Banner";
import BannerReverse from "../LandingPage/BannerReverse";
import Hero from "../LandingPage/Hero";
import ProudProducts from "../LandingPage/ProudProducts";
import TrendingSlider from "../LandingPage/TrendingSlider";

import Banner1 from "../LandingPage/Assets/Banner1.png";
import Banner2 from "../LandingPage/Assets/Banner2.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Delivering Partner in Festivals 
          </h1>
          <p className="primary-text">
            We deliver you any products of Tihar Festivals ranging from Makhamali flowers to sweets ,
            so you can enjoy and celebrate with your family.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <>
      <Hero />
      <ProudProducts /> 
        <Banner
        title="home living appliances"
        text="ASOUF this is the minimal product that we are providing to you "
        img={Banner1}
          />
          <TrendingSlider />
          <BannerReverse
          title ="living room living appliances"
          text="ASOUF this is the minimal product that we are providing to you"
          img={Banner2}
        />
          
            
          
        </>

    </div>
  );
};

export default Home;

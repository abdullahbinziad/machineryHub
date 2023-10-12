import React from "react";
import Carosal from "../../components/slider/Carosal";
import UnderCarosal from "../../components/underCarosal/UnderCarosal";
import Services from "../../components/services/Services";
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
import DirectorMessage from "../../components/DirectorMessage/DirectorMessage";
import ValuableClients from "../../components/ValuableClients/ValuableClients";
import HotProducts from "../../components/HotProducts/HotProducts";
import Activity from "../../components/Activity/Activity";
import AboutServices from "../../components/AboutServices/AboutServices";

const Home = () => {
  return (
    <div className="z-0 bg-white">
      <Carosal />
      <div data-aos="fade-down" className="z-10">
        <UnderCarosal />
      </div>
      <div data-aos="fade-down" className="z-10">
        <DirectorMessage />
      </div>
      <AboutServices />
      <Services />
      <HotProducts />
      <ValuableClients />
      <TestimonialSlider />
      <Activity />
    </div>
  );
};

export default Home;

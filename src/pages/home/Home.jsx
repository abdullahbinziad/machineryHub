import React from "react";
import Carosal from "../../components/slider/Carosal";
import UnderCarosal from "../../components/underCarosal/UnderCarosal";
import Services from "../../components/services/Services";
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
import DirectorMessage from "../../components/DirectorMessage/DirectorMessage";

const Home = () => {
  return (
    <div className="z-0 bg-[#FFFFFF]">
      <Carosal></Carosal>
      <div data-aos="fade-down" className="z-10">
        <UnderCarosal></UnderCarosal>
      </div>
      <DirectorMessage />
      <Services></Services>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default Home;

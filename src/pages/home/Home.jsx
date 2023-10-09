import React from "react";
import Carosal from "../../components/slider/Carosal";
import UnderCarosal from "../../components/underCarosal/UnderCarosal";
import Services from "../../components/services/Services";
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
import DirectorMessage from "../../components/DirectorMessage/DirectorMessage";
import ValuableClients from "../../components/ValuableClients/ValuableClients";

const Home = () => {
  return (
    <div className="z-0 bg-white">
      <Carosal></Carosal>
      <div data-aos="fade-down" className="z-10">
        <UnderCarosal></UnderCarosal>
      </div>
      <DirectorMessage />
      <Services></Services>
      <ValuableClients />
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default Home;

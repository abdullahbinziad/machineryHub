import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

//import all slider images
import sliderImg1 from "../../assets/img/slider-img-01.jpg";
import sliderImg2 from "../../assets/img/slider-img-02.jpg";

const Carosal = () => {


const sliderData = [
    {
"image" : sliderImg1,
"smallCaption": "We Can Help",
"bigCaption": `The Experts In  `,
    },
    {
"image" : sliderImg2,
"smallCaption": "We Can Help",
"bigCaption": `Building Rise  `,
    },
    {
"image" : sliderImg1,
"smallCaption": "We Can Help",
"bigCaption": `The Experts In  `,
    },
]

  return (
    <div className="md:-mb-16 mb-4 ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {
sliderData.map( (n,index)=>     <SwiperSlide key={index}>
    <div
      style={{
        backgroundImage: `url(${n.image})`,
       
      }}
      className="relative md:h-[800px] min-h-[400px]  bg-cover bg-no-repeat bg-center	  w-full"
    >
      <div
        data-aos="fade-left"
        className="bottom-1/4 space-y-7 left-1/2 text-gray-700	 text-left uppercase absolute  "
      >
        <h1 className="md:text-2xl	">{n.smallCaption}</h1>
        <h1 className=" md:text-7xl my-4 font-bold leading-13	 	">
        {n.bigCaption} <br />Industry
        </h1>
        <button className="bg-np md:py-4 md:px-14 px-6 py-3 rounded-sm text-xl text-white">
          Contact Us
        </button>
      </div>
    </div>
  </SwiperSlide>)
    }
       
      
      </Swiper>
    </div>
  );
};

export default Carosal;

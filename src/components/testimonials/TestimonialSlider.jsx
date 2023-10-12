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
import sliderImg1 from "../../assets/img/testimonial-img01.jpg";
import sliderImg2 from "../../assets/img/testimonial-img02.jpg";
import sliderImg3 from "../../assets/img/testimonial-img03.jpg";

const TestimonialSlider = () => {
  const sliderData = [
    {
      image: sliderImg1,
      company: "Mr Ahmed Ali",
      role: "CEO & Founder",
      feedback: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.  `,
    },
    {
      image: sliderImg2,
      company: "Ahmed Sabbir",
      role: " Maneging Director",
      feedback: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.  `,
    },
    {
      image: sliderImg3,
      company: "Abdullah Bin Ziad",
      role: "CEO & Founder",
      feedback: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.  `,
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-black font-bold text-center text-2xl md:text-4xl uppercase">
        What Our Clients Say ?
      </h1>
      <div className="md:w-96 mx-auto ">
        <hr className="mt-6" />
      </div>
      <div className="md:-mb-16 mb-4 mt-16 w-5/6 mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {sliderData.map((n, index) => (
            <SwiperSlide key={index}>
              <div className=" md:h-[400px] min-h-[200px] 	  w-full">
                <div className="flex flex-col w-3/4 mx-auto rounded-full justify-center items-center space-y-8">
                  <div className="w-36">
                    <img
                      className="w-full  rounded-full"
                      src={n.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-sm md:text-xl text-gray-600 font-bold">
                    {n.feedback}
                  </h1>
                  <div className="flex gap-3 text-gray-600 items-center">
                    <h1 className="font-bold">{n.company} </h1>
                    <h1> {n.role} </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

// Clients images
import kmJafirFaruf from "../../assets/clients-image/KM JAFIR FARUK.jpg";
import golamMohammad from "../../assets/clients-image/Md.Golam Mohammad .png";
import mahbuburRahman from "../../assets/clients-image/Mahbubur Rahman.png";
import gaziTauhidur from "../../assets/clients-image/Md.Gazi Tauhidur Rahman.png";

const TestimonialSlider = () => {
  const sliderData = [
    {
      image: kmJafirFaruf,
      name: "KM JAFIR FARUK",
      company: "Improve Accessories Ltd.",
      role: "Managing Director",
      feedback: `In a rapidly changing business environment, we need partners we can trust and rely on, and I'm pleased to say that NP International BD is one of those partners. We look forward to continuing our journey together and exploring new opportunities for growth and success.`,
    },
    {
      image: golamMohammad,
      name: "Md.Golam Mohammad",
      company: "Classic Zone Bd Ltd.",
      role: "Maneging Director",
      feedback: `I'd like to extend my gratitude to all the team members at NP International BD who have made our partnership a success. Your professionalism, technical expertise, and commitment to our success have been instrumental.`,
    },
    {
      image: mahbuburRahman,
      name: "Mahbubur Rahman",
      company: "Continental Accessories ",
      role: "Owner",
      feedback: `NP International BD has been a vital part of our supply chain, and your machinery solutions have played a significant role in enhancing our productivity and efficiency. Your team's commitment to quality, attention to detail, and prompt response to our needs have been exemplary.`,
    },
    {
      image: gaziTauhidur,
      name: "Md.Gazi Tauhidur Rahman",
      company: "FM Plastic Industries Ltd.",
      role: "Managing Director/CEO",
      feedback: `I wanted to take a moment to express my deep appreciation for the exceptional service and support provided by your organization. As the Managing Director/CEO of FM Plastic Industries Ltd., it is crucial for me to acknowledge when we encounter a business partner that consistently exceeds our expectations.`,
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
              <div className=" md:h-[400px] min-h-[200px] w-full">
                <div className="flex flex-col w-3/4 mx-auto rounded-full justify-center items-center space-y-8">
                  <div className="w-36 h-36">
                    <img
                      className="w-full object-cover rounded-full"
                      src={`${n.image}`}
                      alt=""
                    />
                  </div>
                  <h2 className="font-bold text-gray-800">{n.name}</h2>
                  <h1 className="text-sm md:text-lg xl:text-xl text-gray-600 font-bold">
                    {n.feedback}
                  </h1>
                  <div className="md:flex gap-3 text-gray-600 items-center">
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

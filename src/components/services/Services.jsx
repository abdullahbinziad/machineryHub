import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/icons/1.svg";
import img2 from "../../assets/icons/2.svg";
import img3 from "../../assets/icons/3.svg";
import img4 from "../../assets/icons/4.svg";
const Services = () => {
  const services = [
    {
      icon: img1,
      title: "House Renovation ",
      details:
        " Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed diam.",
    },
    {
      icon: img2,
      title: "Metal Roofing",
      details:
        " Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed diam.",
    },
    {
      icon: img3,
      title: "General Contractng ",
      details:
        " Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed diam.",
    },
    {
      icon: img4,
      title: "Construction Consultant ",
      details:
        " Lorem ipsum dolor sit amet consem et ctetuering adipisc elit sed diam.",
    },
  ];

  return (
    <div className="flex flex-col text-black py-10 space-y-10">
      <div data-aos="zoom-in" className="space-y-8">
        <h1 className="text-center text-xl font-sans">Services We Provided</h1>
        <h1 className="text-center font-bold text-2xl md:text-4xl">
          WE PROVIDED BEST SERVICE
        </h1>
        <h1 className="text-center text-normal md:px-64 sm:p-2 mx-auto  font-sans ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, aperiam, eaque ipsa quaed inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </h1>
      </div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-1  mt-10 w-5/6 mx-auto">
        {services.map((n, index) => (
          <ServiceCard key={index} content={n}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

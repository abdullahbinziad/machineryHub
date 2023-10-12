import React from "react";
import Header from "../shared/header/Header";
import Topbar from "../shared/topbar/Topbar";
import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router-dom";
import whatsAppIcon from "../assets/icons/whats-app.png";

const MainLayOut = () => {
  return (
    <div className="bg-white">
      <div className=" relative bg-transparent  md:-mb-60 z-10">
        <Topbar></Topbar>
        <Header></Header>
      </div>
      <div className="bg-gray-200">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <div className="fixed w-10 h-10 bottom-8 right-8 md:bottom-10 md:right-10 z-30">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+8801675570440&text=Is anyone available?"
          className="btnPulse greenPulse after:border-white after:border bg-[url('./assets/icons/whats-app.png')] w-10 h-10 inline-block bg-cover bg-no-repeat"
        ></a>
      </div>
    </div>
  );
};

export default MainLayOut;

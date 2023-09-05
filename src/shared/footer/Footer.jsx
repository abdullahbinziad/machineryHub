import React from "react";
import logo from "../../assets/logo-main.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black/75">
      <div>
        <footer className="md:p-20 p-8 md:w-5/6 grid md:justify-items-center    text-xl md:grid-cols-3 grid-cols-1  text-white gap-10 mx-auto">
          <div className="flex  flex-col  space-y-6">
          <Link to="/"><img className='w-36' src={logo} alt="" /></Link>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece.
            </p>
          </div>


<div className="flex  flex-col space-y-2 ">
            <span className="footer-title  text-np text-3xl">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="flex  flex-col space-y-2">
            <span className="footer-title text-np text-3xl">Contacts</span>
         
            <a className="link link-hover">Address: 156, Shilmon Purbopara,Tongi,Gazipur-1710</a>
            <a className="link link-hover">Phone: +8801675570440</a>
            <a className="link link-hover">Email: npinternationalbd@gmail.com</a>
          </div>
        
        
        </footer>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div className="text-center">
    <p>Copyright © 2023  </p>
    <p>- All right reserved by NP INTERNATIONAL BD  </p>
  </div>
</footer>
      </div>
    </div>
  );
};

export default Footer;

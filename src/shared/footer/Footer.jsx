import React from "react";
import logo from "../../assets/Np.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black/75">
      <div>
        <footer className="md:p-20 p-8 md:w-5/6 grid md:justify-items-center    text-xl md:grid-cols-3 grid-cols-1  text-white gap-10 mx-auto">
          <div className="flex  flex-col  space-y-6">
          <Link to="/"><img className='w-36' src={logo} alt="" /></Link>
            <p>
            NP INTERNATIONAL BD is a reputable industrial machinery importer and supplier, offering quality products and services for over 3 years. Committed to customer satisfaction and continuous improvement, we aim to maintain industry leadership.
            </p>
          </div>


<div className="flex  flex-col space-y-2 ">
            <span className="footer-title  text-np text-3xl">Company</span>
            <Link to="/about-us" className="link link-hover">About us</Link>
            <Link to="/contact-us" className="link link-hover">Contact</Link>
            <Link to="https://npinternationalbd.com/products/injection_molding_machine" className="link link-hover">Products</Link>
            <Link to="" className="link link-hover">Follow On Facebook</Link>
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

import React from "react";
import logo from "../../assets/logo-main.png";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import weChatQr from "../../assets/qr-code/we-chat.png";
import whatsApp from "../../assets/qr-code/whats-app.png";
const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <footer className="md:p-10 p-8 grid md:grid-cols-4 grid-cols-1 gap-10 text-black">
          <div className="flex flex-col space-y-3 col-span-1">
            <Link to="/">
              <img className="w-24" src={logo} alt="" />
            </Link>

            <p className="text-sm text-black ">
              NP International: Your Machinery Import Experts, Bringing Quality
              Machinery to Your Business Worldwide.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="grid md:grid-cols-3 md:border-b-2 border-black/40 py-5 gap-5">
              <div>
                <div className="flex gap-3 items-center">
                  <span className="text-np">
                    <FiPhoneCall />
                  </span>
                  <span className="text-black/80">Hotline</span>
                </div>
                <p className="md:text-xl mt-2 font-bold">+8801675-570440</p>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <span className="text-np">
                    <FaEnvelope />
                  </span>
                  <span className="text-black/80">Email</span>
                </div>
                <p className="md:text-xl mt-2 font-bold">
                  npinternationalbd@gmail.com
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <span className="text-np">
                    <FaWhatsapp />
                  </span>
                  <span className="text-black/80">Whats app</span>
                </div>
                <p className="md:text-xl mt-2 font-bold">+8801675-570440</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
              <div className="flex flex-col text-sm">
                <span className="footer-title mb-3 text-np text-3xl">
                  Quick links
                </span>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
                <Link to="/about-us" className="link link-hover">
                  About us
                </Link>
                <Link to="/contact-us" className="link link-hover">
                  Contact us
                </Link>
                <Link
                  to="/products/injection_molding_machine"
                  className="link link-hover"
                >
                  Injection Molding Machine
                </Link>
                <Link
                  to="/products/plastics_extrusion_machine"
                  className="link link-hover"
                >
                  Plastics Extrusion Machine
                </Link>
                <Link
                  to="/products/profile_sheet_extrusion_line"
                  className="link link-hover"
                >
                  Profile Sheet Extrusion Line
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="footer-title mb-3 text-np text-3xl">
                  QR Codes
                </span>
                <div className="flex gap-5">
                  <div>
                    <img src={weChatQr} className="w-28 h-28" alt="We chat" />
                    <p className="text-center">We chat</p>
                  </div>
                  <div>
                    <img src={whatsApp} className="w-28 h-28" alt="Whats app" />
                    <p className="text-center">Whats app</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="footer-title mb-3 text-np text-3xl">
                  Follow us on facebook
                </span>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61550303682257%26mibextid%3DLQQJ4d&tabs&width=320&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=787239252538905"
                  width="320"
                  height="130"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center p-2 bg-base-300 text-base-content bg-gray-900">
          <div className="text-center text-sm">
            <p>Copyright © 2023 </p>
            <p>- All right reserved by NP INTERNATIONAL BD.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

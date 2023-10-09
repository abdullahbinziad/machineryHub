import React from "react";
import cover from "../../assets/contact-us.jpg";
import Contacts from "../../components/contact/Contacts";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import contactUsAnim from "../../assets/animation/contact-us-anim.json";
import Lottie from "lottie-react";
const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Corrected line
        }}
        className="w-full flex justify-center items-center h-[450px]"
      >
        <h1 className="text-5xl text-gray-100 relative top-24">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-24 gap-10 justify-between mx-auto items-center text-white-600 px-2 md:px-10">
        {/* <div className="max-w-xl w-full p-2 md:p-10  rounded-md shadow-md mx-auto text-black">
          <div className="space-y-3 text-xl md:text-3xl">
            <div className="p-2 md:p-2 flex flex-col md:flex-row gap-2 md:gap-4 justify-start rounded-lg">
              <FaPhone /> <h1>+8801675570440</h1>
            </div>
            <div className="p-2 md:p-6 flex flex-col md:flex-row gap-2 md:gap-4 justify-start rounded-lg">
              <FaAddressBook />{" "}
              <h1>156, Shilmon Purbopara,Tongi,Gazipur-1710</h1>
            </div>
            <div className="p-2 md:p-6 flex flex-col md:flex-row gap-2 md:gap-4 justify-start rounded-lg">
              <AiOutlineMail /> <h1>npinternationalbd@gmail.com</h1>
            </div>
          </div>
        </div> */}
        <div>
          <div className=" w-[300px] md:w-[450px] mx-auto">
            <Lottie animationData={contactUsAnim} loop />
          </div>
        </div>
        <div className="md:max-w-xl w-full mx-auto bg-white rounded-2xl">
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

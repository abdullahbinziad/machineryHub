import React from "react";
import cover from "../../assets/title-bg.jpg";
import sideBarImg from '../../assets/img/contact.jpg'
import Contacts from "../../components/contact/Contacts";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
const ContactUs = () => {
  return (
    <div className="">
          <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Corrected line
        }}
        className=" w-full   flex justify-center items-center h-[450px]"
      >

<h1 className="text-5xl text-gray-600 relative top-24">
          Contact Us
        </h1>

      </div>
   

    <div className="w-3/4 py-24 flex gap-10 justify-between  mx-auto  items-center text-white-600">

<div className="flex-1 p-10 bg-np rounded-md shadow-md ">
<div className=" space-y-3 text-3xl  ">

<div className=" p-6 flex flex-row gap-4 justify-start rounded-lg">
    <FaPhone/> <h1>+8801675570440</h1>
</div>
<div className=" p-6 flex flex-row gap-4 justify-start bg-np rounded-lg">
    <FaAddressBook/> <h1>156, Shilmon Purbopara,Tongi,Gazipur-1710</h1>
</div>
<div className=" p-6 flex flex-row gap-4 justify-start bg-np rounded-lg">
    <AiOutlineMail/> <h1>npinternationalbd@gmail.com</h1>
</div>
        </div>



</div>
<div className="flex-1  bg-white rounded-2xl">

<Contacts></Contacts>



</div>

   </div>
    </div>
  );
};

export default ContactUs;

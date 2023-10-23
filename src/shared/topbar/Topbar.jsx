import React from "react";
import {
  CiLocationOn,
  CiPhone,
  CiMail,
  CiFacebook,
  CiTwitter,
} from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="w-3/4 mx-auto md:block hidden ">
      <div className="flex text-gray-800 justify-between pt-6 items-center">
        <div className="flex items-center">
          <CiLocationOn /> <p> 156, Shilmon Purbopara,Tongi,Gazipur-1710</p>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <CiPhone /> <p>Make a call : +8801675570440 </p>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <a href="https://www.facebook.com/profile.php?id=61550303682257&mibextid=LQQJ4d">
              <CiFacebook />{" "}
            </a>
            <CiTwitter />
            <CiMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

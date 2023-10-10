import Marquee from "react-fast-marquee";
import rectangle from "../../assets/rectangle.png";
import BPLPreviewfrom from "../../assets/clients-company-logo/BPL-removebg-preview.png";
import classicZone from "../../assets/clients-company-logo/Classic_Zone-removebg-preview.png";
import Continental from "../../assets/clients-company-logo/Continental Accessories.png";
import FM_Plastic from "../../assets/clients-company-logo/FM_Plastic-removebg-preview.png";
import Gazi_Group from "../../assets/clients-company-logo/Gazi_Group-removebg-preview.png";
import Improve_Group from "../../assets/clients-company-logo/Improve_Group-removebg-preview.png";
import Italian_Plastic from "../../assets/clients-company-logo/Italian_Plastic-removebg-preview.png";
import Kwality_Ice_Cream from "../../assets/clients-company-logo/Kwality_Ice_Cream-removebg-preview.png";
import Lira_Group from "../../assets/clients-company-logo/Lira_Group-removebg-preview.png";
import Master_Cenatery from "../../assets/clients-company-logo/Master_Cenatery-removebg-preview.png";
import National_Polymer from "../../assets/clients-company-logo/National_Polymer-removebg-preview.png";
import Sajan_Group from "../../assets/clients-company-logo/Sajan_Group-removebg-preview.png";
import Star_Pipe from "../../assets/clients-company-logo/Star_Pipe-removebg-preview.png";
import Super_Click from "../../assets/clients-company-logo/Super_Click-removebg-preview.png";
import Walton from "../../assets/clients-company-logo/Walton-removebg-preview.png";
import Xclusive_Can from "../../assets/clients-company-logo/Xclusive_Can-removebg-preview.png";

const ValuableClients = () => {
  return (
    <div className="text-black md:mt-36">
      <div className="w-full md:w-10/12 mx-auto">
        <h2 className="text-black font-bold text-center text-2xl md:text-4xl uppercase mt-10 mb-20">
          Our valuable partners
        </h2>
        <Marquee pauseOnHover>
          <div className="mx-5">
            <img src={BPLPreviewfrom} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={classicZone} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Continental} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={FM_Plastic} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Gazi_Group} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Improve_Group} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Italian_Plastic} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Kwality_Ice_Cream} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Lira_Group} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Master_Cenatery} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={National_Polymer} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Sajan_Group} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Star_Pipe} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Super_Click} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Walton} alt="" className="w-14 md:w-40" />
          </div>
          <div className="mx-5">
            <img src={Xclusive_Can} alt="" className="w-14 md:w-40" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ValuableClients;

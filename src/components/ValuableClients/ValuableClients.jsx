import Marquee from "react-fast-marquee";
import rectangle from "../../assets/rectangle.png";

const ValuableClients = () => {
  return (
    <div className="text-black">
      <div className="w-full md:w-10/12 mx-auto">
        <h2 className="text-black font-bold text-center text-2xl md:text-4xl uppercase mt-10 mb-20">
          Our valuable partners
        </h2>
        <Marquee pauseOnHover>
          <div className="mx-5">
            <img src={rectangle} alt="" />
          </div>
          <div className="mx-5">
            <img src={rectangle} alt="" />
          </div>
          <div className="mx-5">
            <img src={rectangle} alt="" />
          </div>
          <div className="mx-5">
            <img src={rectangle} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ValuableClients;

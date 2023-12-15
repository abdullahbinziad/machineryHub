import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-main.png";

const AboutServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <div data-aos="slide-up" className="space-y-8 mt-20">
        <h1 className="text-center text-xl font-sans">Services We Provided</h1>
        <h1 className="text-center font-bold text-2xl md:text-4xl">
          WE PROVIDED BEST SERVICE
        </h1>
        {/* <h1 className="text-center text-normal md:px-64 sm:p-2 mx-auto  font-sans ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, aperiam, eaque ipsa quaed inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </h1> */}
      </div>
      <div
        className="md:w-4/5 mx-auto px-5 py-10 md:py-20 "
        data-aos="slide-up"
      >
        <div className="relative flex flex-col">
          <div className="flex flex-wrap justify-between gap-5 order-2">
            <div className="max-w-sm space-y-5">
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np">01 </span>
                  <span>Comprehensive Solution</span>
                </h2>
                <p className="font-sans ml-7">
                  Raw material, whole layout for workshop, machine professional
                  technology service
                </p>
              </div>
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np hidden xl:inline">03 </span>
                  <span className="text-np inline xl:hidden">02 </span>
                  <span>Strong after-sales service</span>
                </h2>
                <p className="font-sans ml-7">
                  Engineers to customer company as requirement
                </p>
              </div>
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np hidden xl:inline">05 </span>
                  <span className="text-np inline xl:hidden">03 </span>
                  <span>Good reputation</span>
                </h2>
                <p className="font-sans ml-7">
                  Np international company have many old customers because
                  machine quality
                </p>
              </div>
            </div>
            {/* //right side */}
            <div className="max-w-sm space-y-5 xl:text-end">
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np inline xl:hidden">04 </span>
                  <span>Good reputation</span>{" "}
                  <span className="text-np hidden xl:inline"> 02 </span>
                </h2>
                <p className="font-sans ml-7">
                  Np international company have many old customers because
                  machine quality
                </p>
              </div>
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np inline xl:hidden">05 </span>
                  <span>Guarantee</span>
                  <span className="text-np hidden xl:inline"> 04 </span>
                </h2>
                <p className="font-sans ml-7">
                  Machine 18 months, service will always on the way
                </p>
              </div>
              <div>
                <h2 className="text-md xl:text-2xl">
                  <span className="text-np inline xl:hidden">06 </span>
                  <span>Spare parts support</span>
                  <span className="text-np hidden xl:inline"> 06 </span>
                </h2>
                <p className="font-sans ml-7">
                  Np International choose brand sprats, such as Siemens,
                  Schneider, Omron, Delixi etc
                </p>
              </div>
            </div>
          </div>
          <div className="xl:absolute w-full h-full top-0 left-0 flex justify-center items-center">
            <div
              className="bg-red-50 p-10 rounded-full hover:rotate-[360deg] ease-linear transition-all duration-500 service-logo-bg cursor-pointer w-52 h-52 xl:w-72 xl:h-72"
              onClick={() => navigate("/about-us")}
            >
              <img src={logo} alt="" className="w-36 h-36 xl:w-52 xl:h-52 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutServices;

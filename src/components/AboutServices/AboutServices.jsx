import logo from "../../assets/logo-main.png";

const AboutServices = () => {
  return (
    <>
      <div className="md:w-4/5 mx-auto px-5 py-10 md:py-20">
        <div className="relative">
          <div className="flex flex-wrap justify-between gap-5">
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
          <div className="absolute w-full h-full top-0 left-0 xl:flex justify-center items-center hidden">
            <img src={logo} alt="" className="w-52 h-52 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutServices;

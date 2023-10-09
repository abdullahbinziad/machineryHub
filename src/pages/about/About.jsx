import React from "react";
import cover from "../../assets/title-bg.jpg";
import sideBarImg from "../../assets/img/about.jpg";
const About = () => {
  return (
    <div className="py-20">
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Corrected line
        }}
        className=" w-full   flex justify-center items-center h-[450px]"
      >
        <h1 className="text-5xl text-gray-600 relative top-24">
          CORPORATE OVERVIEW
        </h1>
      </div>
      <div className="w-5/6 flex flex-row-reverse justify-between gap-12 items-center  mx-auto text-gray-600 px-10">
        <div className="flex-1">
          <img className="rounded-md" src={sideBarImg} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-xl pt-20 space-y-3 font-semibold text-justify">
            NP INTERNATIONAL BD is a well-established importer, indenter, and
            supplier of industrial machinery, boasting a rich history spanning
            over 3 years. Since our inception in 2019, we have been dedicated to
            providing top-notch industrial machinery, spare parts, industrial
            automation systems, and a comprehensive range of pre-sales and
            after-sales services to our esteemed clientele. Our core vision at
            NP INTERNATIONAL BD revolves around ensuring our customers remain at
            the forefront of their industries. We take immense pride in
            upholding the highest standards of quality in every machine and
            component, including retrofit work. To further enhance our customer
            experience, we have assembled a team of seasoned professionals
            dedicated to after-sales support, ensuring that our customers
            receive unparalleled service and assistance. NP INTERNATIONAL BD was
            founded in 2019 by an experienced engineer who envisioned creating a
            professional and reliable organization. 
          </p>
        </div>
      </div>
      <div className="w-5/6 mt-4 mx-auto text-gray-600 px-10">
        <p className="text-xl py-10  space-y-3 font-semibold text-justify">With over 13 years of
            expertise in the industry, we have established ourselves as a
            trustworthy partner in delivering effective and efficient industrial
            machinery and services. This commitment has allowed us to cultivate
            strong and lasting relationships with our esteemed customers. Our
            unwavering dedication lies in consistently achieving the highest
            levels of customer satisfaction. We are continuously working to
            enhance the quality of our products and services. Therefore, we
            wholeheartedly welcome any suggestions from our customers. Each
            suggestion is carefully evaluated and, when deemed valuable,
            implemented to improve our performance and better assist you in
            realizing your future goals.</p>
      </div>
    </div>
  );
};

export default About;

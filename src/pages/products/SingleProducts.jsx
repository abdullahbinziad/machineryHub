import { useLoaderData } from "react-router-dom";
import contactImg from "../../assets/img/img-012.jpg";
import cover from "../../assets/title-bg.jpg";

import Contacts from "../../components/contact/Contacts";

const SingleProducts = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="  mx-auto ">
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Corrected line
        }}
        className=" w-full   flex justify-left items-center h-[450px]"
      >
        <p
          data-aos="fade-right"
          className="text-xl text-right font-light text-blue-600 relative -bottom-24 left-36"
        >
          {loaderData[0]?.categoryName} / {loaderData[0]?.subCategoryName} /
          {loaderData[0]?.title}{" "}
        </p>
      </div>
      <div className=" -mt-24 flex gap-16 w-5/6 mx-auto justify-between rounded-sm bg-white/100 p-12 ">
        <div className="flex-1">
          <div className=" space-y-7">
            <img
              data-aos="zoom-in-up"
              src={loaderData[0]?.image}
              className="w-full rounded-lg shadow-sm border-np border-1"
              alt=""
            />
            <div className="flex w-full justify-start gap-4">
              {" "}
              <button className="px-4 py-2 flex-1 bg-np">
                Ask Online
              </button>{" "}
              <button className="px-4 py-2 flex-1 border-np border-2 text-gray-600">
                npinternationalbd@gmail.com
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-600">
            {loaderData[0]?.title}
          </h1>
          <hr />

          <div className="bg-white p-6 rounded-md">
            <h1
              dangerouslySetInnerHTML={{ __html: loaderData[0]?.specification }}
            ></h1>
          </div>

          <div
            data-aos="zoom-in-right"
            className=" bg-gray-300 p-4  rounded-md "
          >
            <h1 className="text-gray-600">
              {" "}
              {loaderData[0]?.shortDescription}
            </h1>
          </div>
        </div>
      </div>
      <section className="w-full h-full">
        <div className="w-5/6 mx-auto">
          <div className="bg-white p-12 rounded-b-md">
            <h1
              data-aos="zoom-in-up"
              dangerouslySetInnerHTML={{
                __html: loaderData[0]?.fullDescription,
              }}
            ></h1>
          </div>
        </div>
      </section>
      <hr />
      <hr />

      <section className="bg-white p-10 w-5/6  mx-auto h-full">
        <div className="flex-1">
          <Contacts></Contacts>
        </div>
        <div className="flex-1">
          <img src={contactImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default SingleProducts;

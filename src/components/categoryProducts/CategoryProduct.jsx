import React, { useEffect, useState } from "react";
import cover from "../../assets/title-bg.jpg";

import { FaAddressBook, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import ProductsGalary from "../products/ProductsGalary";
import ProductsGalaryDefault from "../products/ProductsGalaryDefault";
import useJustCategoryProducts from "../../hooks/useJustCategoryProducts";

const CategoryProduct = () => {
  const loaderData = useLoaderData();
  const [refetch, mydata] = useJustCategoryProducts(loaderData.categoryName);
  const [moveCatgory, setMoveCatgory] = useState({});

  const handleProduct = (categoryName, subcategoryName) => {
    setMoveCatgory({
      categoryName: categoryName,
      subcategoryName: subcategoryName,
    });
  };

  useEffect(() => {
    setMoveCatgory();
  }, [loaderData]);

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
        <h1 className="md:text-5xl md:p-0 px-4 text-3xl text-gray-600 relative top-24">
          Products / {loaderData.categoryName}{" "}
        </h1>
      </div>

      <div className="-mt-40 w-5/6 mx-auto py-20">
        <div className="mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-start gap-10 ">
            <div className="md:w-3/12 w-full space-y-10 ">
              <div
                data-aos="fade-up"
                className="border-b-2 bg-white shadow-md border-np"
              >
                <div className="bg-np p-4 border-b-2 border-np">
                  <h1 className="text-2xl font-bold p-2">Products Filter</h1>
                  <hr />
                  <span className="mt-2 p-1">
                    <p className="text-xl">{loaderData.categoryName}</p>
                  </span>
                </div>

                <div className="text-gray-600 p-6 space-y-2 list-none">
                  {loaderData
                    ? loaderData.subCategories?.map((n) => (
                        <li className="border-b-2 border-gray-200 py-2">
                          <button
                            onClick={() =>
                              handleProduct(
                                loaderData.categoryName,
                                n.subcategoryName
                              )
                            }
                          >
                            {n.subcategoryName}
                          </button>
                        </li>
                      ))
                    : ""}
                </div>
              </div>

              {/* start the contact bar */}
              <div
                data-aos="fade-up"
                className="border-b-2 w-full bg-white shadow-md border-np"
              >
                <div className="bg-gray-500 p-4 border-b-2 border-np">
                  <h1 className="text-2xl font-bold p-2">Contact</h1>
                </div>

                <div className="text-gray-600 px-6 py-3 pb-6 space-y-6 mt-4 list-none">
                  <div className="flex  justify-start items-center gap-1">
                    <HiOutlineMail className="text-5xl " />
                    <h1 className="text-xl"> npinternationalbd@gmail.com</h1>
                  </div>
                  <hr />
                  <div className="flex justify-start items-center gap-6">
                    <FaPhone className="text-2xl" />
                    <h1 className="text-xl"> +8801675570440</h1>
                  </div>
                  <hr />
                  <div className="flex justify-start items-center gap-6">
                    <FaAddressBook className="text-2xl" />
                    <h1 className="text-xl">
                      {" "}
                      156, Shilmon Purbopara,Tongi,Gazipur-1710
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {moveCatgory ? (
                <ProductsGalary content={moveCatgory}></ProductsGalary>
              ) : (
                <ProductsGalaryDefault
                  mydata={mydata}
                  categoryName={loaderData.categoryName}
                ></ProductsGalaryDefault>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;

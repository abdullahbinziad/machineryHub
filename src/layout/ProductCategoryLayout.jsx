import React from "react";
import cover from "../assets/title-bg.jpg"

import { Link, Outlet, useLoaderData } from "react-router-dom";


import ProductSiderBar from "../components/categoryProducts/CategoryProduct";
import Topbar from "../shared/topbar/Topbar";
import Header from "../shared/header/Header";

const ProductCategoryLayout = () => {


const loaderData = useLoaderData() ;
console.log(loaderData);


  return (
    <div className='bg-white'>
    <div className=' relative bg-transparent  -mb-60 z-10'>
    <Topbar></Topbar>
       <Header></Header>
       </div> 

        <div   style={{
          backgroundImage: `url(${cover})`,backgroundRepeat:"no-repeat", // Corrected line
        }} className=" w-full  flex justify-center items-center h-[500px]">
<h1 className="text-5xl text-gray-600 relative top-24">Products / 4G high speed machine </h1>
        </div>

<div className="-mt-28 w-5/6 mx-auto py-20">
      <div className="mx-auto">
        <div className="flex justify-start gap-10">
         
<div>
<ProductSiderBar></ProductSiderBar>
</div>
<div>

<Outlet></Outlet>

</div>




        </div>
      </div>
    </div>

    </div>
  );
};

export default ProductCategoryLayout;

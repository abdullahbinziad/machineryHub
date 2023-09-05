import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {
    _id,
    title,
    shortDescription,
    image,
    categoryName,
    subCategoryName,
    fullDescription,
    specification,
  } = product;

  return (
   <Link to={`/products/singleProduct/${_id}`}>
   
   <div data-aos="zoom-in-up">
      <div className=" bg-white shadow-lg px-6 rounded-md">
        <img src={image} className="w-56 h-44 object-cover" alt="" />
      </div>
      <div className="bg-np p-4">
        <h1 className="text-white-600">{title}</h1>
      </div>
    </div>
   </Link>
  );
};

export default ProductsCard;

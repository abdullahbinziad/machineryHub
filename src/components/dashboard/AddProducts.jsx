import React, { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JoditEditor from "jodit-react";
import Uploader from "../uploader/Uploader";
import { Option, Select } from "@material-tailwind/react";
import useCategory from "../../hooks/useCategory";

const AddProducts = () => {
  const editor = useRef(null);
  const [fullDescription, setFullDescription] = useState("");
  const [specification, setSpecification] = useState("");

  const [refetch, allcategory] = useCategory();
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [allsubcategory, setAllsubcategory] = useState([]);

  const categorySelect = value => {
    console.log(value);
    setCategory(value);

    const subcategories = allcategory.filter(n => n.categoryName === value)[0][
      "subCategories"
    ];
    setAllsubcategory(subcategories);
    console.log(subcategories);
  };
  const subcategorySelect = value => {
    console.log(value);
    setSubcategory(value);
  };

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mySubmit = async data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    console.log(data.image);
    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
        params: {
          key: `${import.meta.env.VITE_IMGBB}`, // Replace with your ImgBB API key
        },
      }
    );
    const imageUrl = response.data.data.url;

    console.log(imageUrl);

    data.image = imageUrl;
    data.categoryName = category;
    data.subCategoryName = subcategory;
    data.fullDescription = fullDescription;
    data.specification = specification;

    console.log(data);
    //post the data to backend
    axios
      .post("https://nppinternational-server.vercel.app/products", data)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success("Products Added Successfully");

          reset();
          setSubcategory("");
          setCategory("");
          setSpecification("");
          setFullDescription("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto text-black font-roboto bg-white p-10 rounded-md ">
      <h1 className="text-2xl font-bold mb-6"> Add New Products </h1>
      <form onSubmit={handleSubmit(mySubmit)}>
        <div className=" grid grid-cols-2 gap-6 ">
          <div className="flex flex-col  col-span-2 space-y-1">
            <label htmlFor="">Product Title / Model</label>
            <input
              required
              {...register("title")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="title"
              placeholder="Enter Product Title/ Model"
            />
          </div>
          <div className="flex flex-col  col-span-2 space-y-1">
            <label htmlFor="">Short Description</label>
            <textarea
              required
              {...register("shortDescription")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="shortDescription"
              placeholder="Enter the Short Description"
            />
          </div>

          <div className="form-control  w-full ">
            <Select
              label="Select Category"
              onChange={value => categorySelect(value)}
              value={category}
            >
              {allcategory?.map(option => (
                <Option key={option._id} value={option.categoryName}>
                  {option.categoryName}
                </Option>
              ))}
            </Select>
          </div>

          <div className="form-control w-full ">
            <Select
              label="Select Sub Category"
              onChange={value => subcategorySelect(value)}
              value={subcategory}
            >
              {allsubcategory
                ? allsubcategory?.map(option => (
                    <Option
                      key={option.subcategorySlug}
                      value={option.subcategoryName}
                    >
                      {option.subcategoryName}
                    </Option>
                  ))
                : ""}
            </Select>
          </div>

          <div className=" space-y-2   col-span-2">
            <label htmlFor="">Specification</label>
            <JoditEditor
              ref={editor}
              value={specification}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setSpecification(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => {}}
            />
          </div>
          <div className=" space-y-2   col-span-2">
            <label htmlFor="">Full Description</label>
            <JoditEditor
              ref={editor}
              value={fullDescription}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setFullDescription(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => {}}
            />
          </div>

          <div className="flex flex-col  col-span-2 space-y-1">
            <label htmlFor="">Image</label>

            <input
              required
              {...register("image")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="file"
              name="image"
            />
          </div>
          <div className="w-full space-y-3">
            <input
              type="submit"
              className="bg-green-500 text-white px-6 py-3 my-5 rounded-md cursor-pointer w-full"
              value="Add Executives"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;

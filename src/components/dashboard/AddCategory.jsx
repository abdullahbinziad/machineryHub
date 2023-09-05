import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import useCategory from "../../hooks/useCategory";

const AddCategory = () => {

    const [refetch] = useCategory();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitStudentInfo = (data) => {
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", data);
let makeSlug = data.categoryName.toLowerCase().split(" ").join("_");
data.categorySlug = makeSlug ;



    axios
      .post("https://nppinternational-server.vercel.app/addCategory", data)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success("New Category Added");
          refetch();
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-white shadow-lg p-8 w-full rounded-md">
      <div>
        <h1 className="text-xl font-bold pb-4 text-center  text-gray-700">
          Add category
        </h1>
        <form
          onSubmit={handleSubmit(handleSubmitStudentInfo)}
          className=" my-1"
          action=""
        >
          <div className="grid grid-cols-1 gap-x-4 ">
            <div className="form-control w-full ">
              <Input
                variant="outline"
                label="Category Name"
              
                {...register("categoryName")}
                name="categoryName"
                required
                type="text"
                className="input w-full  bg-doctor-login-input"
              />
            </div>


            <div className="form-control flex justify-end w-36  ">
              <button
                type="submit"
                className=" bg-np my-4 rounded-md py-2 text-white font-bold  input  w-full "
              >
                Add Now
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default AddCategory;

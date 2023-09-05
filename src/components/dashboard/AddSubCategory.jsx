import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Input, Option, Select } from '@material-tailwind/react';
import { toast } from 'react-toastify';
import useCategory from '../../hooks/useCategory';


const AddSubCategory = () => {


  const [refetch,allcategory] = useCategory();

const [categoryID,setCategoryID] = useState("") ;


const categorySelect = (value)=>{
    console.log(value);
    setCategoryID(value);
}




  const {
    isLoading,
    error,
    data = [],
 
    isFetching,
  } = useQuery({
    queryKey: ["repoData",],
    queryFn: () =>
      axios
        .get("https://nppinternational-server.vercel.app/allcategories")
        .then((res) => res.data),
  });




    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm()


    const handleSubmitStudentInfo = (data) => {
        
        // Handle form submission (e.g., send data to server)
        console.log("Form submitted:", data);
        let makeSlug = data.subcategoryName.toLowerCase().split(" ").join("_");
        data.subcategorySlug = makeSlug ;
    
        axios
          .put(`https://nppinternational-server.vercel.app/addCategory/${categoryID}`, data)
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              toast.success(`Sub Category Added`);
              refetch();
              reset();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };



    return (
        <div className='bg-white shadow-lg p-8 w-full rounded-md'>
            
            <div>
  <h1 className="text-xl font-bold pb-4 text-center  text-gray-700">
            Add SubCategory
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitStudentInfo)}
            className="space-y-1 my-3"
            action=""
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-10">
              <div className="form-control w-full ">
                <Input
                  variant="outline"
                  label="Sub Category Name"
                 
                  {...register("subcategoryName")}
                  name="subcategoryName"
                  
                required
                  type="text"
                  className="input w-full bg-doctor-login-input"
                />
              </div>

              
              <div className="form-control w-full ">
              <Select
                  label="Select Platform"
                  
                  onChange={(value)=>categorySelect(value)}
                  value={categoryID}
                >
                  {allcategory.map((option) => (
                    <Option key={option.categoryName} value={option._id}>
                      {option.categoryName}
                    </Option>
                  ))}
                </Select>
              </div>
            
              <div className="form-control flex justify-end w-36  ">
                <button
                  type="submit"
                  className=" bg-np rounded-md py-2 text-white font-bold  input  w-full "
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

export default AddSubCategory;
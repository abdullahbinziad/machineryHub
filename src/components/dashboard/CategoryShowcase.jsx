import {
  ChevronDownIcon,
  ChevronRightIcon,
  PresentationChartBarIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";

import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useCategory from "../../hooks/useCategory";

const CategoryShowcase = () => {
  const [openAccordions, setOpenAccordions] = React.useState([]);

  const handleAccordionToggle = index => {
    const updatedAccordions = [...openAccordions];
    updatedAccordions[index] = !updatedAccordions[index];
    setOpenAccordions(updatedAccordions);
  };

  const [refetch, allcategory] = useCategory();

  //delete category
  const deleteCateroy = categoryId => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://nppinternational-server.vercel.app/deleteCategory/${categoryId}`
          )
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            refetch();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  //delete subcategory
  const deleteSubCateroy = (categoryId, subcategorySlug) => {
    console.log(categoryId, subcategorySlug);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://nppinternational-server.vercel.app/deleteCategory/${categoryId}/${subcategorySlug}`
          )
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            refetch();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="bg-white p-10 h-fit rounded-lg text-gray-500">
      <h1 className="text-black text-xl">All Category and SubCategory</h1>
      <div className="mt-10">
        {allcategory.map((singleData, index) => (
          <div key={index}>
            <Accordion
              open={openAccordions[index] || false}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordions[index] ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <div className="flex items-center gap-4">
                <ListItem className="p-0" selected={openAccordions[index]}>
                  <AccordionHeader
                    onClick={() => handleAccordionToggle(index)}
                    className="border-b-0 p-3"
                  >
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {singleData.categoryName}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <ListItemSuffix>
                  <TrashIcon
                    onClick={() => deleteCateroy(singleData._id)}
                    className="h-5 text-red-500 w-5"
                  />
                </ListItemSuffix>
              </div>
              <AccordionBody className="py-1">
                <List className="p-0">
                  {singleData.subCategories?.map((subcategory, subIndex) => (
                    <ListItem key={subIndex}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      {subcategory.subcategoryName}
                      <ListItemSuffix>
                        <TrashIcon
                          onClick={() =>
                            deleteSubCateroy(
                              singleData._id,
                              subcategory.subcategorySlug
                            )
                          }
                          className="h-5 text-red-500 w-5"
                        />
                      </ListItemSuffix>
                    </ListItem>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;

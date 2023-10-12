import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useReqWithCredentials from "../../hooks/useReqWithCredentials";
import { toast } from "react-toastify";

const Activity = () => {
  const { data: activities = [], refetch } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3000/activities");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const handleDelete = id => {
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
        useReqWithCredentials("delete", `/activities/${id}`)
          .then(res => {
            if (res.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your activity has been deleted.",
                "success"
              );
              refetch();
            } else {
              toast.error(res.message);
            }
          })
          .catch(err => console.log(err));
      }
    });
  };
  return (
    <>
      <div className="max-w-xl w-full px-2 md:px-5 space-y-3 bg-white py-4 rounded-lg">
        <h2 className="mb-2">Activities</h2>
        {activities.map(activity => (
          <div
            key={activity._id}
            className="flex justify-between hover:bg-gray-200 items-center p-4 rounded-lg"
          >
            <img
              src={activity.activityCover}
              alt={activity.title}
              className="w-16 h-12 object-cover"
            />
            <h3>{activity.title}</h3>
            <button onClick={() => handleDelete(activity._id)}>
              <FaTrash className="text-red-500 w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activity;

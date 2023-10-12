import axios from "axios";
import JoditEditor from "jodit-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useReqWithCredentials from "../../hooks/useReqWithCredentials";

const AddActivity = () => {
  const [post, setPost] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [activityUploading, setActivityUploading] = useState(false);

  const formStyle =
    "block w-full mt-1 p-3 border-black dark:bg-my-dark-btn text-gray-500 rounded-lg shadow-sm bg-gray-50 focus:border-indigo-300 focus:ring-2 focus:ring-np focus:ring-opacity-50 outline-none";
  const handleAddEvent = async data => {
    setActivityUploading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
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
      data.activityCover = imageUrl;
    } catch (error) {
      console.log(error);
    }

    data.post = post;
    useReqWithCredentials("post", "/add-activity", data)
      .then(data => {
        if (data.acknowledged) {
          toast.success("Added new activity successfully.");
          reset();
          setPost("");
          setActivityUploading(false);
        } else {
          toast.error(data.message);
          setActivityUploading(false);
        }
      })
      .catch(err => {
        toast.error(err.message);
        setActivityUploading(false);
      });
  };
  return (
    <>
      <div>
        <form className="space-y-5" onSubmit={handleSubmit(handleAddEvent)}>
          <div>
            <label
              htmlFor="activity-title"
              className="block text-gray-600 font-sans font-bold"
            >
              Title
            </label>
            <input
              className={`${formStyle}`}
              id="activity-title"
              type="text"
              name="title"
              placeholder="Activity title here"
              {...register("title")}
            />
          </div>
          <div>
            <label
              htmlFor="short-description"
              className="block text-gray-600 font-sans font-bold"
            >
              Short description
            </label>
            <textarea
              name="shortDescription"
              id="short-description"
              className={`${formStyle}`}
              placeholder="Short description in 10-15 words..."
              {...register("shortDescription")}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="activity-cover"
              className="block text-gray-600 font-sans font-bold"
            >
              Activity cover
            </label>
            <input
              type="file"
              name="image"
              id="activity-cover"
              className={`${formStyle}`}
              {...register("image")}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-sans font-bold mb-2">
              Details post
            </label>
            <JoditEditor
              value={post}
              onBlur={newContent => setPost(newContent)}
            />
          </div>
          <button
            className="
            h-10
            px-5
            text-white
            bg-btn-grad
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            bg-np
            hover:bg-indigo-800
            "
            disabled={activityUploading}
            type="submit"
          >
            {activityUploading ? "Uploading..." : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddActivity;

import { useLoaderData } from "react-router-dom";
import cover from "../../assets/contact-us.jpg";

const ActivityDetails = () => {
  const data = useLoaderData();
  if (!data) {
    console.log("No data found");
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Corrected line
        }}
        className="w-full flex justify-center items-center h-[450px]"
      >
        <h1 className="text-2xl md:text-5xl text-gray-100 relative top-24">
          Contact Us
        </h1>
      </div>
      <div className="md:w-4/5 mx-auto py-10">
        <h2 className="">
          <span className="font-bold">Activity: </span>
          <span>{data.title}.</span>
        </h2>
        <div className="mt-10">
          <div dangerouslySetInnerHTML={{ __html: data.post }}></div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetails;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ActivityCard from "./ActivityCard";

const Activity = () => {
  const { data: activities = [] } = useQuery({
    queryKey: ["activity"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3000/activities");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="md:w-4/5 mx-auto mb-10">
      <h2 className="text-center font-bold text-2xl md:text-4xl ">
        Recent activity
      </h2>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {activities.map(activity => (
          <ActivityCard key={activity._id} activityData={activity} />
        ))}
      </div>
    </div>
  );
};

export default Activity;

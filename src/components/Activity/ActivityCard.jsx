import { format } from "date-fns";
import { Link } from "react-router-dom";

const ActivityCard = ({ activityData }) => {
  const parsedDate = new Date(activityData.addedOn);
  return (
    <div className="w-80 space-y-3 relative">
      <img
        src={activityData.activityCover}
        alt={activityData.title}
        className="w-80 aspect-[1/0.7]"
      />
      <Link to={`/activity/${activityData._id}`} className="inline-block">
        <h2 className="font-semibold hover:text-np transition-all">
          {activityData.title.length > 45
            ? activityData.title.slice(0, 45) + "..."
            : activityData.title}
        </h2>
      </Link>
      <p className="font-sans text-sm text-gray-700">
        {activityData.shortDescription}
      </p>
      <div className="w-20 h-20 bg-np/80 absolute -top-3 left-0">
        <span className="text-white font-bold block text-center text-2xl mt-2">
          {format(parsedDate, "dd")}
        </span>
        <span className="text-white block text-center text-xs mt-2">
          {format(parsedDate, "MMMM yyyy")}
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;

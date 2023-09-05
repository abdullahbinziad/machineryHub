import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategory = () => {
  const {
    isLoading,
    error,
    data = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("https://nppinternational-server.vercel.app/allcategories").then((res) => res.data),
  });
const allcategory = data ;
 

  return [refetch, allcategory];
};

export default useCategory;

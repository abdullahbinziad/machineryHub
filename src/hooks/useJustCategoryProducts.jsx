import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useJustCategoryProducts = (categoryName) => {
  const {
    isLoading,
    error,
    data = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['repoData', categoryName],
    queryFn: () =>
      axios
        .get(`https://nppinternational-server.vercel.app/categoryProducts/${categoryName}`)
        .then((res) => res.data),
  });

 const mydata = data ;


  return [refetch, mydata];
};

export default useJustCategoryProducts;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProductsByCategory = (content) => {
  const {
    isLoading,
    error,
    data = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['repoData', content],
    queryFn: () =>
      axios
        .get(`https://nppinternational-server.vercel.app/allproducts/${content.categoryName}/${content.subcategoryName}/`)
        .then((res) => res.data),
  });

 const mydata = data ;

  return [refetch, mydata];
};

export default useProductsByCategory;

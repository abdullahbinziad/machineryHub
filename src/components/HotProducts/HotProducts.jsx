import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HotProductCard from "./HotProductCard";

const HotProducts = () => {
  const { data: hotProducts = [] } = useQuery({
    queryKey: ["hot-products"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:3000/hot-products");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="text-black md:w-4/5 mx-auto px-2 md:px-0">
        <h2 className="font-bold text-center text-2xl md:text-4xl uppercase mt-10 mb-20">
          <span className="text-red-500">Hot</span> products
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
            {hotProducts?.map(product => (
              <HotProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProducts;

import { useNavigate } from "react-router-dom";

const HotProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/singleProduct/${product._id}`)}
      className="relative w-80 h-48 ring-1 ring-gray-500 rounded-md overflow-hidden mx-auto hover:scale-110 transition-all cursor-pointer"
    >
      <img
        src={product?.image}
        alt="product image"
        className="absolute w-full h-full z-10 object-cover"
      />
      <div className="absolute z-20 bottom-0 bg-gray-900/70 w-full p-1 text-white">
        <p className="text-center">{product?.title}</p>
      </div>
    </div>
  );
};

export default HotProductCard;

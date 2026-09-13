import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("PRODUCT CLICKED");
    console.log(product);

    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 md:h-64 lg:h-80 object-cover"
      />

      <div className="p-3 md:p-4">
        <h2 className="text-base md:text-lg font-semibold truncate">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2 font-medium">
          Rs. {product.price}
        </p>

        <button
          onClick={(e) => e.stopPropagation()}
          className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
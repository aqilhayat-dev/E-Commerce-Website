import React from "react";

const Product = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-full h-48 md:h-60 object-cover"
      />

      <div className="p-3 md:p-4">
        <h2 className="text-base md:text-lg font-semibold truncate">
          {name}
        </h2>

        <p className="text-gray-600 mt-2 font-medium">
          Rs. {price}
        </p>

        <button className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default Product;
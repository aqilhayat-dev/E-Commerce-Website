
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F8F7F4] px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-4">
          Product Not Found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-[#171717] text-white px-6 py-3 rounded-full text-sm hover:bg-[#8B6F47] transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F8F7F4] px-5 md:px-10 lg:px-16 py-8 lg:py-10">

      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">

        {/* Product Image */}
        <div className="flex items-center justify-center">

          <div className="w-full max-w-[520px] bg-white rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[480px] lg:h-[540px] object-cover hover:scale-[1.02] transition duration-500"
            />
          </div>

        </div>


        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-[#8B6F47] uppercase tracking-[3px] text-xs font-semibold">
            {product.category}
          </p>


          {/* Product Name */}
          <h1 className="text-[#171717] text-3xl lg:text-4xl font-semibold leading-tight mt-3">
            {product.name}
          </h1>


          {/* Price */}
          <p className="text-[#8B6F47] text-2xl lg:text-3xl font-semibold mt-5">
            Rs. {product.price}
          </p>


          {/* Divider */}
          <div className="w-full h-px bg-[#D8D2CA] mt-6"></div>


          {/* Description */}
          <p className="text-[#666666] text-sm lg:text-base leading-6 mt-6 max-w-lg">
            {product.description}
          </p>


          {/* Quantity */}
          <div className="mt-7">

            <label className="text-[#171717] text-sm font-semibold">
              Quantity
            </label>

            <div className="flex items-center mt-3">

              <button
                className="w-10 h-10 border border-[#D5D0C9] bg-white text-lg hover:bg-[#171717] hover:text-white transition"
              >
                −
              </button>

              <span className="w-12 h-10 flex items-center justify-center border-t border-b border-[#D5D0C9] bg-white text-sm">
                1
              </span>

              <button
                className="w-10 h-10 border border-[#D5D0C9] bg-white text-lg hover:bg-[#171717] hover:text-white transition"
              >
                +
              </button>

            </div>

          </div>


          {/* Buttons */}
          <div className="flex gap-3 mt-7">

            <button
              onClick={() => alert("Added to cart")}
              className="flex-1 bg-[#171717] text-white py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#8B6F47] transition"
            >
              ADD TO CART
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center border border-[#171717] rounded-full text-xl hover:bg-[#171717] hover:text-white transition"
            >
              ♡
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;

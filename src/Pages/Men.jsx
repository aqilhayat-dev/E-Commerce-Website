import React, { useEffect, useState } from "react";

const Men = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products/category/mens-dress")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });

  }, []);

  return (
    <section className="px-4 py-10 md:px-8 lg:px-12">

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Men's Collection
        </h1>

        <p className="mt-2 text-gray-500">
          Discover our latest men's shirts
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="overflow-hidden bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64"
              />
            </div>

            <div className="p-4">

              <h2 className="truncate text-base font-semibold md:text-lg">
                {product.title}
              </h2>

              <p className="mt-2 text-lg font-bold">
                ${product.price}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                ⭐ {product.rating}
              </p>

              <button className="mt-4 w-full rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Men;
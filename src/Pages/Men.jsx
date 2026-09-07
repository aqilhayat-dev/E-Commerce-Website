import React, { useEffect, useState } from "react";
import Product from "./Product";
const Men = () => {

  const man = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 2800,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
    },
    {
      id: 2,
      name: "Black Formal Shirt",
      price: 3000,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
    },
    {
      id: 3,
      name: "Blue Oxford Shirt",
      price: 3200,
      image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=500"
    },
    {
      id: 4,
      name: "Casual Check Shirt",
      price: 2600,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500"
    },
    {
      id: 5,
      name: "Beige Chino Pants",
      price: 3500,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500"
    },
    {
      id: 6,
      name: "Classic Black Trousers",
      price: 3800,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    },
    {
      id: 7,
      name: "Blue Denim Jeans",
      price: 4000,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    },
    {
      id: 8,
      name: "Dark Blue Jeans",
      price: 4200,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    },
    {
      id: 9,
      name: "Grey Polo Shirt",
      price: 2200,
      image: "https://images.unsplash.com/photo-1625910513413-5fc45d3b6b4b?w=500"
    },
    {
      id: 10,
      name: "Black Polo Shirt",
      price: 2400,
      image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500"
    },
    {
      id: 11,
      name: "Basic White T-Shirt",
      price: 1800,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
      id: 12,
      name: "Black Oversized T-Shirt",
      price: 2000,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500"
    },
    {
      id: 13,
      name: "Grey Hoodie",
      price: 3500,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
    },
    {
      id: 14,
      name: "Black Hoodie",
      price: 3700,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500"
    },
    {
      id: 15,
      name: "Denim Jacket",
      price: 4500,
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500"
    },
    {
      id: 16,
      name: "Black Leather Jacket",
      price: 6500,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
      id: 17,
      name: "Formal Navy Blazer",
      price: 7500,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500"
    },
    {
      id: 18,
      name: "Casual Linen Shirt",
      price: 2900,
      image: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=500"
    },
    {
      id: 19,
      name: "Green Cargo Pants",
      price: 3600,
      image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b2?w=500"
    },
    {
      id: 20,
      name: "Cream Sweatshirt",
      price: 3200,
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500"
    }
  ];

  return (
   <div className="px-4 py-8 md:px-8">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
    Man's Collection
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {man.map((item) => (
      <Product
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
      />
    ))}
  </div>
</div>
     
  );

}

export default Men;
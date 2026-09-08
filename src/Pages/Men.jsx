import React, { useEffect, useState } from "react";
import Product from "./Product";
const Men = () => {

  const man = [
  {
    id: 1,
    name: "Premium White Oversized T-Shirt",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 2,
    name: "Essential Black T-Shirt",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 2400,
    image:
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N78216s.jpg?im=Resize,width=750",
  },
  {
    id: 4,
    name: "Classic Beige T-Shirt",
    price: 2100,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
  },
  {
    id: 5,
    name: "Relaxed Fit Oxford Shirt",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    id: 6,
    name: "Midnight Black Formal Shirt",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
  },
  {
    id: 7,
    name: "Navy Blue t-Shirt",
    price: 3400,
    image:
      "https://mendeez.com/cdn/shop/files/marine-v-neckt-shirtsmendeez-pk-0011717-658052_a3a1d4de-3d27-4b3f-a26e-934f9097cb34.jpg?v=1756381186&width=720",
  },
  {
    id: 8,
    name: "Premium Green Casual Shirt",
    price: 3300,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
  },
  
  {
    id: 9,
    name: "Minimal White Polo Shirt",
    price: 2700,
    image:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500",
  },
  {
    id: 10,
    name: "Straight Fit Blue Jeans",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
  },
  {
    id: 11,
    name: "Dark Wash Slim Jeans",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  },
  {
    id: 12,
    name: "Relaxed Beige Chinos",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
  },
  {
    id: 13,
    name: "Modern Black Trousers",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
  },
 
  {
    id: 14,
    name: "Premium Grey Hoodie",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
  },
  {
    id: 15,
    name: "Oversized Cream Sweatshirt",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
  },
  {
    id: 16,
    name: "Classic Blue Denim Jacket",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500",
  },
  {
    id: 17,
    name: "Premium Black Leather Jacket",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
  },
  {
    id: 18,
    name: "Tailored Navy Blazer",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
  },
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
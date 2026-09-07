import React from "react";
import Product from "./Product";

const Accessory = () => {
  const accessories = [
    {
      id: 1,
      name: "Classic Hand Bag",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 2,
      name: "Stylish Sunglasses",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 3,
      name: "Luxury Watch",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    },
    {
      id: 4,
      name: "Fashion Bracelet",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    },
    {
      id: 5,
      name: "Leather Wallet",
      price: 1600,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    },
    {
      id: 6,
      name: "Fashion Cap",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
    },
    {
      id: 7,
      name: "Elegant Shoulder Bag",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
    },
    {
      id: 8,
      name: "Round Sunglasses",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    },
    {
      id: 9,
      name: "Classic Leather Watch",
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 10,
      name: "Pearl Necklace",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    },
    {
      id: 11,
      name: "Leather Belt",
      price: 1400,
      image:
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500",
    },
    {
      id: 12,
      name: "Mini Crossbody Bag",
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    },
    {
      id: 13,
      name: "Silver Earrings",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    },
    {
      id: 14,
      name: "Classic Beanie",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
    },
    {
      id: 15,
      name: "Travel Backpack",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
    {
      id: 16,
      name: "Fashion Ring",
      price: 1300,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    },
    {
      id: 17,
      name: "Luxury Handbag",
      price: 4800,
      image:
        "https://images.unsplash.com/photo-1566150902887-9679b36a4f02?w=500",
    },
    {
      id: 18,
      name: "Classic Tie",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500",
    },
    {
      id: 19,
      name: "Fashion Hair Clips",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    },
    {
      id: 20,
      name: "Stylish Tote Bag",
      price: 2900,
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
    },
  ];

  return (
  <div className="px-4 py-8 md:px-8">
    
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Accessories
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {accessories.map((item) => (
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

export default Accessory;
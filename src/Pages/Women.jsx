import Product from "./Product";

const Women = () => {
 
 const women = [
  {
    id: 1,
    name: "Elegant White Floral Kurta",
    price: 3200,
    image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Blush Pink Floral Kurta Set",
    price: 3500,
    image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Garden Muse Kurta",
    price: 3800,
    image: "https://images.unsplash.com/photo-1708534419572-6e6614a53ca1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Emerald Grace Kurta",
    price: 2900,
    image: "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Golden Tiered Embroidered Kurta",
    price: 4500,
    image: "https://images.unsplash.com/photo-1760287363878-1a09af715b80?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Ivory Elegance Kurta",
    price: 3600,
    image: "https://images.unsplash.com/photo-1667665970124-2273c6ef3489?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Midnight Paisley Kurta",
    price: 3900,
    image: "https://images.unsplash.com/photo-1760287364219-160c234ded00?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Maroon Charm Kurta",
    price: 2800,
    image: "https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Royal Purple Kurta",
    price: 4200,
    image: "https://images.unsplash.com/photo-1708534246051-7f47b279e94b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Heritage Green Kurta",
    price: 2200,
    image: "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "Rosewood Tie-Neck Kurta",
    price: 2600,
    image: "https://images.unsplash.com/photo-1762777777819-4d9aa5529368?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    name: "Studio Chic Kurta Flatlay",
    price: 2800,
    image: "https://images.unsplash.com/photo-1715859019107-90c16285b149?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 13,
    name: "Festive Red Kurta",
    price: 3000,
    image: "https://images.unsplash.com/photo-1597983073512-90bd150e19f6?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 14,
    name: "Sapphire Button-Up Kurta",
    price: 3200,
    image: "https://images.unsplash.com/photo-1760287363750-1c888c75578f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 15,
    name: "Bloom Garden Kurta",
    price: 2900,
    image: "https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 16,
    name: "Patterned Elegance Kurta",
    price: 2700,
    image: "https://images.unsplash.com/photo-1767785829347-cc13bd969514?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 17,
    name: "Classic Poise Kurta",
    price: 2400,
    image: "https://images.unsplash.com/photo-1655288828238-21d86ec971c3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 18,
    name: "Riverside Dusk Kurta",
    price: 3300,
    image: "https://images.unsplash.com/photo-1667665970118-f55705003914?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 19,
    name: "Timeless Portrait Kurta",
    price: 2500,
    image: "https://images.unsplash.com/photo-1667665970121-c3504c519cda?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 20,
    name: "Amber Glow Kurta Set",
    price: 4200,
    image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 21,
    name: "Everyday Grace Kurta",
    price: 3500,
    image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 22,
    name: "Long Sleeve Kurta",
    price: 3700,
    image: "https://images.unsplash.com/photo-1708534419572-6e6614a53ca1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 23,
    name: "Evening Soirée Kurta",
    price: 4800,
    image: "https://images.unsplash.com/photo-1760287363878-1a09af715b80?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 24,
    name: "Cotton Casual Kurta",
    price: 2800,
    image: "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 25,
    name: "Floral Summer Kurta",
    price: 3100,
    image: "https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 26,
    name: "Emerald Elegance Kurta",
    price: 3900,
    image: "https://images.unsplash.com/photo-1760287364219-160c234ded00?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 27,
    name: "Casual White Kurti",
    price: 1800,
    image: "https://images.unsplash.com/photo-1667665970124-2273c6ef3489?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 28,
    name: "Beige Everyday Kurta",
    price: 3400,
    image: "https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 29,
    name: "Modern Ethnic Kurta",
    price: 3600,
    image: "https://images.unsplash.com/photo-1767785829347-cc13bd969514?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 30,
    name: "Premium Bridal Kurta",
    price: 5200,
    image: "https://images.unsplash.com/photo-1762777777819-4d9aa5529368?w=600&auto=format&fit=crop&q=80"
  }
];

  return (

    
<div className="px-4 py-8 md:px-8">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
    Women's Collection
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {women.map((item) => (
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
};

export default Women;
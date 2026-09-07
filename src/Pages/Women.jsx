import Product from "./Product";

const Women = () => {
 
 const women = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    price: 3200,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
  },
  {
    id: 2,
    name: "Classic White Dress",
    price: 3500,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500"
  },
  {
    id: 3,
    name: "Floral Midi Dress",
    price: 3800,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500"
  },
  {
    id: 4,
    name: "Casual Beige Dress",
    price: 2900,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
  },
  {
    id: 5,
    name: "Black Evening Dress",
    price: 4500,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500"
  },
  {
    id: 6,
    name: "Elegant Pink Dress",
    price: 3600,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500"
  },
  {
    id: 7,
    name: "Minimal Black Dress",
    price: 3900,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500"
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 2800,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500"
  },
  {
    id: 9,
    name: "Classic Blazer",
    price: 4200,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
  },
  {
    id: 10,
    name: "Satin Blouse",
    price: 2200,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500"
  },
  {
    id: 11,
    name: "Cream Knit Sweater",
    price: 2600,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500"
  },
  {
    id: 12,
    name: "Oversized Knit Sweater",
    price: 2800,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500"
  },
  {
    id: 13,
    name: "Casual Blue Jeans",
    price: 3000,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
  },
  {
    id: 14,
    name: "High Waist Jeans",
    price: 3200,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
  },
  {
    id: 15,
    name: "Wide Leg Trousers",
    price: 2900,
    image: "https://images.unsplash.com/photo-1506629905607-d9f4c2e4e5b4?w=500"
  },
  {
    id: 16,
    name: "Pleated Midi Skirt",
    price: 2700,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500"
  },
  {
    id: 17,
    name: "Classic Denim Skirt",
    price: 2400,
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500"
  },
  {
    id: 18,
    name: "Elegant Maxi Skirt",
    price: 3300,
    image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500"
  },
  {
    id: 19,
    name: "Linen Trousers",
    price: 2500,
    image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=500"
  },
  {
    id: 20,
    name: "Elegant Jumpsuit",
    price: 4200,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"
  },
  {
    id: 21,
    name: "Casual Jumpsuit",
    price: 3500,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500"
  },
  {
    id: 22,
    name: "Long Sleeve Dress",
    price: 3700,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500"
  },
  {
    id: 23,
    name: "Cocktail Dress",
    price: 4800,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
  },
  {
    id: 24,
    name: "Cotton Casual Dress",
    price: 2800,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500"
  },
  {
    id: 25,
    name: "Floral Summer Outfit",
    price: 3100,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500"
  },
  {
    id: 26,
    name: "Elegant Green Dress",
    price: 3900,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500"
  },
  {
    id: 27,
    name: "Casual White Top",
    price: 1800,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500"
  },
  {
    id: 28,
    name: "Beige Casual Outfit",
    price: 3400,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
  },
  {
    id: 29,
    name: "Modern Casual Dress",
    price: 3600,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500"
  },
  {
    id: 30,
    name: "Premium Evening Outfit",
    price: 5200,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"
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
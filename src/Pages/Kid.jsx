import Product from "./Product";

const Kid = () => {
 
const Kid = [
  {
    id: 1,
    name: "Pink Floral Princess Dress",
    price: 3200,
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
  },
  {
    id: 2,
    name: "Elegant Pink Party Frock",
    price: 3500,
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
  },
  {
    id: 3,
    name: "White Floral Rose Frock",
    price: 3800,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
  },
 
  {
    id: 5,
    name: "Floral Garden Party Dress",
    price: 3600,
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
  },
  {
    id: 6,
    name: "Pastel Blue Princess Dress",
    price: 4200,
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
  },
  {
    id: 7,
    name: "Pink Floral Summer Frock",
    price: 2900,
    image:
      "https://image.made-in-china.com/202f0j00bnPlIMToOagz/Girls-Dress-Spring-New-Children-s-Floral-Embroidery-Skirt-Middle-School-Children-s-Princess-Skirt.webp",
  },
 
  {
    id: 9,
    name: "Blue Floral Summer Dress",
    price: 2800,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
  },
  {
    id: 10,
    name: "Navy Blue Party Frock",
    price: 3500,
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
  },
  {
    id: 11,
    name: "Pink Bow Princess Dress",
    price: 3300,
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
  },
  {
    id: 12,
    name: "Floral Pink Birthday Dress",
    price: 4000,
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
  },
  {
    id: 13,
    name: "Green Kurta",
    price: 3700,
    image:
      "https://i.pinimg.com/736x/f8/b9/7f/f8b97f3445e536222b97597bac0c596e.jpg",
  },
  {
    id: 14,
    name: "Rose Garden Dress",
    price: 3400,
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
  },
  {
    id: 15,
    name: "Mint Green Tiered Frock",
    price: 3000,
    image:
      "https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-46cde8b0-08c5-4033-93a4-419e97a59563.webp?q=75&w=960",
  },
  {
    id: 16,
    name: "Elegant Blue Floral Frock",
    price: 3600,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
  },
  {
    id: 17,
    name: "Pink Lace Party Dress",
    price: 3900,
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
  },
  {
    id: 18,
    name: "Royal Navy Bow Frock",
    price: 4200,
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
  },
  {
    id: 19,
    name: "Pretty Pink Floral Frock",
    price: 3200,
    image:
      "https://image.made-in-china.com/202f0j00bnPlIMToOagz/Girls-Dress-Spring-New-Children-s-Floral-Embroidery-Skirt-Middle-School-Children-s-Princess-Skirt.webp",
  },
  {
    id: 20,
    name: "Pastel Garden Party Dress",
    price: 4500,
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
  },
  {
    id: 21,
    name: "White & Pink Floral Dress",
    price: 3500,
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
  },
  {
    id: 22,
    name: "Lavender Fairy Frock",
    price: 4100,
    image:
      "https://img.drz.lazcdn.com/g/kf/Sbee07e538be14a15949d9f8072fe1cd2I.jpg_720x720q80.jpg",
  },
  {
    id: 23,
    name: "Elegant Floral Midi Dress",
    price: 3800,
    image:
      "https://assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/27395884/2024/2/27/4e8a6389-4e91-4c92-9e6e-4c6f66909cb51709033140428-BAESD-Floral-Print-Bell-Sleeve-Fit--Flare-Dress-420170903314-1.jpg",
  },
  {
    id: 24,
    name: "Light Green Bow Frock",
    price: 2900,
    image:
      "https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-46cde8b0-08c5-4033-93a4-419e97a59563.webp?q=75&w=960",
  },
  {
    id: 25,
    name: "Blue Floral Casual Dress",
    price: 2700,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
  },
  {
    id: 26,
    name: "Classic Pink Party Frock",
    price: 3600,
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
  },
  {
    id: 27,
    name: "Midnight Blue Princess Dress",
    price: 4300,
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
  },
  {
    id: 28,
    name: "Soft Pink Floral Dress",
    price: 3300,
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
  },
  {
    id: 29,
    name: "Dreamy Black Party Dress",
    price: 4400,
    image:
      "https://tassels.pk/cdn/shop/files/DSC02790copy.jpg?v=1776956680&width=500",
  },
  {
    id: 30,
    name: "Premium Floral Princess Dress",
    price: 5200,
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
  },
];

  return (

    
<div className="px-4 py-8 md:px-8">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
    Kid's Collection
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3  cvxzz lg:grid-cols-4 gap-4 md:gap-6">
    {Kid.map((item) => (
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

export default Kid;
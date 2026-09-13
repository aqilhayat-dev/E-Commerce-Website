const products = [
  // =========================
  // WOMEN
  // =========================

  {
    id: "w1",
    name: "Elegant White Floral Kurta",
    price: 3200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=80",
    description:
      "An elegant floral kurta designed for a comfortable and stylish everyday look.",
  },
  {
    id: "w2",
    name: "Blush Pink Floral Kurta Set",
    price: 3500,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=80",
    description:
      "A beautiful blush pink floral kurta set perfect for casual and semi-formal occasions.",
  },
  {
    id: "w3",
    name: "Garden Muse Kurta",
    price: 3800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1708534419572-6e6614a53ca1?w=600&auto=format&fit=crop&q=80",
    description:
      "A graceful garden-inspired kurta combining comfort with an elegant modern style.",
  },
  {
    id: "w4",
    name: "Emerald Grace Kurta",
    price: 2900,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?w=600&auto=format&fit=crop&q=80",
    description:
      "A sophisticated emerald kurta designed for an effortless and elegant appearance.",
  },
  {
    id: "w5",
    name: "Golden Tiered Embroidered Kurta",
    price: 4500,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1760287363878-1a09af715b80?w=600&auto=format&fit=crop&q=80",
    description:
      "A premium embroidered kurta featuring a beautiful tiered design for festive occasions.",
  },
  {
    id: "w6",
    name: "Ivory Elegance Kurta",
    price: 3600,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1667665970124-2273c6ef3489?w=600&auto=format&fit=crop&q=80",
    description:
      "A timeless ivory kurta with a clean and elegant appearance.",
  },
  {
    id: "w7",
    name: "Midnight Paisley Kurta",
    price: 3900,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1760287364219-160c234ded00?w=600&auto=format&fit=crop&q=80",
    description:
      "A stylish midnight paisley kurta designed for an elegant evening look.",
  },
  {
    id: "w8",
    name: "Maroon Charm Kurta",
    price: 2800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=600&auto=format&fit=crop&q=80",
    description:
      "A charming maroon kurta suitable for both everyday wear and special occasions.",
  },
  {
    id: "w9",
    name: "Royal Purple Kurta",
    price: 4200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1708534246051-7f47b279e94b?w=600&auto=format&fit=crop&q=80",
    description:
      "A royal purple kurta offering a bold and sophisticated fashion statement.",
  },
  {
    id: "w10",
    name: "Heritage Green Kurta",
    price: 2200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1597983073540-684a10b15ab1?w=600&auto=format&fit=crop&q=80",
    description:
      "A comfortable heritage-inspired green kurta for everyday styling.",
  },
  {
    id: "w11",
    name: "Rosewood Tie-Neck Kurta",
    price: 2600,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1762777777819-4d9aa5529368?w=600&auto=format&fit=crop&q=80",
    description:
      "A stylish rosewood kurta featuring a modern tie-neck design.",
  },
  {
    id: "w12",
    name: "Studio Chic Kurta Flatlay",
    price: 2800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1715859019107-90c16285b149?w=600&auto=format&fit=crop&q=80",
    description:
      "A chic and versatile kurta designed with a modern studio-inspired aesthetic.",
  },
  {
    id: "w13",
    name: "Festive Red Kurta",
    price: 3000,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1597983073512-90bd150e19f6?w=600&auto=format&fit=crop&q=80",
    description:
      "A vibrant red kurta that brings a festive touch to your wardrobe.",
  },
  {
    id: "w14",
    name: "Sapphire Button-Up Kurta",
    price: 3200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1760287363750-1c888c75578f?w=600&auto=format&fit=crop&q=80",
    description:
      "A sapphire blue button-up kurta combining traditional elegance with modern style.",
  },
  {
    id: "w15",
    name: "Bloom Garden Kurta",
    price: 2900,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=600&auto=format&fit=crop&q=80",
    description:
      "A floral-inspired kurta designed for a fresh and graceful appearance.",
  },
  {
    id: "w16",
    name: "Patterned Elegance Kurta",
    price: 2700,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1767785829347-cc13bd969514?w=600&auto=format&fit=crop&q=80",
    description:
      "A beautifully patterned kurta offering an elegant everyday fashion option.",
  },
  {
    id: "w17",
    name: "Classic Poise Kurta",
    price: 2400,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1655288828238-21d86ec971c3?w=600&auto=format&fit=crop&q=80",
    description:
      "A classic kurta with a simple and refined design.",
  },
  {
    id: "w18",
    name: "Riverside Dusk Kurta",
    price: 3300,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1667665970118-f55705003914?w=600&auto=format&fit=crop&q=80",
    description:
      "A sophisticated kurta inspired by soft evening tones.",
  },
  {
    id: "w19",
    name: "Timeless Portrait Kurta",
    price: 2500,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1667665970121-c3504c519cda?w=600&auto=format&fit=crop&q=80",
    description:
      "A timeless design made for simple and elegant everyday fashion.",
  },
  {
    id: "w20",
    name: "Amber Glow Kurta Set",
    price: 4200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=80",
    description:
      "A warm amber kurta set designed for festive and semi-formal occasions.",
  },
  {
    id: "w21",
    name: "Everyday Grace Kurta",
    price: 3500,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=80",
    description:
      "A graceful everyday kurta combining comfort and contemporary style.",
  },
  {
    id: "w22",
    name: "Long Sleeve Kurta",
    price: 3700,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1708534419572-6e6614a53ca1?w=600&auto=format&fit=crop&q=80",
    description:
      "A stylish long-sleeve kurta suitable for everyday and semi-formal wear.",
  },
  {
    id: "w23",
    name: "Evening Soirée Kurta",
    price: 4800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1760287363878-1a09af715b80?w=600&auto=format&fit=crop&q=80",
    description:
      "A premium evening kurta designed for elegant occasions and celebrations.",
  },
  {
    id: "w24",
    name: "Cotton Casual Kurta",
    price: 2800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1597983073750-16f5ded1321f?w=600&auto=format&fit=crop&q=80",
    description:
      "A comfortable cotton kurta perfect for casual everyday use.",
  },
  {
    id: "w25",
    name: "Floral Summer Kurta",
    price: 3100,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=600&auto=format&fit=crop&q=80",
    description:
      "A fresh floral kurta designed for a comfortable summer wardrobe.",
  },
  {
    id: "w26",
    name: "Emerald Elegance Kurta",
    price: 3900,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1760287364219-160c234ded00?w=600&auto=format&fit=crop&q=80",
    description:
      "An elegant emerald piece with a sophisticated traditional appearance.",
  },
  {
    id: "w27",
    name: "Casual White Kurti",
    price: 1800,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1667665970124-2273c6ef3489?w=600&auto=format&fit=crop&q=80",
    description:
      "A simple white kurti designed for comfortable casual wear.",
  },
  {
    id: "w28",
    name: "Beige Everyday Kurta",
    price: 3400,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1708534246055-d7b149acb731?w=600&auto=format&fit=crop&q=80",
    description:
      "A versatile beige kurta that works beautifully for everyday styling.",
  },
  {
    id: "w29",
    name: "Modern Ethnic Kurta",
    price: 3600,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1767785829347-cc13bd969514?w=600&auto=format&fit=crop&q=80",
    description:
      "A modern ethnic kurta combining traditional inspiration with contemporary fashion.",
  },
  {
    id: "w30",
    name: "Premium Bridal Kurta",
    price: 5200,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1762777777819-4d9aa5529368?w=600&auto=format&fit=crop&q=80",
    description:
      "A premium bridal-inspired kurta designed for elegant celebrations and special events.",
  },

  // =========================
  // MEN
  // =========================

  {
    id: "m1",
    name: "Premium White Oversized T-Shirt",
    price: 2200,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description:
      "A premium oversized white T-shirt with a clean modern casual style.",
  },
  {
    id: "m2",
    name: "Essential Black T-Shirt",
    price: 2000,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
    description:
      "A versatile black T-shirt that works perfectly for everyday casual outfits.",
  },
  {
    id: "m3",
    name: "T-Shirt",
    price: 2400,
    category: "Men",
    image:
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N78216s.jpg?im=Resize,width=750",
    description:
      "A comfortable everyday T-shirt with a simple contemporary design.",
  },
  {
    id: "m4",
    name: "Classic Beige T-Shirt",
    price: 2100,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    description:
      "A classic beige T-shirt designed for relaxed everyday styling.",
  },
  {
    id: "m5",
    name: "Relaxed Fit Oxford Shirt",
    price: 3200,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    description:
      "A relaxed Oxford shirt offering a smart yet comfortable look.",
  },
  {
    id: "m6",
    name: "Midnight Black Formal Shirt",
    price: 3500,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    description:
      "A refined black formal shirt designed for professional and formal occasions.",
  },
  {
    id: "m7",
    name: "Navy Blue T-Shirt",
    price: 3400,
    category: "Men",
    image:
      "https://mendeez.com/cdn/shop/files/marine-v-neckt-shirtsmendeez-pk-0011717-658052_a3a1d4de-3d27-4b3f-a26e-934f9097cb34.jpg?v=1756381186&width=720",
    description:
      "A stylish navy blue T-shirt offering a comfortable everyday fit.",
  },
  {
    id: "m8",
    name: "Premium Green Casual Shirt",
    price: 3300,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
    description:
      "A premium green casual shirt suitable for relaxed and smart-casual outfits.",
  },
  {
    id: "m9",
    name: "Minimal White Polo Shirt",
    price: 2700,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500",
    description:
      "A minimal white polo shirt offering a clean and timeless appearance.",
  },
  {
    id: "m10",
    name: "Straight Fit Blue Jeans",
    price: 4200,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description:
      "Classic straight-fit blue jeans designed for everyday comfort.",
  },
  {
    id: "m11",
    name: "Dark Wash Slim Jeans",
    price: 4500,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    description:
      "Dark wash slim jeans providing a modern and polished casual look.",
  },
  {
    id: "m12",
    name: "Relaxed Beige Chinos",
    price: 3800,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    description:
      "Relaxed beige chinos that combine comfort with smart casual styling.",
  },
  {
    id: "m13",
    name: "Modern Black Trousers",
    price: 4000,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    description:
      "Modern black trousers designed for clean formal and semi-formal outfits.",
  },
  {
    id: "m14",
    name: "Premium Grey Hoodie",
    price: 4200,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description:
      "A premium grey hoodie designed for comfortable casual wear.",
  },
  {
    id: "m15",
    name: "Oversized Cream Sweatshirt",
    price: 3800,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
    description:
      "A soft oversized cream sweatshirt for relaxed modern styling.",
  },
  {
    id: "m16",
    name: "Classic Blue Denim Jacket",
    price: 5200,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500",
    description:
      "A timeless blue denim jacket that works with a variety of casual outfits.",
  },
  {
    id: "m17",
    name: "Premium Black Leather Jacket",
    price: 7500,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description:
      "A premium black leather jacket designed for a bold and stylish appearance.",
  },
  {
    id: "m18",
    name: "Tailored Navy Blazer",
    price: 8500,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
    description:
      "A tailored navy blazer designed for formal and sophisticated occasions.",
  },

  // =========================
  // KIDS
  // =========================

  {
    id: "k1",
    name: "Pink Floral Princess Dress",
    price: 3200,
    category: "Kids",
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
    description:
      "A beautiful floral princess dress designed for special occasions.",
  },
  {
    id: "k2",
    name: "Elegant Pink Party Frock",
    price: 3500,
    category: "Kids",
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
    description:
      "An elegant pink party frock designed for celebrations and special occasions.",
  },
  {
    id: "k3",
    name: "White Floral Rose Frock",
    price: 3800,
    category: "Kids",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
    description:
      "A charming white and floral frock with a beautiful rose-inspired design.",
  },
  {
    id: "k4",
    name: "Floral Garden Party Dress",
    price: 3600,
    category: "Kids",
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
    description:
      "A floral party dress designed for birthdays and special celebrations.",
  },
  {
    id: "k5",
    name: "Pastel Blue Princess Dress",
    price: 4200,
    category: "Kids",
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
    description:
      "A beautiful pastel blue princess dress with an elegant festive appearance.",
  },
  {
    id: "k6",
    name: "Pink Floral Summer Frock",
    price: 2900,
    category: "Kids",
    image:
      "https://image.made-in-china.com/202f0j00bnPlIMToOagz/Girls-Dress-Spring-New-Children-s-Floral-Embroidery-Skirt-Middle-School-Children-s-Princess-Skirt.webp",
    description:
      "A colorful floral frock designed for comfortable summer wear.",
  },
  {
    id: "k7",
    name: "Blue Floral Summer Dress",
    price: 2800,
    category: "Kids",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
    description:
      "A lightweight floral dress suitable for casual summer occasions.",
  },
  {
    id: "k8",
    name: "Navy Blue Party Frock",
    price: 3500,
    category: "Kids",
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
    description:
      "A navy blue party frock designed for comfortable and stylish celebrations.",
  },
  {
    id: "k9",
    name: "Pink Bow Princess Dress",
    price: 3300,
    category: "Kids",
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
    description:
      "A pretty pink princess dress featuring a charming bow design.",
  },
  {
    id: "k10",
    name: "Floral Pink Birthday Dress",
    price: 4000,
    category: "Kids",
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
    description:
      "A beautiful floral pink dress perfect for birthday celebrations.",
  },
  {
    id: "k11",
    name: "Green Kurta",
    price: 3700,
    category: "Kids",
    image:
      "https://i.pinimg.com/736x/f8/b9/7f/f8b97f3445e536222b97597bac0c596e.jpg",
    description:
      "A stylish green kurta designed for comfortable traditional wear.",
  },
  {
    id: "k12",
    name: "Rose Garden Dress",
    price: 3400,
    category: "Kids",
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
    description:
      "A lovely rose-inspired dress designed for special occasions.",
  },
  {
    id: "k13",
    name: "Mint Green Tiered Frock",
    price: 3000,
    category: "Kids",
    image:
      "https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-46cde8b0-08c5-4033-93a4-419e97a59563.webp?q=75&w=960",
    description:
      "A refreshing mint green tiered frock with a playful design.",
  },
  {
    id: "k14",
    name: "Elegant Blue Floral Frock",
    price: 3600,
    category: "Kids",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
    description:
      "An elegant floral frock with a beautiful blue-inspired look.",
  },
  {
    id: "k15",
    name: "Pink Lace Party Dress",
    price: 3900,
    category: "Kids",
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
    description:
      "A delicate pink lace dress designed for parties and celebrations.",
  },
  {
    id: "k16",
    name: "Royal Navy Bow Frock",
    price: 4200,
    category: "Kids",
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
    description:
      "A royal navy frock featuring a stylish bow design.",
  },
  {
    id: "k17",
    name: "Pretty Pink Floral Frock",
    price: 3200,
    category: "Kids",
    image:
      "https://image.made-in-china.com/202f0j00bnPlIMToOagz/Girls-Dress-Spring-New-Children-s-Floral-Embroidery-Skirt-Middle-School-Children-s-Princess-Skirt.webp",
    description:
      "A pretty floral frock designed with a soft pink color palette.",
  },
  {
    id: "k18",
    name: "Pastel Garden Party Dress",
    price: 4500,
    category: "Kids",
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
    description:
      "A pastel party dress designed for elegant garden-inspired occasions.",
  },
  {
    id: "k19",
    name: "White & Pink Floral Dress",
    price: 3500,
    category: "Kids",
    image:
      "https://images.tcdn.com.br/img/img_prod/609313/vestido_infantil_floral_branco_e_pink_daminha_florista_festa_nina_baunilha_223_3_20200107111437.jpg",
    description:
      "A beautiful white and pink floral dress for special occasions.",
  },
  {
    id: "k20",
    name: "Lavender Fairy Frock",
    price: 4100,
    category: "Kids",
    image:
      "https://img.drz.lazcdn.com/g/kf/Sbee07e538be14a15949d9f8072fe1cd2I.jpg_720x720q80.jpg",
    description:
      "A dreamy lavender frock with a magical fairy-inspired appearance.",
  },
  {
    id: "k21",
    name: "Elegant Floral Midi Dress",
    price: 3800,
    category: "Kids",
    image:
      "https://assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/27395884/2024/2/27/4e8a6389-4e91-4c92-9e6e-4c6f66909cb51709033140428-BAESD-Floral-Print-Bell-Sleeve-Fit--Flare-Dress-420170903314-1.jpg",
    description:
      "An elegant floral midi dress with a graceful fit and flare design.",
  },
  {
    id: "k22",
    name: "Light Green Bow Frock",
    price: 2900,
    category: "Kids",
    image:
      "https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-46cde8b0-08c5-4033-93a4-419e97a59563.webp?q=75&w=960",
    description:
      "A light green frock featuring a charming bow detail.",
  },
  {
    id: "k23",
    name: "Blue Floral Casual Dress",
    price: 2700,
    category: "Kids",
    image:
      "https://cdn.fcglcdn.com/brainbees/images/products/zoom/mark-and-mia-sleeveless-frock-with-floral-print-pink-and-white-19558600zzsq.jpg",
    description:
      "A comfortable floral casual dress designed for everyday wear.",
  },
  {
    id: "k24",
    name: "Classic Pink Party Frock",
    price: 3600,
    category: "Kids",
    image:
      "https://f.nooncdn.com/p/pzsku/Z06962A0DFB2A1F6E5510Z/45/1745338829/de72d7a7-9d24-4db3-b823-8f3770f8cec4.jpg?width=800",
    description:
      "A classic pink party frock suitable for birthdays and celebrations.",
  },
  {
    id: "k25",
    name: "Midnight Blue Princess Dress",
    price: 4300,
    category: "Kids",
    image:
      "https://tiimg.tistatic.com/fp/1/007/731/kid-half-sleeves-round-neck-breathable-comfortable-party-wear-blue-frock-692.jpg",
    description:
      "A midnight blue princess dress designed for elegant occasions.",
  },
  {
    id: "k26",
    name: "Soft Pink Floral Dress",
    price: 3300,
    category: "Kids",
    image:
      "https://media.6media.me/media/catalog/product/cache/546a512fca766ae380c1a4c3906ca499/n/e/new-8615br-4_1.jpg",
    description:
      "A soft pink floral dress offering a delicate and stylish look.",
  },
  {
    id: "k27",
    name: "Dreamy Black Party Dress",
    price: 4400,
    category: "Kids",
    image:
      "https://tassels.pk/cdn/shop/files/DSC02790copy.jpg?v=1776956680&width=500",
    description:
      "A stylish black party dress designed for special celebrations.",
  },
  {
    id: "k28",
    name: "Premium Floral Princess Dress",
    price: 5200,
    category: "Kids",
    image:
      "https://cdn.salla.sa/vzQgp/qx9KNMfoqiaHOIVdZgoy0dWefVW7GOjncBkWzYsr.png",
    description:
      "A premium floral princess dress designed for elegant special occasions.",
  },

  // =========================
  // ACCESSORIES
  // =========================

  {
    id: "a1",
    name: "Classic Hand Bag",
    price: 2500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    description:
      "A classic handbag that adds an elegant touch to any outfit.",
  },
  {
    id: "a2",
    name: "Stylish Sunglasses",
    price: 1800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    description:
      "Stylish sunglasses designed to complete a modern fashion look.",
  },
  {
    id: "a3",
    name: "Luxury Watch",
    price: 4500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    description:
      "A luxury-inspired watch designed for an elegant and sophisticated appearance.",
  },
  {
    id: "a4",
    name: "Fashion Bracelet",
    price: 1200,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    description:
      "A stylish fashion bracelet designed to complement everyday outfits.",
  },
  {
    id: "a5",
    name: "Leather Wallet",
    price: 1600,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    description:
      "A classic leather wallet combining practical storage with a premium appearance.",
  },
  {
    id: "a6",
    name: "Fashion Cap",
    price: 900,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
    description:
      "A casual fashion cap designed for everyday streetwear looks.",
  },
  {
    id: "a7",
    name: "Elegant Shoulder Bag",
    price: 3200,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
    description:
      "An elegant shoulder bag designed for stylish everyday use.",
  },
  {
    id: "a8",
    name: "Round Sunglasses",
    price: 1500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    description:
      "Classic round sunglasses offering a stylish and timeless appearance.",
  },
  {
    id: "a9",
    name: "Classic Leather Watch",
    price: 5200,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description:
      "A classic leather watch designed for a sophisticated everyday look.",
  },
  {
    id: "a10",
    name: "Pearl Necklace",
    price: 2800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    description:
      "An elegant pearl necklace designed to add a refined touch to any outfit.",
  },
  {
    id: "a11",
    name: "Leather Belt",
    price: 1400,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500",
    description:
      "A classic leather belt designed for both casual and formal outfits.",
  },
  {
    id: "a12",
    name: "Mini Crossbody Bag",
    price: 2200,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    description:
      "A compact crossbody bag designed for convenient everyday use.",
  },
  {
    id: "a13",
    name: "Silver Earrings",
    price: 1100,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    description:
      "Elegant silver earrings designed to complement both casual and formal looks.",
  },
  {
    id: "a14",
    name: "Classic Beanie",
    price: 850,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
    description:
      "A comfortable classic beanie suitable for casual cold-weather styling.",
  },
  {
    id: "a15",
    name: "Travel Backpack",
    price: 3500,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description:
      "A practical travel backpack designed for everyday and travel needs.",
  },
  {
    id: "a16",
    name: "Fashion Ring",
    price: 1300,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
    description:
      "A stylish fashion ring designed to add a subtle elegant detail.",
  },
  {
    id: "a17",
    name: "Luxury Handbag",
    price: 4800,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1566150902887-9679b36a4f02?w=500",
    description:
      "A luxury-inspired handbag designed for elegant everyday styling.",
  },
  {
    id: "a18",
    name: "Classic Tie",
    price: 1000,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500",
    description:
      "A classic tie designed to complete formal and professional outfits.",
  },
  {
    id: "a19",
    name: "Fashion Hair Clips",
    price: 700,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    description:
      "Fashionable hair clips designed to add a stylish finishing touch.",
  },
  {
    id: "a20",
    name: "Stylish Tote Bag",
    price: 2900,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
    description:
      "A stylish tote bag offering practical space with a modern fashion look.",
  },
];

export default products;
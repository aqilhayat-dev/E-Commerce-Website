
import React, { useState } from 'react'
import { Heart } from 'lucide-react'

const products = [
  {
    name: 'Kurta Set',
    price: '$148',
    image:
      'https://images.unsplash.com/photo-1735553816869-9ebc8b1a17ef?w=600&auto=format&fit=crop&q=80',
    badge: 'BEST SELLER',
  },

  {
    name: 'Classic Handbag',
    price: '$88',
    image:
      'https://int.stylo.pk/cdn/shop/files/P3665653_3_600x.webp?v=1785825020',
    badge: '',
  },

  {
    name: 'Essential T-Shirt',
    price: '$42',
    oldPrice: '$60',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80',
    badge: 'SALE',
  },

  {
    name: 'Puma Sneakers',
    price: '$64',
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395829/01/sv05/fnd/IND/fmt/png/Carina-Slim-Perf-Women',
    badge: '',
  },

  {
    name: 'Denim Jacket',
    price: '$95',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
    badge: 'TRENDING',
  },

  {
    name: 'Classic Sunglasses',
    price: '$55',
    oldPrice: '$70',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
    badge: 'SALE',
  },

  {
    name: 'Leather Wallet',
    price: '$48',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
    badge: '',
  },

  {
    name: 'Premium Watch',
    price: '$125',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
    badge: 'POPULAR',
  },
]

const Bestseller = () => {

  const [showAll, setShowAll] = useState(false)

  const displayedProducts = showAll
    ? products
    : products.slice(0, 4)

  return (
    <section className="px-5 md:px-10 lg:px-12 py-10">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-3xl md:text-4xl font-semibold text-[#252321]">
          Bestsellers
        </h1>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-500 text-lg hover:text-black transition"
        >
          {showAll ? 'Show less' : 'View all'}
        </button>

      </div>


      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {displayedProducts.map((product, index) => (

          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
          >

            {/* IMAGE AREA */}
            <div className="relative h-[280px] bg-[#eeeae4] overflow-hidden">

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                  {product.badge}
                </span>
              )}


              {/* Heart */}
              <button
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white hover:scale-105 transition"
              >
                <Heart
                  size={22}
                  strokeWidth={1.8}
                />
              </button>


              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>


            {/* PRODUCT INFORMATION */}
            <div className="p-5">

              <p className="text-gray-500 text-sm font-medium mb-1">
                NEXORA
              </p>

              <h2 className="text-xl text-[#252321] mb-2">
                {product.name}
              </h2>


              {/* Price */}
              <div className="flex items-center gap-2">

                <span className="text-xl font-semibold">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Bestseller


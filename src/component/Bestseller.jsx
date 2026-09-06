import React from 'react'
import { Heart } from 'lucide-react'
const products = [
  {
    name: 'Kurta set',
    price: '$148',
    image: 'https://images.unsplash.com/photo-1735553816869-9ebc8b1a17ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
    badge: 'BEST SELLER',
  },

  {
    name: 'Bag',
    price: '$88',
    image: 'https://images.unsplash.com/photo-1695150721187-7e23cc8ca591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    badge: '',
  },

  {
    name: 'T-SHIRT ',
    price: '$42',
    oldPrice: '$60',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VC1TSElSVCUyMFNJTkdMRXxlbnwwfHwwfHx8MA%3D%3D',
    badge: 'SALE',
  },

  {
    name: 'Puma sneakers',
    price: '$64',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNIT0VTfGVufDB8fDB8fHww',
    badge: '',
  },
]

const Bestseller = () => {
  return (
    <section className="px-5 md:px-10 lg:px-12 py-10">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#252321]">
          Bestsellers
        </h1>

        <button className="text-gray-500 text-lg hover:text-black transition">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product, index) => (

          <div
            key={index}
            className="rounded-2xl overflow-hidden  bg-red-300 border border-gray-f200 bg-white"
          >

            {/* IMAGE AREA */}

            <div className="relative h-[280px] bg-[#eeeae4]">

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium">
                  {product.badge}
                </span>
              )}

              {/* Heart */}
              <button className="absolute top-4 right-4">
                <Heart size={26} strokeWidth={1.8} />
              </button>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

            </div>


            {/* Product Information */}
            <div className="p-5">

              <p className="text-gray-500 text-sm font-medium mb-1">
                NEXORA
              </p>

              <h2 className="text-xl text-[#252321] mb-2">
                {product.name}
              </h2>

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

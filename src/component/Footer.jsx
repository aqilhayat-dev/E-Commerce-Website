
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#252321] text-white mt-20">

      {/* ================= MAIN FOOTER ================= */}

      <div className="px-6 md:px-12 lg:px-20 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= BRAND ================= */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              StyleHub
            </h2>

            <p className="text-gray-400 leading-7 max-w-sm">
              Discover the latest fashion, clothing, shoes,
              and accessories designed to elevate your style.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-sm">

              <a
                href="#"
                className="hover:text-orange-400 transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:text-orange-400 transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-orange-400 transition"
              >
                YouTube
              </a>

            </div>
          </div>


          {/* ================= SHOP ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Men's Clothing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Women's Clothing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Shoes
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Accessories
                </a>
              </li>

            </ul>
          </div>


          {/* ================= CUSTOMER SERVICE ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Returns & Exchanges
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Size Guide
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  FAQs
                </a>
              </li>

            </ul>
          </div>


          {/* ================= NEWSLETTER ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Stay in Style
            </h3>

            <p className="text-gray-400 mb-5 leading-6">
              Subscribe to our newsletter and be the first
              to know about new collections, exclusive offers,
              and the latest fashion trends.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full
                  px-4
                  py-3
                  bg-white
                  text-black
                  outline-none
                  rounded-l-lg
                "
              />

              <button
                className="
                  px-5
                  bg-orange-500
                  hover:bg-orange-600
                  transition
                  rounded-r-lg
                "
              >
                Join
              </button>

            </div>

          </div>

         </div>

       </div>


       {/* ================= BOTTOM FOOTER ================= */}
       <div className="border-t border-gray-700">

        <div
          className="
            px-6
            md:px-12
            lg:px-20
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-3
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 Nexora. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Fashion • Style • Confidence
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer


import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  UserRound,
  Heart,
} from "lucide-react";

import logo from "../assets/logo3.png";

const navLinks = [
  { name: "Home", href: "/" },
  
  { name: "Women", href: "/Women" },
  { name: "Men", href: "/Men" },
  { name: "Kid", href: "/Kid" },
  { name: "Accessories", href: "/Accessory" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#faf9f7]/95 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Main navbar */}
          <div className="flex h-[72px] items-center justify-between">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Nexora"
                className="h-10 w-auto object-contain md:h-11"
              />
            </a>

            {/* Desktop navigation */}
            
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-7">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                        relative
                        text-[14px]
                        font-medium
                        text-[#373532]
                        transition-colors
                        duration-300
                        hover:text-black
                        after:absolute
                        after:-bottom-2
                        after:left-0
                        after:h-[1px]
                        after:w-0
                        after:bg-black
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Search */}
              <div className="relative hidden xl:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="
                    h-10
                    w-60
                    rounded-full
                    border
                    border-black/[0.08]
                    bg-white
                    px-4
                    pr-10
                    text-sm
                    text-[#292725]
                    outline-none
                    placeholder:text-[#aaa59d]
                    focus:border-black/20
                  "
                />

                <Search
                  size={18}
                  strokeWidth={1.7}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77736d]"
                />
              </div>

              {/* Mobile search */}
              <button
                type="button"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-black/[0.04]
                  xl:hidden
                "
                aria-label="Search"
              >
                <Search size={21} strokeWidth={1.7} />
              </button>

              {/* Wishlist */}
              <a
                href="/wishlist"
                className="
                  hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-black/[0.04]
                  sm:flex
                "
                aria-label="Wishlist"
              >
                <Heart size={21} strokeWidth={1.6} />
              </a>

              {/* Account */}
              <a
                href="/account"
                className="
                  hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-black/[0.04]
                  sm:flex
                "
                aria-label="Account"
              >
                <UserRound size={21} strokeWidth={1.6} />
              </a>

              {/* Cart */}
              <a
                href="/cart"
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-black/[0.04]
                "
                aria-label="Shopping bag"
              >
                <ShoppingBag size={22} strokeWidth={1.6} />

                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#242321]
                    px-1
                    text-[9px]
                    font-semibold
                    text-white
                  "
                >
                  0
                </span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-black/[0.04]
                  lg:hidden
                "
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={23} strokeWidth={1.7} />
                ) : (
                  <Menu size={23} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              lg:hidden
              ${
                isMenuOpen
                  ? "max-h-[500px] border-t border-black/[0.06] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="py-5">

              <div className="mb-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="
                      h-11
                      w-full
                      rounded-full
                      border
                      border-black/[0.08]
                      bg-white
                      px-4
                      pr-11
                      text-sm
                      outline-none
                    "
                  />

                  <Search
                    size={18}
                    strokeWidth={1.7}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77736d]"
                  />
                </div>
              </div>

              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        block
                        rounded-xl
                        px-3
                        py-3
                        text-[15px]
                        font-medium
                        text-[#373532]
                        transition
                        hover:bg-white
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile account links */}
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-black/[0.06] pt-4">
                <a
                  href="/account"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium"
                >
                  <UserRound size={17} strokeWidth={1.6} />
                  Account
                </a>

                <a
                  href="/wishlist"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium"
                >
                  <Heart size={17} strokeWidth={1.6} />
                  Wishlist
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
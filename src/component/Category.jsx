import React from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
  },
  {
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80",
  },
];

const Category = () => {
  return (
    <section className="bg-[#faf9f7]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#99938a]">
              Explore
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#242321] md:text-4xl">
              Shop by category
            </h2>
          </div>

          <a
            href="/categories"
            className="
              group
              hidden
              items-center
              gap-2
              text-sm
              font-medium
              text-[#55514b]
              sm:flex
            "
          >
            View all

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-5">

          {categories.map((category) => (
            <a
              href={`/categories/${category.name.toLowerCase()}`}
              key={category.name}
              className="group"
            >
              <div className="relative aspect-[0.82] overflow-hidden rounded-[24px] bg-[#e8e5df]">

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Category name */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">
                    {category.name}
                  </h3>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-[#242321]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile view all */}
        <a
          href="/categories"
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-black/10
            bg-white
            py-3
            text-sm
            font-medium
            text-[#35322f]
            sm:hidden
          "
        >
          View all categories
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Category;
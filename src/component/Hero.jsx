import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#e8e3dc] sm:min-h-[650px] lg:min-h-[700px]">

      {/* Animated Background Images */}

      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&auto=format&fit=crop&q=85"
        alt="Fashion collection"
        className="hero-slide hero-slide-1 absolute inset-0 h-full w-full object-cover object-center"
      />

      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&auto=format&fit=crop&q=85"
        alt="Women's fashion"
        className="hero-slide hero-slide-2 absolute inset-0 h-full w-full object-cover object-center"
      />

      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&auto=format&fit=crop&q=85"
        alt="Men's fashion"
        className="hero-slide hero-slide-3 absolute inset-0 h-full w-full object-cover object-center"
      />

      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1800&auto=format&fit=crop&q=85"
        alt="Fashion store"
        className="hero-slide hero-slide-4 absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
      {/* Hero Content */}
      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-5 text-center sm:min-h-[650px] sm:px-8 lg:min-h-[700px]">

        <div className="max-w-3xl text-white">

          {/* Small Label */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
              <Sparkles size={15} strokeWidth={1.8} />
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              New Season Collection
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="
        text-5xl
        font-extrabold
        leading-[1.05]
        tracking-tight
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
      "
          >
            Find Your
            <br />

            <span className="font-extrabold italic">
              Everyday Style.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
        mx-auto
        mt-6
        max-w-2xl
        text-sm
        font-medium
        leading-6
        text-white/90
        sm:text-base
        md:text-lg
        md:leading-7
      "
          >
            Discover clothing, shoes, bags and accessories carefully
            selected to make every look feel effortless.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">

            {/* Shop Now */}
            <a
              href="/shop"
              className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-7
          py-4
          text-sm
          font-bold
          text-[#252321]
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#f5f2ee]
          hover:shadow-2xl
        "
            >
              Shop Now

              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Explore */}
            <a
              href="/categories"
              className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/50
          bg-white/10
          px-7
          py-4
          text-sm
          font-bold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/20
        "
            >
              Explore Categories
            </a>

          </div>

          {/* Categories */}
          <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-wider text-white/80">

            <span className="transition hover:text-white">
              Women
            </span>

            <span className="text-white/50">•</span>

            <span className="transition hover:text-white">
              Men
            </span>

            <span className="text-white/50">•</span>

            <span className="transition hover:text-white">
              Shoes
            </span>

            <span className="text-white/50">•</span>

            <span className="transition hover:text-white">
              Accessories
            </span>

          </div>

        </div>
      </div>


      {/* Bottom Right Decoration */}
      <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 md:flex">
        <span>Discover more</span>
        <span className="h-px w-8 bg-white/50" />
      </div>

    </section>
  );
};

export default Hero;
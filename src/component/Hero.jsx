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
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-end px-5 pb-14 sm:min-h-[650px] sm:px-8 md:items-center md:pb-0 lg:min-h-[700px] lg:px-8">

        <div className="max-w-xl text-white">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Sparkles size={14} strokeWidth={1.7} />
            </span>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              New season collection
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Find your
            <br />
            <span className="font-light italic">
              everyday style.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            Discover clothing, shoes, bags and accessories carefully selected
            to make every look feel effortless.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#252321] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5f2ee] hover:shadow-xl active:translate-y-0"
            >
              Shop now

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/categories"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Explore categories
            </a>

          </div>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70">
            <span>Women</span>

            <span className="h-1 w-1 rounded-full bg-white/50" />

            <span>Men</span>

            <span className="h-1 w-1 rounded-full bg-white/50" />

            <span>Shoes</span>

            <span className="h-1 w-1 rounded-full bg-white/50" />

            <span>Accessories</span>
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
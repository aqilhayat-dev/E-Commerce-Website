import React from "react";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free shipping",
    subtitle: "$75+ orders",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    subtitle: "30-day returns",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    subtitle: "100% protected",
  },
];

const Hero2 = () => {
  return (
    <section className="border-b border-black/[0.04] bg-[#faf9f7]">

      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 md:py-10 lg:px-8">

        {/* Mobile: horizontal scroll */}

        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide md:grid md:grid-cols-3 md:gap-6">
          {benefits.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="
                group
                flex
                min-w-[220px]
                flex-shrink-0
                items-center
                gap-3
                rounded-2xl
                border
                border-black/[0.05]
                bg-white/70
                px-4
                py-4
                shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                transition-all
                duration-300
                active:scale-[0.98]
                md:min-w-0
                md:justify-center
                md:border-0
                md:bg-transparent
                md:py-3
                md:shadow-none
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f1efeb]
                  text-[#6f6b64]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Icon size={21} strokeWidth={1.6} />
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-sm font-medium tracking-tight text-[#292827]">
                  {title}
                </p>

                <p className="mt-0.5 text-xs text-[#8a867f]">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
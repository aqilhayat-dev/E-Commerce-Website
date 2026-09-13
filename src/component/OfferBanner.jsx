

const OfferBanner = () => {
  return (
    
    <section className="w-full bg-[#F8F7F4] py-16 sm:py-20 lg:py-24">

      <div className="w-full bg-[#EDE8E1] overflow-hidden">

        <div className="w-full min-h-[500px] flex flex-col md:flex-row items-center">

          {/* Left Content */}
          <div className="w-full md:w-1/2 px-8 sm:px-12 lg:px-20 xl:px-28 py-14 md:py-20">

            <p className="text-[#8B6F47] text-sm font-semibold tracking-[4px] mb-5">
              LIMITED TIME OFFER
            </p>

            <h2 className="text-[#171717] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95]">
              UP TO
              <br />
              <span className="text-[#8B6F47]">
                30% OFF
              </span>
            </h2>

            <p className="text-[#555555] text-base sm:text-lg leading-7 mt-7 max-w-lg">
              Refresh your wardrobe with our latest collection.
              Discover timeless styles and elevate your everyday look.
            </p>

            {/* Button */}
            <button
              className="
                mt-9
                bg-[#171717]
                text-white
                px-8
                py-4
                rounded-full
                text-sm
                font-semibold
                tracking-wide
                hover:bg-[#8B6F47]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              SHOP THE SALE
            </button>

            <p className="text-[#777777] text-xs mt-5">
              Limited time offer. Terms & conditions apply.
            </p>

          </div>


          {/* Right Image */}
          <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[500px] relative">

            <img
              src="https://www.kassandrajade.com/cdn/shop/files/Generated_Image_April_11_2026_-_11_56PM.jpg?v=1776069020&width=1500&utm_source=chatgpt.com"
              alt="Fashion collection"
              className="w-full h-full object-cover "
            />
 
            {/* Soft Image Overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OfferBanner;

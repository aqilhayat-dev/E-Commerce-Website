import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200"
          alt="Fashion Store"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-sm md:text-base uppercase tracking-widest mb-3">
              Welcome to our store
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fashion Made Simple
            </h1>

            <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-lg">
              Discover stylish clothing and accessories designed for your
              everyday look.
            </p>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Style, Your Choice
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              We are an online fashion store offering a carefully selected
              collection of clothing and accessories for men and women.
            </p>

            <p className="text-gray-600 leading-7">
              From everyday essentials to elegant outfits, our goal is to
              provide modern fashion with quality, comfort, and affordable
              prices.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
            alt="Fashion collection"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />

        </div>
      </section>


      {/* Fashion Categories */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Explore
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Fashion For Everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Women */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                alt="Women's Fashion"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="text-white p-8">
                  <h3 className="text-3xl font-bold">
                    Women's Collection
                  </h3>

                  <p className="mt-2 text-gray-200">
                    Elegant and modern styles for every occasion.
                  </p>
                </div>
              </div>
            </div>


            {/* Men */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
                alt="Men's Fashion"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="text-white p-8">
                  <h3 className="text-3xl font-bold">
                    Men's Collection
                  </h3>

                  <p className="mt-2 text-gray-200">
                    Classic and contemporary styles for every day.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-black text-white rounded-2xl p-8 md:p-14 text-center">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Our Mission
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Making Fashion Accessible
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 leading-7">
            We believe everyone should have access to stylish, comfortable,
            and affordable fashion. We continuously work to bring new
            collections and better shopping experiences to our customers.
          </p>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Why Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Why Choose Our Store?
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-7 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">💎</div>

              <h3 className="text-xl font-bold mb-3">
                Quality Products
              </h3>

              <p className="text-gray-600 leading-6">
                We carefully select products that combine quality,
                comfort, and style.
              </p>
            </div>


            <div className="border rounded-xl p-7 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>

              <h3 className="text-xl font-bold mb-3">
                Affordable Prices
              </h3>

              <p className="text-gray-600 leading-6">
                Enjoy modern fashion without having to spend too much.
              </p>
            </div>


            <div className="border rounded-xl p-7 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">❤️</div>

              <h3 className="text-xl font-bold mb-3">
                Customer First
              </h3>

              <p className="text-gray-600 leading-6">
                Your satisfaction is one of our most important priorities.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              100+
            </h3>
            <p className="text-gray-500 mt-2">
              Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              50+
            </h3>
            <p className="text-gray-500 mt-2">
              Styles
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              24/7
            </h3>
            <p className="text-gray-500 mt-2">
              Support
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              100%
            </h3>
            <p className="text-gray-500 mt-2">
              Satisfaction
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
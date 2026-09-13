import Product from "../component/Product";
import products from "../data/products.js";

const Kid = () => {
  const kids = products.filter(
    (product) => product.category === "Kids"
  );

  return (
    <div className="bg-[#F8F7F4] px-4 py-8 md:px-8 lg:px-12">

      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">

        <p className="text-[#8B6F47] text-xs md:text-sm font-semibold tracking-[3px] uppercase mb-3">
          Little Styles, Big Smiles
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-[#171717]">
          Kid's Collection
        </h1>

        <div className="w-12 h-[2px] bg-[#8B6F47] mx-auto my-4"></div>

        <p className="text-sm md:text-base text-[#666666] leading-6 max-w-2xl mx-auto">
          Discover comfortable and stylish outfits made for little
          ones, combining everyday comfort with fun and timeless style.
        </p>

      </div>

      {/* Products */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {kids.map((item) => (
          <Product
            key={item.id}
            product={item}
          />
        ))}
      </div>

    </div>
  );
};

export default Kid;
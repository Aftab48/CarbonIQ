import ProductCategories from "@/components/ProductsCategories";

const Products = () => {
  return (
    <section className="bg-slate-50 w-full">
      <div>
        {/* Heading */}
        <div className="flex justify-between pt-10 pb-6">
          <div className="items-start justify-start flex flex-col">
            <h1 className="text-lg sm:text-xl lg:text-4xl px-6 uppercase font-bold">
              OPTIMIZE FOOTPRINT WITH ECO-FRIENDLY CHOICES
            </h1>
            <div className="h-2 w-[74%] bg-[#126EBA] mt-4" />
            <div className="h-2 w-[69%] bg-[#3DC19E] mt-4" />
          </div>
        </div>

        <div className="flex justify-center gap-x-4 items-center w-full px-4">
          <div className="p-4">
            <ProductCategories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

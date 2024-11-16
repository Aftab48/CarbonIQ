import { products, recommendationList } from "@/constants";
import { useState } from "react";
import Steps from "./Steps";
import EmissionStatsPie from "./charts/EmissionStatsPie";
import EmissionStatsArea from "./charts/EmissionStatsArea";

type Category = {
  name: string;
  subcategories: string[];
  icons: string;
  description: string;
};

type Product = {
  name: string;
  brand: string;
  model: string;
  category: string;
  footprint: number;
};

const ProductCategories = () => {
  const categories: Category[] = [
    {
      name: "Consumer Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Cameras"],
      icons: "/images/categories/electronic.png",
      description: "Laptops, Smartphones, TV and much more.....",
    },
    {
      name: "Furniture",
      subcategories: ["Living Room", "Bedroom", "Office"],
      icons: "/images/categories/furniture.png",
      description: "Tables, Wardrobes, Sofas and much more......",
    },
    {
      name: "Groceries",
      subcategories: ["Fruits", "Vegetables", "Dairy"],
      icons: "/images/categories/groceries.png",
      description: "Food Items, Health Drinks and much more.....",
    },
    {
      name: "Fashion and Apparels",
      subcategories: ["Men's Wear", "Women's Wear", "Kids' Wear"],
      icons: "/images/categories/fashion.png",
      description: "Menswear, Bags, Shoes and much more......",
    },
    {
      name: "Household Essentials",
      subcategories: ["Cleaning Supplies", "Kitchenware", "Bedding"],
      icons: "/images/categories/household.png",
      description: "Toiletries, Draperies, Cleaners and much more......",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleAddProduct = (product: Product) => {
    setAddedProducts([...addedProducts, product]);
  };

  const handleAddRecommendedProduct = (product: Product) => {
    setRecommendedProducts([...recommendedProducts, product]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = [...addedProducts];
    updatedProducts.splice(index, 1);
    setAddedProducts(updatedProducts);
  };

  const handleRemoveRecommendedProduct = (index: number) => {
    const updatedProducts = [...recommendedProducts];
    updatedProducts.splice(index, 1);
    setRecommendedProducts(updatedProducts);
  };

  const getRecommendations = (product: Product): Product[] => {
    return recommendationList.filter(
      (recProduct) =>
        recProduct.category === product.category &&
        recProduct.footprint < product.footprint
    );
  };

  const calculateTotalFootprint = (productList: Product[]): number => {
    return productList.reduce((total, product) => total + product.footprint, 0);
  };

  const totalAddedFootprint = calculateTotalFootprint(addedProducts);
  const totalRecommendedFootprint =
    calculateTotalFootprint(recommendedProducts);
  const footprintSaved = totalAddedFootprint - totalRecommendedFootprint;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full gap-x-20 mx-8">
        <div className="bg-[#D6ECEF] rounded-xl flex flex-col p-4 mb-2 w-full lg:w-[50%] box-border">
          <div className="p-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              CATEGORIES
            </h2>
          </div>

          {selectedCategory ? (
            <div>
              <div
                className="text-2xl text-gray-800 cursor-pointer mb-3"
                onClick={() => setSelectedCategory(null)}
              >
                🔙
              </div>
              <h3 className="text-xl font-bold mb-3">
                {selectedCategory.name}
              </h3>

              {/* Display subcategories */}
              {selectedCategory.subcategories && (
                <div className="flex flex-col gap-y-8">
                  {selectedCategory.subcategories.map((subcategory, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border border-gray-300 h-32 drop-shadow-sm rounded-2xl mx-16 p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                      onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      <span className="text-lg text-gray-800">
                        {subcategory}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Show products for selected subcategory */}
              {selectedSubcategory && (
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {selectedSubcategory}
                  </h3>
                  {products
                    .filter(
                      (product) =>
                        product.category === selectedCategory.name &&
                        selectedCategory.subcategories.includes(
                          selectedSubcategory
                        )
                    )

                    .map((product, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border border-gray-300 rounded-md p-3 mb-2 bg-gray-100 hover:bg-green-50 transition-colors"
                      >
                        <div className="flex-1">
                          <span className="block text-lg font-semibold">
                            {product.name}
                          </span>
                          <span className="block text-sm">{product.brand}</span>
                          <span className="block text-sm">{product.model}</span>
                        </div>
                        <button
                          className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700"
                          onClick={() => handleAddProduct(product)}
                        >
                          +
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-y-6 w-full">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border border-gray-300 h-32 drop-shadow-sm rounded-2xl mx-16 p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="flex gap-x-3 items-center">
                    <span>
                      <img
                        src={category.icons}
                        alt={`${category.name} Icon`}
                        className="h-16"
                      />
                    </span>
                    <span className="text-lg text-gray-800">
                      {category.name}
                      <p className="text-sm line-clamp-1 font-light">
                        {category.description}
                      </p>
                    </span>
                  </div>
                  <span>
                    <img src="/svg/next.svg" alt="Next" className="h-6" />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-y-5 items-center w-full lg:w-[35%]">
          <Steps />
        </div>
      </div>

      {/* Products Flexbox */}
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-3 bg-[#AEFBD2] p-5 w-[48.5%] m-2 rounded-lg min-h-[10cm] box-border">
          <h3 className="text-xl font-bold mb-6">Added Products</h3>
          {addedProducts.length > 0 ? (
            addedProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-gray-300 rounded-md p-3 bg-gray-100 relative"
              >
                <span className="text-lg">
                  {product.name}, {product.brand}, {product.model}
                </span>
                <button
                  className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                  onClick={() => handleRemoveProduct(index)}
                >
                  ✕
                </button>
                <div className="absolute mt-1 left-0 top-full w-[90%] p-2 bg-green-50 border border-gray-300 rounded-md hidden z-10">
                  {getRecommendations(product).map((rec, recIndex) => (
                    <div
                      key={recIndex}
                      className="flex items-center justify-between mb-2 last:mb-0"
                    >
                      <span>
                        {rec.brand} {rec.model}
                      </span>
                      <button
                        className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700"
                        onClick={() => handleAddRecommendedProduct(rec)}
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No products added yet.</p>
          )}
        </div>

        {/* Recommended Products Flexbox */}
        <div className="bg-[#AEFBD2]  p-4 w-[48.5%] m-2 rounded-lg min-h-[10cm] box-border">
          <h3 className="text-xl font-bold mb-6">Recommended Products</h3>
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-gray-300 rounded-md p-3 bg-gray-100 mb-3"
              >
                <span>
                  {product.brand} {product.model}
                </span>
                <button
                  className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                  onClick={() => handleRemoveRecommendedProduct(index)}
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <p>No recommended products added yet.</p>
          )}
        </div>
      </div>

      <div className="w-full h-auto">
        {/* Analysis Flexbox */}
        <div className="bg-[#082F4F] text-white p-4 w-full rounded-lg box-border ">
          <div className="flex gap-x-4">
            <div>
              <h3 className="text-lg font-bold mb-3">Footprint Analysis</h3>
              <p className="mb-1">
                Total Added Footprint: {totalAddedFootprint} kg CO2e
              </p>
              <p className="mb-1">
                Total Recommended Footprint: {totalRecommendedFootprint} kg CO2e
              </p>
              <p className="mb-1">Footprint Saved: {footprintSaved} kg CO2e</p>
              <p className="text-green-500 font-bold">Keep saving more!</p>
            </div>
            <div className="flex gap-x-10">
              <div className="w-[350px] h-[430px]">
                <EmissionStatsPie />
              </div>
              <div className="w-[350px] h-[430px]">
                <EmissionStatsArea />
              </div>
            </div>
          </div>
          <p className="mb-1">
            Total Added Footprint: {totalAddedFootprint} kg CO2e
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

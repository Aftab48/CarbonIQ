import { products, recommendationList } from "@/constants";
import { useState } from "react";
import Steps from "./Steps";

type Category = {
  name: string;
  subcategories: string[];
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
      name: "Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Cameras"],
    },
    {
      name: "Clothing and Apparels",
      subcategories: ["Men's Wear", "Women's Wear", "Kids' Wear"],
    },
    {
      name: "Household Essentials",
      subcategories: ["Cleaning Supplies", "Kitchenware", "Bedding"],
    },
    { name: "Furniture", subcategories: ["Living Room", "Bedroom", "Office"] },
    { name: "Groceries", subcategories: ["Fruits", "Vegetables", "Dairy"] },
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
    setSelectedSubcategory(null); // Reset subcategory when a new category is clicked
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
      <div className="flex flex-row w-full">
        <div className="bg-gray-400 rounded-xl flex flex-col p-4 mb-2 w-full lg:w-[65%] box-border">
          <div className="p-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
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
                <div className="flex flex-col gap-3 w-full">
                  {selectedCategory.subcategories.map((subcategory, index) => (
                    <div
                      key={index}
                      className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
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
                        product.name.includes(selectedSubcategory) // Filter by category & subcategory
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
            <div className="flex flex-col gap-3 w-full">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="text-lg text-gray-800">{category.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-y-5 items-center w-full lg:w-[25%]">
          <Steps />
        </div>
      </div>

      {/* Products Flexbox */}
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-3 bg-green-500 p-5 w-[48.5%] m-2 rounded-lg min-h-[10cm] box-border">
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
        <div className="bg-green-500 p-4 w-[48.5%] m-2 rounded-lg min-h-[10cm] box-border">
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
        <div className="bg-blue-900 text-white p-4 w-full rounded-lg box-border">
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
      </div>
    </div>
  );
};

export default ProductCategories;
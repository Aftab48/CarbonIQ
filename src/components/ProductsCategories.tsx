import { useState } from "react";
import Steps from "./Steps";
import EmissionStatsPie from "./charts/EmissionStatsPie";
import EmissionStatsArea from "./charts/EmissionStatsArea";

type Product = {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  footprint: number;
};

// Sample data - replace with your actual data imports
const products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    brand: "Brand A",
    model: "Model X",
    category: "Consumer Electronics",
    footprint: 50,
  },
  {
    id: "2",
    name: "Laptop",
    brand: "Brand B",
    model: "Model Y",
    category: "Consumer Electronics",
    footprint: 80,
  },
  // ... other products
];

const recommendationList: Product[] = [
  {
    id: "3",
    name: "Laptop",
    brand: "Brand X",
    model: "Model A1",
    category: "Consumer Electronics",
    footprint: 30,
  },
  {
    id: "4",
    name: "Laptop",
    brand: "Brand Y",
    model: "Model B2",
    category: "Consumer Electronics",
    footprint: 55,
  },
  // ... other recommendations
];

type Category = {
  name: string;
  subcategories: string[];
  icons: string;
  description: string;
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
  const [showProducts, setShowProducts] = useState(false);
  const [addedProductsList, setAddedProductsList] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const filterProductsByCategoryAndSubcategory = (
    productList: Product[],
    category: string,
    _subcategory: string
  ): Product[] => {
    return productList.filter((product) => product.category === category);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setShowProducts(false);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setShowProducts(true);
  };

  const handleBackClick = () => {
    if (showProducts) {
      setShowProducts(false);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  };

  const handleAddProduct = (product: Product) => {
    if (!isProductAdded(product.id)) {
      setAddedProductsList((prev) => [...prev, product]);
    }
  };
  const handleRemoveRecommendedProduct = (index: number) => {
    const updatedProducts = [...recommendedProducts];

    updatedProducts.splice(index, 1);
    setRecommendedProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId: string) => {
    setAddedProductsList((prev) => prev.filter((p) => p.id !== productId));
  };

  const getRecommendations = (product: Product): Product[] => {
    return recommendationList.filter(
      (recProduct) =>
        recProduct.category === product.category &&
        recProduct.footprint < product.footprint &&
        !isProductAdded(recProduct.id)
    );
  };

  // const handleAddProduct = (product: Product) => {
  //   if (!isProductAdded(product.id)) {
  //     setAddedProductsList((prev) => [...prev, product]);
  //   }
  //   if (!isProductRecommended(product.id)) {
  //     setRecommendedProducts((prev) => [...prev, product]);
  //   }
  // };
  
  const isProductRecommended = (productId: string): boolean => {
    return recommendedProducts.some((p) => p.id === productId);
  };
  
  const isProductAdded = (productId: string): boolean => {
    return addedProductsList.some((p) => p.id === productId);
  };

  const calculateTotalFootprint = (productList: Product[]): number => {
    return productList.reduce((total, product) => total + product.footprint, 0);
  };

  const filteredProducts =
    selectedCategory && selectedSubcategory
      ? filterProductsByCategoryAndSubcategory(
          products,
          selectedCategory.name,
          selectedSubcategory
        )
      : [];

  const totalAddedFootprint = calculateTotalFootprint(addedProductsList);
  const totalRecommendedFootprint = calculateTotalFootprint(
    addedProductsList.flatMap((product) => getRecommendations(product))
  );
  const footprintSaved = totalAddedFootprint - totalRecommendedFootprint;

  return (
    <div>
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
                  onClick={handleBackClick}
                >
                  🔙
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {selectedCategory.name}
                </h3>

                {!showProducts ? (
                  <div className="flex flex-col gap-y-20">
                    {selectedCategory.subcategories.map(
                      (subcategory, index) => (
                        <div
                          key={index}
                          className="flex items-center border border-gray-300 h-20 rounded-md p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform transform hover:translate-y-[-3px]"
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          <span className="text-lg text-gray-800">
                            {subcategory}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {selectedSubcategory}
                    </h3>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => {
                        const isAdded = isProductAdded(product.id);
                        return (
                          <div
                            key={product.id}
                            className="flex justify-between items-center border border-gray-300 rounded-md p-3 mb-2 bg-gray-100 hover:bg-green-50 transition-colors"
                          >
                            <div className="flex-1">
                              <span className="block text-lg font-semibold">
                                {product.name}
                              </span>
                              <span className="block text-sm">
                                {product.brand}
                              </span>
                              <span className="block text-sm">
                                {product.model}
                              </span>
                            </div>
                            <button
                              className={`${
                                isAdded
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-green-600 hover:bg-green-700"
                              } text-white rounded-md px-3 py-1`}
                              onClick={() =>
                                !isAdded && handleAddProduct(product)
                              }
                              disabled={isAdded}
                            >
                              {isAdded ? "✓" : "+"}
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p>No products found for this subcategory.</p>
                    )}
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

        {/* Products Section with Inline Recommendations */}
        <div className="flex">
          <div className="flex flex-col w-full">
            <div className="bg-[#AEFBD2] p-5 m-2 rounded-lg min-h-[10cm] box-border">
              <h3 className="text-xl font-bold mb-6">Added Products</h3>
              {addedProductsList.length > 0 ? (
                addedProductsList.map((product) => (
                  <div key={product.id} className="mb-6">
                    <div className="flex items-center justify-between border border-gray-300 rounded-md p-3 bg-gray-100">
                      <span className="text-lg">
                        {product.name}, {product.brand}, {product.model}
                      </span>
                      <button
                        className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Recommendations for this product */}
                    <div className="ml-6 mt-2">
                      {getRecommendations(product).map((rec) => (
                        <div
                          key={rec.id}
                          className="flex items-center justify-between border border-gray-300 rounded-md p-2 mb-2 bg-green-50"
                        >
                          <div className="flex items-center">
                            <span className="text-green-600 mr-2">↳</span>
                            <span>
                              {rec.brand} {rec.model} ({rec.footprint} kg CO2e)
                            </span>
                          </div>
                          <button
                            className="bg-green-600 text-white rounded-md px-2 py-1 text-sm hover:bg-green-700"
                            onClick={() => handleAddProduct(rec)}
                            disabled={isProductAdded(rec.id)}
                          >
                            {isProductAdded(rec.id) ? "✓" : "+"}
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
      </div>

      {/* Analysis Section */}
      <div className="w-full h-auto">
        <div className="bg-[#082F4F] text-white p-4 w-full rounded-lg box-border">
          <div className="flex gap-x-4">
            <div>
              <h3 className="text-lg font-bold mb-3">Footprint Analysis</h3>
              <p className="mb-1">
                Total Added Footprint: {totalAddedFootprint.toFixed(2)} kg CO2e
              </p>
              <p className="mb-1">
                Total Recommended Footprint:{" "}
                {totalRecommendedFootprint.toFixed(2)} kg CO2e
              </p>
              <p className="mb-1">
                Footprint Saved: {footprintSaved.toFixed(2)} kg CO2e
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

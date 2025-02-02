import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewType, setViewType] = useState("grid");

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Sport Elite Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      category: "Sports",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      colors: ["black", "blue", "red"],
      capacity: "750ml",
    },
    // Add more products...
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "sports", name: "Sports" },
    { id: "travel", name: "Travel" },
    { id: "kids", name: "Kids" },
    { id: "premium", name: "Premium" },
    { id: "glass", name: "Glass" },
  ];

  const priceRanges = [
    { id: "all", name: "All Prices" },
    { id: "under-20", name: "Under $20" },
    { id: "20-30", name: "$20 - $30" },
    { id: "30-50", name: "$30 - $50" },
    { id: "over-50", name: "Over $50" },
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "newest", name: "Newest" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Highest Rated" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Shop Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shop Our Collection
          </h1>
          <p className="mt-2 text-gray-600">
            Discover our premium range of water bottles for every lifestyle
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Categories Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-lexa-600 focus:ring-lexa-500"
                    />
                    <span className="ml-2 text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Price Range
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value={range.id}
                      checked={selectedPrice === range.id}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="h-4 w-4 text-lexa-600 focus:ring-lexa-500"
                    />
                    <span className="ml-2 text-gray-700">{range.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border-gray-300 text-gray-700 focus:ring-lexa-500 focus:border-lexa-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-md ${
                    viewType === "grid"
                      ? "bg-lexa-100 text-lexa-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-md ${
                    viewType === "list"
                      ? "bg-lexa-100 text-lexa-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products */}
            <div
              className={`grid ${
                viewType === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-6`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${
                    viewType === "list" ? "flex" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div
                    className={
                      viewType === "list"
                        ? "w-48 h-48"
                        : "aspect-w-1 aspect-h-1"
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.category}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-lexa-600">
                        ${product.price}
                      </span>
                      <Link
                        to={`/product/${product.id}`}
                        className="px-4 py-2 bg-lexa-600 text-white rounded-full hover:bg-lexa-700 transition duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

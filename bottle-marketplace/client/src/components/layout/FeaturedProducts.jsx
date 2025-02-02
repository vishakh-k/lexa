import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sport Elite Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      category: "Sports",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Eco Glass Bottle",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
      category: "Glass",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Travel Companion",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1536939459926-301728717817",
      category: "Travel",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Premium Steel",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427",
      category: "Premium",
      rating: 4.9,
      reviews: 201,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular water bottles, crafted with premium
            materials and designed for everyday use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-lexa-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
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
                  <span className="text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-lexa-600">
                    ${product.price}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-lexa-600 text-white px-4 py-2 rounded-full hover:bg-lexa-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 bg-lexa-600 text-white px-8 py-3 rounded-full hover:bg-lexa-700 transition duration-300"
          >
            <span>View All Products</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

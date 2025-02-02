import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: "sports",
      name: "Sports Bottles",
      description: "Perfect for athletes and active lifestyles",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      count: 24,
    },
    {
      id: "travel",
      name: "Travel Bottles",
      description: "Ideal for adventures and daily commute",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e9",
      count: 18,
    },
    {
      id: "kids",
      name: "Kids Bottles",
      description: "Safe and fun bottles for children",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e7",
      count: 12,
    },
    {
      id: "premium",
      name: "Premium Collection",
      description: "Luxury bottles with superior quality",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e6",
      count: 15,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find the perfect bottle for your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* Image */}
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        {category.count} Products
                      </span>
                      <span className="text-white text-sm font-medium group-hover:underline">
                        Shop Now →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

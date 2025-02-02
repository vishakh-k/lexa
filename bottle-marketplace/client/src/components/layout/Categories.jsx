import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";

const Categories = () => {
  const categories = [
    {
      id: "sports",
      name: "Sports Bottles",
      description: "Perfect for athletes and active lifestyles",
      image: images.bottle2,
      count: 24,
    },
    {
      id: "travel",
      name: "Travel Bottles",
      description: "Ideal for adventures and daily commute",
      image: images.bottle3,
      count: 18,
    },
    {
      id: "kids",
      name: "Kids Bottles",
      description: "Safe and fun bottles for children",
      image: images.bottle6,
      count: 12,
    },
    {
      id: "premium",
      name: "Premium Collection",
      description: "Luxury bottles with superior quality",
      image: images.bottle5,
      count: 15,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Shop by Category
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Find the perfect bottle for your needs
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div key={index} className="group relative">
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white dark:bg-gray-700">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-center object-cover group-hover:opacity-75 transition duration-300"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              {category.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Categories;
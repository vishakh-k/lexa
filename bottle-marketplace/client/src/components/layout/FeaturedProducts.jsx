import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Our most popular selections
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                />
              </div>
              <motion.div
                className="mt-4 flex justify-between"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <motion.p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    whileHover={{ color: "#4F46E5" }}
                  >
                    ${product.price}
                  </motion.p>
                </div>
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-300">
                    {product.rating} ({product.reviews})
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;

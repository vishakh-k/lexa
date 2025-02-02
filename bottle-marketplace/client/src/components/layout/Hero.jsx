import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: images.bottle1,
      title: "Welcome to LEXA",
      description:
        "Discover our premium collection of sustainable water bottles designed for every lifestyle.",
    },
    {
      image: images.bottle2,
      title: "Eco-Friendly Design",
      description:
        "Join the movement towards a sustainable future with our reusable water bottles.",
    },
    {
      image: images.bottle3,
      title: "Premium Quality",
      description:
        "Crafted with precision using high-grade materials for lasting durability.",
    },
    {
      image: images.bottle4,
      title: "Style Meets Function",
      description:
        "Elegant designs that complement your lifestyle while keeping you hydrated.",
    },
    {
      image: images.bottle5,
      title: "For Every Adventure",
      description:
        "From gym to office, our bottles are your perfect companion.",
    },
    {
      image: images.bottle6,
      title: "Customer Favorite",
      description:
        "Join thousands of satisfied customers who chose LEXA for their hydration needs.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-xl space-y-8">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-accent font-bold text-white">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 font-body leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Features List */}
            <div className="space-y-3 text-gray-200">
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-lexa-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>BPA-free materials</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-lexa-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lifetime warranty</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-lexa-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24/7 customer support</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4 mt-8">
              <Link
                to="/shop"
                className="px-8 py-4 bg-lexa-600 text-white rounded-full hover:bg-lexa-700 transition duration-300 font-heading group relative overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Shop Now</span>
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
                </span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 font-heading transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

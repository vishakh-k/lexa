import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data
  const product = {
    id: id,
    name: 'Sport Elite Bottle',
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    description: 'Premium sports water bottle with advanced temperature control. Perfect for athletes and outdoor enthusiasts.',
    features: [
      'Double-wall vacuum insulation',
      'Keeps drinks cold for 24 hours',
      'Leak-proof lid design',
      'BPA-free materials',
      'Easy-grip texture'
    ],
    specs: {
      capacity: '750ml',
      weight: '380g',
      height: '26cm',
      diameter: '7.5cm',
      materials: 'Stainless Steel, BPA-free plastic'
    },
    colors: [
      { name: 'black', hex: '#000000' },
      { name: 'silver', hex: '#C0C0C0' },
      { name: 'blue', hex: '#0000FF' },
      { name: 'red', hex: '#FF0000' }
    ],
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e9',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e7',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e6'
    ],
    stock: 15
  };

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log(`Added ${quantity} ${product.name} in ${selectedColor} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-lexa-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            
            {/* Price and Rating */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-lexa-600 dark:text-lexa-400">
                ${product.price}
              </span>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lexa-500 ${
                      selectedColor === color.name ? 'ring-2 ring-lexa-500' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Quantity</h3>
              <div className="mt-2 flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-gray-900 dark:text-white font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 px-8 flex items-center justify-center text-base font-medium text-white bg-lexa-600 hover:bg-lexa-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lexa-500"
            >
              Add to Cart
            </button>

            {/* Stock Status */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {product.stock > 0 ? (
                <span className="text-green-600 dark:text-green-400">
                  In stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-400">Out of stock</span>
              )}
            </p>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8">
              {['description', 'features', 'specifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-sm font-medium border-b-2 ${
                    activeTab === tab
                      ? 'border-lexa-500 text-lexa-600 dark:text-lexa-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 prose prose-lexa dark:prose-invert max-w-none">
            {activeTab === 'description' && (
              <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
            )}

            {activeTab === 'features' && (
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                ))}
              </ul>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b dark:border-gray-700 pb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

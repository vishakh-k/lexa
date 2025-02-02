import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-lexa-600 hover:bg-lexa-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="p-6 border-b dark:border-gray-700 last:border-0"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="ml-6 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Color: {item.color}
                          </p>
                        </div>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              updateQuantity({
                                ...item,
                                quantity: Math.max(1, item.quantity - 1),
                              })
                            }
                            className="p-1 rounded-md border border-gray-300 dark:border-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-gray-600 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <span className="text-gray-600 dark:text-gray-400">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity({
                                ...item,
                                quantity: item.quantity + 1,
                              })
                            }
                            className="p-1 rounded-md border border-gray-300 dark:border-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-gray-600 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Shipping
                  </span>
                  <span className="text-gray-900 dark:text-white">Free</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-lexa-600 text-white py-3 px-4 rounded-full hover:bg-lexa-700 transition duration-150">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

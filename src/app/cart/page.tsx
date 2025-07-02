"use client"
import React from 'react';
import Link from 'next/link';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Heart, Gift } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const shippingCost = totalPrice > 999 ? 0 : 99;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Discover authentic fragrances from Kannauj artisans</p>
          <Link
            href="/shop"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <Link
              href="/shop"
              className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
          <p className="text-gray-600 mt-2">{totalItems} items in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">by {item.artisan}</p>
                    <p className="text-lg font-bold text-amber-600 mt-1">₹{item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 hover:text-amber-600 text-sm flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      Save for later
                    </button>
                    <button className="text-gray-500 hover:text-amber-600 text-sm flex items-center">
                      <Gift className="w-4 h-4 mr-1" />
                      Add gift wrap
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-lg font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shippingCost}`
                    )}
                  </span>
                </div>

                {shippingCost > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-sm text-amber-700">
                      Add ₹{(1000 - totalPrice).toLocaleString()} more for free shipping!
                    </p>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/checkout"
                  className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium text-center block"
                >
                  Proceed to Checkout
                </Link>
                
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Continue Shopping
                </button>
              </div>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Promo Code</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Authentic products guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">Recommended Product {i}</h3>
                  <p className="text-sm text-gray-600 mb-2">by Artisan Name</p>
                  <p className="font-bold text-amber-600">₹1,999</p>
                  <button className="w-full mt-3 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
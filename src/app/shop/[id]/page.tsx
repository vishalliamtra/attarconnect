"use client"
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, Heart, ShoppingCart, Share2, Shield, Truck, RotateCcw, Award, Plus, Minus, MapPin, Clock, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, fetch based on id
  const product = {
    id: '1',
    name: 'Pure Rose Attar',
    artisan: {
      id: '1',
      name: 'Mohammad Rashid',
      location: 'Central Kannauj',
      years: 25,
      verified: true,
      avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    price: 2499,
    originalPrice: 2999,
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    rating: 4.8,
    reviews: 127,
    category: 'Attars',
    ingredients: ['Rose Petals', 'Sandalwood Base', 'Natural Oils'],
    description: 'This exquisite rose attar is crafted using the traditional deg-bhapka method, where fresh rose petals are steam-distilled with sandalwood oil. The process takes over 15 hours and results in a pure, alcohol-free fragrance that captures the essence of Kannauj roses.',
    features: [
      'Alcohol-free traditional attar',
      'Made using deg-bhapka method',
      'Aged for 6 months in traditional leather bottles',
      'Pure rose essence with sandalwood base',
      'Long-lasting fragrance (8-12 hours)',
      'Suitable for all skin types'
    ],
    specifications: {
      volume: '12ml',
      concentration: 'Pure Attar',
      origin: 'Kannauj, India',
      shelfLife: '5 years',
      packaging: 'Traditional glass bottle with wooden cap'
    },
    inStock: true,
    stockCount: 15
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Jasmine Night Bloom',
      price: 1899,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      artisan: 'Priya Devi'
    },
    {
      id: '3',
      name: 'Mysore Sandalwood',
      price: 3799,
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400',
      artisan: 'Suresh Kumar'
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Anita Sharma',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely divine fragrance! The rose scent is so pure and long-lasting. Worth every penny.',
      verified: true
    },
    {
      id: 2,
      user: 'Rajesh Kumar',
      rating: 4,
      date: '2024-01-10',
      comment: 'Beautiful traditional attar. The packaging is also very elegant. Will definitely order again.',
      verified: true
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        artisan: product.artisan.name
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-amber-600">Shop</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500 ml-1">({product.reviews} reviews)</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-green-600 font-medium">In Stock ({product.stockCount} left)</span>
              </div>
            </div>

            {/* Artisan Info */}
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{product.artisan.name}</h3>
                    {product.artisan.verified && (
                      <Award className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{product.artisan.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{product.artisan.years} years experience</span>
                  </div>
                </div>
                <Link
                  href={`/artisan/${product.artisan.id}`}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    <Leaf className="w-3 h-3 mr-1" />
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center font-medium"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Authentic Product</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-amber-500 text-amber-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {relatedProduct.artisan}</p>
                  <p className="font-bold text-amber-600">₹{relatedProduct.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
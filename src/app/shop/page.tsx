"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    priceRange: '',
    brand: '',
    ingredients: '',
    type: ''
  });

  const products = [
    {
      id: 1,
      name: 'Pure Rose Attar',
      artisan: 'Mohammad Rashid',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 127,
      category: 'Attars',
      ingredients: ['Rose', 'Sandalwood'],
      description: 'Pure rose attar extracted using traditional deg-bhapka method',
      inStock: true
    },
    {
      id: 2,
      name: 'Mysore Sandalwood Oil',
      artisan: 'Suresh Kumar',
      price: 3799,
      originalPrice: 4299,
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      category: 'Essential Oils',
      ingredients: ['Sandalwood'],
      description: 'Premium Mysore sandalwood essential oil, aged for 3 years',
      inStock: true
    },
    {
      id: 3,
      name: 'Traditional Oud Collection',
      artisan: 'Fatima Begum',
      price: 5999,
      originalPrice: 6999,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      category: 'Attars',
      ingredients: ['Oud', 'Rose'],
      description: 'Authentic oud blend with rose petals, aged in traditional oak',
      inStock: true
    },
    {
      id: 4,
      name: 'Jasmine Night Bloom',
      artisan: 'Priya Devi',
      price: 1899,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 156,
      category: 'Attars',
      ingredients: ['Jasmine', 'Vetiver'],
      description: 'Night-blooming jasmine captured at peak fragrance',
      inStock: false
    },
    {
      id: 5,
      name: 'Lavender Herbal Soap',
      artisan: 'Ramesh Soap Works',
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      reviews: 342,
      category: 'Perfumed Soaps',
      ingredients: ['Lavender', 'Coconut Oil'],
      description: 'Handmade lavender soap with natural oils and herbs',
      inStock: true
    },
    {
      id: 6,
      name: 'Sacred Incense Bundle',
      artisan: 'Temple Craft Co.',
      price: 799,
      originalPrice: 999,
      image: 'https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 98,
      category: 'Incense & Dhoop',
      ingredients: ['Sandalwood', 'Frankincense'],
      description: 'Traditional temple incense made with pure sandalwood',
      inStock: true
    }
  ];

  const filters = {
    categories: ['Attars (Ittar)', 'Essential Oils', 'Perfumed Soaps', 'Incense & Dhoop', 'Gift Sets'],
    priceRanges: ['Under ₹500', '₹500 - ₹1,000', '₹1,000 - ₹3,000', '₹3,000 - ₹5,000', 'Above ₹5,000'],
    ingredients: ['Rose', 'Sandalwood', 'Jasmine', 'Oud', 'Lavender', 'Vetiver', 'Frankincense'],
    types: ['Alcohol-free', 'Water-based', 'Oil-based', 'Traditional']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shop All Products</h1>
              <p className="text-gray-600 mt-2">Discover authentic fragrances from Kannauj artisans</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <Filter className="w-5 h-5 text-gray-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {filters.categories.map((category, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-amber-600 mr-3" />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {filters.priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center">
                      <input type="radio" name="priceRange" className="border-gray-300 text-amber-600 mr-3" />
                      <span className="text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ingredients Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Ingredients</h3>
                <div className="space-y-2">
                  {filters.ingredients.map((ingredient, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-amber-600 mr-3" />
                      <span className="text-sm text-gray-700">{ingredient}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Type</h3>
                <div className="space-y-2">
                  {filters.types.map((type, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-amber-600 mr-3" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="lg:w-3/4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">Showing {products.length} of {products.length} products</p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 flex flex-col space-y-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors" onClick={e => e.preventDefault()}>
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                        {product.originalPrice > product.price && (
                          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </div>
                        )}
                      </div>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {product.artisan}</p>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        <button
                          disabled={!product.inStock}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            product.inStock
                              ? 'bg-amber-600 text-white hover:bg-amber-700'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          onClick={e => e.preventDefault()}
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full md:w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-medium text-gray-900 mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">by {product.artisan}</p>
                            <p className="text-gray-700 mb-3">{product.description}</p>
                            <div className="flex items-center mb-3">
                              <div className="flex items-center mr-4">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-sm text-gray-500 ml-1">({product.reviews} reviews)</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {product.ingredients.map((ingredient, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                    {ingredient}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                              {product.originalPrice > product.price && (
                                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <button
                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={e => e.preventDefault()}
                              >
                                <Heart className="w-5 h-5 text-gray-600" />
                              </button>
                              <button
                                disabled={!product.inStock}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                                  product.inStock
                                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                                onClick={e => e.preventDefault()}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm font-medium text-white bg-amber-600 border border-amber-600 rounded-lg">
                  1
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
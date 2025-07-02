import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Star, Award, Clock, MessageCircle, Phone, Mail, Globe, Calendar, Package, Users, Heart, ShoppingCart } from 'lucide-react';

const ArtisanProfilePage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('products');

  // Mock artisan data - in real app, fetch based on id
  const artisan = {
    id: '1',
    name: 'Mohammad Rashid',
    image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Central Kannauj, Uttar Pradesh',
    years: 25,
    speciality: 'Rose & Jasmine Attars',
    rating: 4.9,
    reviews: 189,
    verified: true,
    description: 'Third-generation attar maker specializing in traditional rose and jasmine distillation using the ancient deg-bhapka method. Mohammad has been perfecting his craft for over 25 years, learning from his grandfather who established the family workshop in 1952.',
    techniques: ['Deg-Bhapka', 'Steam Distillation', 'Cold Pressing', 'Traditional Aging'],
    languages: ['Hindi', 'Urdu', 'English'],
    joinedDate: '2020-03-15',
    totalProducts: 47,
    totalSales: 1250,
    responseTime: '2 hours',
    contact: {
      phone: '+91 98765 43210',
      email: 'rashid@kannaujattars.com',
      website: 'www.rashidattars.com'
    },
    workshop: {
      established: 1952,
      employees: 8,
      capacity: '500 bottles/month',
      certifications: ['Organic Certified', 'Fair Trade', 'Traditional Craft Certified']
    }
  };

  const products = [
    {
      id: '1',
      name: 'Pure Rose Attar',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 127,
      inStock: true
    },
    {
      id: '2',
      name: 'Jasmine Night Bloom',
      price: 1899,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 89,
      inStock: true
    },
    {
      id: '3',
      name: 'Royal Rose Collection',
      price: 4999,
      originalPrice: 5999,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      inStock: false
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Priya Sharma',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely divine rose attar! The quality is exceptional and the fragrance lasts all day. Mohammad is a true master of his craft.',
      product: 'Pure Rose Attar',
      verified: true
    },
    {
      id: 2,
      user: 'Rajesh Kumar',
      rating: 5,
      date: '2024-01-10',
      comment: 'Beautiful traditional packaging and the most authentic jasmine scent I have ever experienced. Highly recommended!',
      product: 'Jasmine Night Bloom',
      verified: true
    },
    {
      id: 3,
      user: 'Sarah Johnson',
      rating: 4,
      date: '2024-01-08',
      comment: 'Excellent quality and fast shipping. The artisan was very responsive to my questions about the distillation process.',
      product: 'Royal Rose Collection',
      verified: true
    }
  ];

  const achievements = [
    {
      title: 'Master Craftsman Award',
      year: '2023',
      organization: 'Indian Perfumery Association',
      description: 'Recognized for excellence in traditional attar making'
    },
    {
      title: 'Heritage Preservation Award',
      year: '2022',
      organization: 'Kannauj Cultural Society',
      description: 'For maintaining traditional deg-bhapka methods'
    },
    {
      title: 'Export Excellence',
      year: '2021',
      organization: 'Ministry of Commerce',
      description: 'Outstanding contribution to fragrance exports'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-600 to-sandalwood-600">
        <img
          src={artisan.coverImage}
          alt="Workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {artisan.verified && (
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                  <Award className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{artisan.name}</h1>
                  <p className="text-lg text-amber-600 font-medium mb-2">{artisan.speciality}</p>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{artisan.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{artisan.years} years experience</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{artisan.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({artisan.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-600">{artisan.totalProducts} products</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4 md:mt-0">
                  <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </button>
                  <button className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600 mb-1">{artisan.totalProducts}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">{artisan.totalSales}+</div>
            <div className="text-sm text-gray-600">Sales</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">{artisan.rating}</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">{artisan.responseTime}</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {['products', 'about', 'reviews', 'achievements'].map((tab) => (
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
          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Products by {artisan.name}</h2>
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3 flex flex-col space-y-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
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
                      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        <Link
                          href={`/product/${product.id}`}
                          className="bg-amber-600 text-white px-3 py-1 rounded text-sm hover:bg-amber-700 transition-colors"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {artisan.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{artisan.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Techniques & Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.techniques.map((technique, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-700">{artisan.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-700">{artisan.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-700">{artisan.contact.website}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Workshop Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Established</span>
                      <span className="text-gray-900">{artisan.workshop.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employees</span>
                      <span className="text-gray-900">{artisan.workshop.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity</span>
                      <span className="text-gray-900">{artisan.workshop.capacity}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="space-y-2">
                    {artisan.workshop.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{artisan.rating}</span>
                    <span className="text-gray-500 ml-1">({artisan.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{review.user}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">Product: {review.product}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Awards & Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                          <span className="text-sm text-gray-500">{achievement.year}</span>
                        </div>
                        <p className="text-amber-600 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfilePage;
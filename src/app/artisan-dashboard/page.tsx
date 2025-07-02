"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Plus, BarChart3, Users, Star, Settings, Eye, Edit, Trash2, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ArtisanDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Products', value: '47', icon: Package, color: 'bg-blue-500' },
    { label: 'Total Sales', value: '₹1,25,000', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Orders This Month', value: '23', icon: ShoppingBag, color: 'bg-purple-500' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'bg-yellow-500' }
  ];

  const products = [
    {
      id: '1',
      name: 'Pure Rose Attar',
      price: 2499,
      stock: 15,
      sales: 127,
      rating: 4.8,
      status: 'active',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Jasmine Night Bloom',
      price: 1899,
      stock: 8,
      sales: 89,
      rating: 4.6,
      status: 'active',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Royal Rose Collection',
      price: 4999,
      stock: 0,
      sales: 156,
      rating: 4.9,
      status: 'out_of_stock',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const orders = [
    {
      id: 'ORD-2024-001',
      customer: 'Priya Sharma',
      product: 'Pure Rose Attar',
      amount: 2499,
      status: 'processing',
      date: '2024-01-20'
    },
    {
      id: 'ORD-2024-002',
      customer: 'Rajesh Kumar',
      product: 'Jasmine Night Bloom',
      amount: 1899,
      status: 'shipped',
      date: '2024-01-19'
    },
    {
      id: 'ORD-2024-003',
      customer: 'Sarah Johnson',
      product: 'Royal Rose Collection',
      amount: 4999,
      status: 'delivered',
      date: '2024-01-18'
    }
  ];

  const reviews = [
    {
      id: '1',
      customer: 'Priya Sharma',
      product: 'Pure Rose Attar',
      rating: 5,
      comment: 'Absolutely divine fragrance! The quality is exceptional.',
      date: '2024-01-15'
    },
    {
      id: '2',
      customer: 'Rajesh Kumar',
      product: 'Jasmine Night Bloom',
      rating: 4,
      comment: 'Beautiful traditional packaging and authentic scent.',
      date: '2024-01-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'out_of_stock': return 'text-red-600 bg-red-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'My Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400'}
                alt={user?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
                <p className="text-gray-600">Manage your products and orders</p>
              </div>
            </div>
            <Link
              href="/add-product"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Product
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg ${stat.color}`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Order ID</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0, 5).map((order) => (
                          <tr key={order.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-sm text-gray-900">{order.id}</td>
                            <td className="py-3 px-4 text-sm text-gray-900">{order.customer}</td>
                            <td className="py-3 px-4 text-sm text-gray-900">{order.product}</td>
                            <td className="py-3 px-4 text-sm text-gray-900">₹{order.amount.toLocaleString()}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Products</h2>
                  <Link
                    href="/add-product"
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Link>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Stock</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Sales</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Rating</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <span className="font-medium text-gray-900">{product.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">₹{product.price.toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{product.stock}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{product.sales}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              {product.rating}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(product.status)}`}>
                              {product.status.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-amber-600 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">All Orders</h2>
                
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                          <p className="text-sm text-gray-600">Product: {order.product}</p>
                          <p className="text-sm text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">₹{order.amount.toLocaleString()}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{review.customer}</h3>
                          <p className="text-sm text-gray-600">{review.product}</p>
                        </div>
                        <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
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

            {/* Other tabs */}
            {activeTab === 'analytics' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics</h2>
                <p className="text-gray-600">Detailed analytics and insights coming soon.</p>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Artisan Profile</h2>
                <p className="text-gray-600">Manage your artisan profile and workshop information.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
                <p className="text-gray-600">Account settings and preferences.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
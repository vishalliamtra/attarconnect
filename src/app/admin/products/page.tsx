"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle,
  MoreHorizontal,
  Download,
  Star,
  Package
} from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: '1',
      name: 'Pure Rose Attar',
      artisan: 'Mohammad Rashid',
      category: 'Attars',
      price: 2499,
      stock: 15,
      status: 'active',
      rating: 4.8,
      reviews: 127,
      sales: 89,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Mysore Sandalwood Oil',
      artisan: 'Suresh Kumar',
      category: 'Essential Oils',
      price: 3799,
      stock: 8,
      status: 'active',
      rating: 4.9,
      reviews: 89,
      sales: 67,
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdDate: '2024-01-12'
    },
    {
      id: '3',
      name: 'Traditional Oud Collection',
      artisan: 'Fatima Begum',
      category: 'Attars',
      price: 5999,
      stock: 0,
      status: 'out_of_stock',
      rating: 4.7,
      reviews: 203,
      sales: 156,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdDate: '2024-01-10'
    },
    {
      id: '4',
      name: 'Jasmine Night Bloom',
      artisan: 'Priya Devi',
      category: 'Attars',
      price: 1899,
      stock: 25,
      status: 'pending',
      rating: 0,
      reviews: 0,
      sales: 0,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdDate: '2024-01-20'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'active', label: 'Active', count: products.filter(p => p.status === 'active').length },
    { id: 'pending', label: 'Pending Approval', count: products.filter(p => p.status === 'pending').length },
    { id: 'out_of_stock', label: 'Out of Stock', count: products.filter(p => p.status === 'out_of_stock').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'out_of_stock': return 'text-red-600 bg-red-100';
      case 'draft': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredProducts = products.filter(product => {
    if (activeTab !== 'all' && product.status !== activeTab) return false;
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.artisan.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600">Manage all products and their approval status</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products by name or artisan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
          <option>All Categories</option>
          <option>Attars</option>
          <option>Essential Oils</option>
          <option>Perfumed Soaps</option>
          <option>Incense & Dhoop</option>
        </select>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Product</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Artisan</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Price</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Stock</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Rating</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.sales} sales</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{product.artisan}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{product.category}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">₹{product.price.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {product.rating > 0 ? (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-900">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">No ratings</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(product.status)}`}>
                      {product.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      {product.status === 'pending' && (
                        <>
                          <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Package className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status === 'active').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <XCircle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Approval</p>
              <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status === 'pending').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Trash2 className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status === 'out_of_stock').length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  Package, 
  TrendingDown, 
  TrendingUp,
  Edit,
  RefreshCw,
  Download,
  Plus
} from 'lucide-react';

const InventoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const inventory = [
    {
      id: '1',
      productName: 'Pure Rose Attar',
      artisan: 'Mohammad Rashid',
      category: 'Attars',
      currentStock: 15,
      minStock: 10,
      maxStock: 50,
      unitPrice: 2499,
      totalValue: 37485,
      lastUpdated: '2024-01-20',
      status: 'in_stock',
      location: 'Warehouse A'
    },
    {
      id: '2',
      productName: 'Mysore Sandalwood Oil',
      artisan: 'Suresh Kumar',
      category: 'Essential Oils',
      currentStock: 8,
      minStock: 10,
      maxStock: 30,
      unitPrice: 3799,
      totalValue: 30392,
      lastUpdated: '2024-01-19',
      status: 'low_stock',
      location: 'Warehouse A'
    },
    {
      id: '3',
      productName: 'Traditional Oud Collection',
      artisan: 'Fatima Begum',
      category: 'Attars',
      currentStock: 0,
      minStock: 5,
      maxStock: 20,
      unitPrice: 5999,
      totalValue: 0,
      lastUpdated: '2024-01-18',
      status: 'out_of_stock',
      location: 'Warehouse B'
    },
    {
      id: '4',
      productName: 'Jasmine Night Bloom',
      artisan: 'Priya Devi',
      category: 'Attars',
      currentStock: 25,
      minStock: 15,
      maxStock: 40,
      unitPrice: 1899,
      totalValue: 47475,
      lastUpdated: '2024-01-21',
      status: 'in_stock',
      location: 'Warehouse A'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Items', count: inventory.length },
    { id: 'in_stock', label: 'In Stock', count: inventory.filter(i => i.status === 'in_stock').length },
    { id: 'low_stock', label: 'Low Stock', count: inventory.filter(i => i.status === 'low_stock').length },
    { id: 'out_of_stock', label: 'Out of Stock', count: inventory.filter(i => i.status === 'out_of_stock').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock': return 'text-green-600 bg-green-100';
      case 'low_stock': return 'text-yellow-600 bg-yellow-100';
      case 'out_of_stock': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStockIcon = (current: number, min: number) => {
    if (current === 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    if (current <= min) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <TrendingUp className="w-4 h-4 text-green-500" />;
  };

  const filteredInventory = inventory.filter(item => {
    if (activeTab !== 'all' && item.status !== activeTab) return false;
    if (searchQuery && !item.productName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.artisan.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalValue = inventory.reduce((sum, item) => sum + item.totalValue, 0);
  const lowStockItems = inventory.filter(item => item.status === 'low_stock' || item.status === 'out_of_stock').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Monitor stock levels and manage inventory across warehouses</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Stock
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Package className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">₹{totalValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Low Stock Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{lowStockItems}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <TrendingDown className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-900">{inventory.filter(i => i.status === 'out_of_stock').length}</p>
            </div>
          </div>
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
            placeholder="Search products or artisans..."
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
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
          <option>All Warehouses</option>
          <option>Warehouse A</option>
          <option>Warehouse B</option>
        </select>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Product</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Artisan</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Current Stock</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Min/Max</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Unit Price</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Total Value</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Location</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {getStockIcon(item.currentStock, item.minStock)}
                      <span className="ml-2 font-medium text-gray-900">{item.productName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.artisan}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.category}</td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${
                      item.currentStock === 0 ? 'text-red-600' : 
                      item.currentStock <= item.minStock ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {item.currentStock} units
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {item.minStock} / {item.maxStock}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">₹{item.unitPrice.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">₹{item.totalValue.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(item.status)}`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{item.location}</td>
                  <td className="py-4 px-6">
                    <button className="p-1 text-gray-400 hover:text-amber-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
            <h3 className="text-lg font-semibold text-yellow-800">Stock Alerts</h3>
          </div>
          <div className="space-y-2">
            {inventory.filter(item => item.status === 'low_stock' || item.status === 'out_of_stock').map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white rounded-lg p-3">
                <div>
                  <span className="font-medium text-gray-900">{item.productName}</span>
                  <span className="text-sm text-gray-500 ml-2">by {item.artisan}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium ${
                    item.currentStock === 0 ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {item.currentStock === 0 ? 'Out of stock' : `Only ${item.currentStock} left`}
                  </span>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                    Restock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
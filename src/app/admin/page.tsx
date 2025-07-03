"use client"
import React from 'react';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Eye,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '2,847',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Total Products',
      value: '1,234',
      change: '+8%',
      changeType: 'increase',
      icon: Package,
      color: 'bg-green-500'
    },
    {
      name: 'Active Orders',
      value: '156',
      change: '+23%',
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'bg-purple-500'
    },
    {
      name: 'Revenue (Month)',
      value: '₹4,56,789',
      change: '+15%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-amber-500'
    }
  ];

  const recentOrders = [
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
      product: 'Mysore Sandalwood',
      amount: 3799,
      status: 'shipped',
      date: '2024-01-19'
    },
    {
      id: 'ORD-2024-003',
      customer: 'Sarah Johnson',
      product: 'Jasmine Collection',
      amount: 1899,
      status: 'delivered',
      date: '2024-01-18'
    }
  ];

  const topProducts = [
    {
      name: 'Pure Rose Attar',
      artisan: 'Mohammad Rashid',
      sales: 127,
      revenue: '₹3,17,373',
      rating: 4.8
    },
    {
      name: 'Mysore Sandalwood',
      artisan: 'Suresh Kumar',
      sales: 89,
      revenue: '₹3,38,111',
      rating: 4.9
    },
    {
      name: 'Traditional Oud',
      artisan: 'Fatima Begum',
      sales: 76,
      revenue: '₹4,55,924',
      rating: 4.7
    }
  ];

  const alerts = [
    {
      type: 'warning',
      message: '5 products are running low on stock',
      time: '2 hours ago'
    },
    {
      type: 'info',
      message: '3 new vendor applications pending approval',
      time: '4 hours ago'
    },
    {
      type: 'error',
      message: '2 payment disputes require attention',
      time: '6 hours ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'error': return 'border-red-200 bg-red-50 text-red-700';
      case 'warning': return 'border-yellow-200 bg-yellow-50 text-yellow-700';
      case 'info': return 'border-blue-200 bg-blue-50 text-blue-700';
      default: return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Order ID</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Customer</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Product</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Amount</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-900">{order.id}</td>
                    <td className="py-3 text-sm text-gray-900">{order.customer}</td>
                    <td className="py-3 text-sm text-gray-900">{order.product}</td>
                    <td className="py-3 text-sm text-gray-900">₹{order.amount.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-amber-600 hover:text-amber-700">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">System Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-3 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs mt-1 opacity-75">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Selling Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>by {product.artisan}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-600">{product.sales} sales</p>
                  <p className="font-medium text-gray-900">{product.revenue}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-gray-900">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Package className="w-8 h-8 text-amber-600 mb-2" />
            <p className="font-medium text-gray-900">Add Product</p>
            <p className="text-sm text-gray-600">Create new product listing</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Verify Vendor</p>
            <p className="text-sm text-gray-600">Review pending applications</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <p className="font-medium text-gray-900">Process Payment</p>
            <p className="text-sm text-gray-600">Approve vendor payouts</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <AlertTriangle className="w-8 h-8 text-red-600 mb-2" />
            <p className="font-medium text-gray-900">Review Reports</p>
            <p className="text-sm text-gray-600">Handle user complaints</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
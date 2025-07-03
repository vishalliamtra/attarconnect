"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Calendar,
  Percent,
  Gift,
  Target,
  MoreHorizontal,
  Copy
} from 'lucide-react';

const OffersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const offers = [
    {
      id: '1',
      name: 'New Year Special',
      code: 'NEWYEAR2024',
      type: 'percentage',
      value: 20,
      description: '20% off on all products',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      status: 'active',
      usageLimit: 1000,
      usageCount: 234,
      minOrderValue: 1000,
      applicableProducts: 'All Products',
      createdBy: 'Admin'
    },
    {
      id: '2',
      name: 'First Time Buyer',
      code: 'WELCOME15',
      type: 'percentage',
      value: 15,
      description: '15% off for new customers',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      usageLimit: null,
      usageCount: 567,
      minOrderValue: 500,
      applicableProducts: 'All Products',
      createdBy: 'Admin'
    },
    {
      id: '3',
      name: 'Rose Attar Special',
      code: 'ROSE50',
      type: 'fixed',
      value: 50,
      description: '₹50 off on Rose Attars',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'active',
      usageLimit: 500,
      usageCount: 89,
      minOrderValue: 2000,
      applicableProducts: 'Rose Attars',
      createdBy: 'Mohammad Rashid'
    },
    {
      id: '4',
      name: 'Valentine Special',
      code: 'LOVE2024',
      type: 'percentage',
      value: 25,
      description: '25% off on gift sets',
      startDate: '2024-02-10',
      endDate: '2024-02-20',
      status: 'scheduled',
      usageLimit: 200,
      usageCount: 0,
      minOrderValue: 1500,
      applicableProducts: 'Gift Sets',
      createdBy: 'Admin'
    },
    {
      id: '5',
      name: 'Summer Sale',
      code: 'SUMMER2023',
      type: 'percentage',
      value: 30,
      description: '30% off summer collection',
      startDate: '2023-06-01',
      endDate: '2023-08-31',
      status: 'expired',
      usageLimit: 1500,
      usageCount: 1456,
      minOrderValue: 800,
      applicableProducts: 'Summer Collection',
      createdBy: 'Admin'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Offers', count: offers.length },
    { id: 'active', label: 'Active', count: offers.filter(o => o.status === 'active').length },
    { id: 'scheduled', label: 'Scheduled', count: offers.filter(o => o.status === 'scheduled').length },
    { id: 'expired', label: 'Expired', count: offers.filter(o => o.status === 'expired').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'scheduled': return 'text-blue-600 bg-blue-100';
      case 'expired': return 'text-gray-600 bg-gray-100';
      case 'paused': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'percentage' ? <Percent className="w-4 h-4" /> : <Gift className="w-4 h-4" />;
  };

  const filteredOffers = offers.filter(offer => {
    if (activeTab !== 'all' && offer.status !== activeTab) return false;
    if (searchQuery && !offer.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !offer.code.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Offers & Promotions</h1>
          <p className="text-gray-600">Create and manage discount codes and promotional campaigns</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Create Offer
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Gift className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Offers</p>
              <p className="text-2xl font-bold text-gray-900">{offers.filter(o => o.status === 'active').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Target className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Usage</p>
              <p className="text-2xl font-bold text-gray-900">{offers.reduce((sum, o) => sum + o.usageCount, 0)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-gray-900">{offers.filter(o => o.status === 'scheduled').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Percent className="w-8 h-8 text-amber-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Avg. Discount</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(offers.filter(o => o.type === 'percentage').reduce((sum, o) => sum + o.value, 0) / offers.filter(o => o.type === 'percentage').length)}%
              </p>
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
            placeholder="Search offers by name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
          <option>All Types</option>
          <option>Percentage</option>
          <option>Fixed Amount</option>
        </select>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4 mr-2" />
          Date Range
        </button>
      </div>

      {/* Offers Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Offer Details</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Code</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Discount</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Validity</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Usage</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Created By</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffers.map((offer) => (
                <tr key={offer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{offer.name}</p>
                      <p className="text-sm text-gray-500">{offer.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{offer.applicableProducts}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{offer.code}</code>
                      <button className="ml-2 p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {getTypeIcon(offer.type)}
                      <span className="ml-2 font-medium text-gray-900">
                        {offer.type === 'percentage' ? `${offer.value}%` : `₹${offer.value}`}
                      </span>
                    </div>
                    {offer.minOrderValue && (
                      <p className="text-xs text-gray-500 mt-1">Min: ₹{offer.minOrderValue}</p>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    <div>
                      <p>{new Date(offer.startDate).toLocaleDateString()}</p>
                      <p className="text-gray-500">to {new Date(offer.endDate).toLocaleDateString()}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{offer.usageCount}</p>
                      {offer.usageLimit && (
                        <p className="text-gray-500">of {offer.usageLimit}</p>
                      )}
                      {offer.usageLimit && (
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="bg-amber-600 h-1.5 rounded-full" 
                            style={{ width: `${Math.min((offer.usageCount / offer.usageLimit) * 100, 100)}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(offer.status)}`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">{offer.createdBy}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-amber-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
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

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Percent className="w-8 h-8 text-green-600 mb-2" />
            <p className="font-medium text-gray-900">Percentage Discount</p>
            <p className="text-sm text-gray-600">Create % based discount offer</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Gift className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Fixed Amount Off</p>
            <p className="text-sm text-gray-600">Create fixed amount discount</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Target className="w-8 h-8 text-purple-600 mb-2" />
            <p className="font-medium text-gray-900">Targeted Campaign</p>
            <p className="text-sm text-gray-600">Create user-specific offers</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
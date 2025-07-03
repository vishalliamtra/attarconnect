"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Mail, 
  Bell, 
  Users,
  Eye,
  Reply,
  Archive,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

const MessagesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('customer');

  const customerMessages = [
    {
      id: '1',
      customer: 'Priya Sharma',
      email: 'priya@example.com',
      subject: 'Question about Rose Attar authenticity',
      message: 'Hi, I wanted to know more about the authenticity of the Pure Rose Attar. Can you provide details about the distillation process?',
      date: '2024-01-20',
      status: 'unread',
      priority: 'normal',
      category: 'product_inquiry'
    },
    {
      id: '2',
      customer: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      subject: 'Order delivery issue',
      message: 'My order ORD-2024-002 was supposed to be delivered yesterday but I haven\'t received it yet. Can you please check the status?',
      date: '2024-01-19',
      status: 'replied',
      priority: 'high',
      category: 'order_support'
    },
    {
      id: '3',
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      subject: 'Bulk order inquiry',
      message: 'I\'m interested in placing a bulk order for my spa business. Can you provide wholesale pricing for essential oils?',
      date: '2024-01-18',
      status: 'unread',
      priority: 'high',
      category: 'bulk_inquiry'
    }
  ];

  const vendorTickets = [
    {
      id: '1',
      vendor: 'Mohammad Rashid',
      email: 'mohammad@example.com',
      subject: 'Payment delay issue',
      message: 'I haven\'t received my payout for last month\'s sales. Can you please check the status of my payment request?',
      date: '2024-01-20',
      status: 'unread',
      priority: 'high',
      category: 'payment'
    },
    {
      id: '2',
      vendor: 'Suresh Kumar',
      email: 'suresh@example.com',
      subject: 'Product approval pending',
      message: 'My new sandalwood oil product has been pending approval for 5 days. When can I expect it to go live?',
      date: '2024-01-19',
      status: 'in_progress',
      priority: 'normal',
      category: 'product_approval'
    }
  ];

  const notifications = [
    {
      id: '1',
      type: 'system',
      title: 'Low stock alert',
      message: '5 products are running low on inventory',
      date: '2024-01-20',
      read: false
    },
    {
      id: '2',
      type: 'order',
      title: 'New order received',
      message: 'Order ORD-2024-005 placed by Ahmed Hassan',
      date: '2024-01-20',
      read: false
    },
    {
      id: '3',
      type: 'vendor',
      title: 'New vendor application',
      message: 'Fatima Begum has applied to become a vendor',
      date: '2024-01-19',
      read: true
    }
  ];

  const tabs = [
    { id: 'customer', label: 'Customer Messages', count: customerMessages.length },
    { id: 'vendor', label: 'Vendor Support', count: vendorTickets.length },
    { id: 'notifications', label: 'System Notifications', count: notifications.filter(n => !n.read).length },
    { id: 'templates', label: 'Email Templates', count: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'text-red-600 bg-red-100';
      case 'replied': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'normal': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages & Support</h1>
          <p className="text-gray-600">Manage customer inquiries and vendor support tickets</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Archive className="w-4 h-4 mr-2" />
            Archive
          </button>
          <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            Compose
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <MessageSquare className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Unread Messages</p>
              <p className="text-2xl font-bold text-gray-900">
                {customerMessages.filter(m => m.status === 'unread').length + vendorTickets.filter(t => t.status === 'unread').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Response</p>
              <p className="text-2xl font-bold text-gray-900">
                {vendorTickets.filter(t => t.status === 'in_progress').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Bell className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">
                {customerMessages.filter(m => m.priority === 'high').length + vendorTickets.filter(t => t.priority === 'high').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
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
              {tab.count > 0 && (
                <span className="ml-2 bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Customer Messages Tab */}
      {activeTab === 'customer' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search customer messages..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
              <option>All Categories</option>
              <option>Product Inquiry</option>
              <option>Order Support</option>
              <option>Bulk Inquiry</option>
              <option>General</option>
            </select>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Priority
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {customerMessages.map((message) => (
                <div key={message.id} className="border-b border-gray-100 p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`font-medium ${message.status === 'unread' ? 'text-gray-900' : 'text-gray-700'}`}>
                          {message.customer}
                        </h3>
                        <span className="text-sm text-gray-500">{message.email}</span>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(message.status)}`}>
                          {message.status}
                        </span>
                        <Star className={`w-4 h-4 ${getPriorityColor(message.priority)}`} />
                      </div>
                      <h4 className={`text-lg mb-2 ${message.status === 'unread' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                        {message.subject}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{message.message}</p>
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <span>{new Date(message.date).toLocaleDateString()}</span>
                        <span className="capitalize">{message.category.replace('_', ' ')}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Reply className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                        <Star className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vendor Support Tab */}
      {activeTab === 'vendor' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {vendorTickets.map((ticket) => (
                <div key={ticket.id} className="border-b border-gray-100 p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`font-medium ${ticket.status === 'unread' ? 'text-gray-900' : 'text-gray-700'}`}>
                          {ticket.vendor}
                        </h3>
                        <span className="text-sm text-gray-500">{ticket.email}</span>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(ticket.status)}`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                        <Star className={`w-4 h-4 ${getPriorityColor(ticket.priority)}`} />
                      </div>
                      <h4 className={`text-lg mb-2 ${ticket.status === 'unread' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                        {ticket.subject}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{ticket.message}</p>
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <span>{new Date(ticket.date).toLocaleDateString()}</span>
                        <span className="capitalize">{ticket.category.replace('_', ' ')}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Reply className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {notifications.map((notification) => (
                <div key={notification.id} className={`border-b border-gray-100 p-6 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                          {notification.type}
                        </span>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{notification.message}</p>
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <span>{new Date(notification.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Email Templates Tab */}
      {activeTab === 'templates' && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h3>
          <p className="text-gray-600 mb-6">Manage automated email templates for various scenarios</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Order Confirmation</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Welcome Email</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Bell className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Shipping Updates</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
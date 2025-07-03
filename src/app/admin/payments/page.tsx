"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
  RefreshCw
} from 'lucide-react';

const PaymentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  const transactions = [
    {
      id: 'TXN-2024-001',
      orderId: 'ORD-2024-001',
      customer: 'Priya Sharma',
      amount: 2499,
      fee: 62,
      netAmount: 2437,
      method: 'Credit Card',
      status: 'completed',
      date: '2024-01-20',
      gateway: 'Razorpay'
    },
    {
      id: 'TXN-2024-002',
      orderId: 'ORD-2024-002',
      customer: 'Rajesh Kumar',
      amount: 3799,
      fee: 95,
      netAmount: 3704,
      method: 'UPI',
      status: 'completed',
      date: '2024-01-19',
      gateway: 'Razorpay'
    },
    {
      id: 'TXN-2024-003',
      orderId: 'ORD-2024-003',
      customer: 'Sarah Johnson',
      amount: 5999,
      fee: 150,
      netAmount: 5849,
      method: 'PayPal',
      status: 'pending',
      date: '2024-01-21',
      gateway: 'PayPal'
    }
  ];

  const payoutRequests = [
    {
      id: 'PAYOUT-001',
      artisan: 'Mohammad Rashid',
      amount: 15000,
      commission: 2250,
      netAmount: 12750,
      requestDate: '2024-01-20',
      status: 'pending',
      bankAccount: '****1234',
      orders: 12
    },
    {
      id: 'PAYOUT-002',
      artisan: 'Suresh Kumar',
      amount: 8500,
      commission: 1275,
      netAmount: 7225,
      requestDate: '2024-01-19',
      status: 'approved',
      bankAccount: '****5678',
      orders: 8
    }
  ];

  const tabs = [
    { id: 'transactions', label: 'Transactions', count: transactions.length },
    { id: 'payouts', label: 'Vendor Payouts', count: payoutRequests.length },
    { id: 'reports', label: 'Financial Reports', count: 0 },
    { id: 'gateways', label: 'Payment Gateways', count: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'approved': return 'text-blue-600 bg-blue-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalFees = transactions.reduce((sum, t) => sum + t.fee, 0);
  const pendingPayouts = payoutRequests.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.netAmount, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments & Finance</h1>
          <p className="text-gray-600">Manage transactions, payouts, and financial reports</p>
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
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <CreditCard className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Processing Fees</p>
              <p className="text-2xl font-bold text-gray-900">₹{totalFees.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Payouts</p>
              <p className="text-2xl font-bold text-gray-900">₹{pendingPayouts.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Net Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹{(totalRevenue - totalFees).toLocaleString()}</p>
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
                <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
              <option>All Methods</option>
              <option>Credit Card</option>
              <option>UPI</option>
              <option>PayPal</option>
            </select>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Date Range
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Transaction ID</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Order ID</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Customer</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Amount</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Fee</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Net Amount</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Method</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Date</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-mono text-gray-900">{transaction.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{transaction.orderId}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{transaction.customer}</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">₹{transaction.amount.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm text-red-600">₹{transaction.fee}</td>
                      <td className="py-4 px-6 text-sm font-medium text-green-600">₹{transaction.netAmount.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{transaction.method}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Payouts Tab */}
      {activeTab === 'payouts' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Payout ID</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Artisan</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Gross Amount</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Commission</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Net Amount</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Orders</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Bank Account</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Request Date</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payoutRequests.map((payout) => (
                    <tr key={payout.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-mono text-gray-900">{payout.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{payout.artisan}</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">₹{payout.amount.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm text-red-600">₹{payout.commission.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm font-medium text-green-600">₹{payout.netAmount.toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{payout.orders}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{payout.bankAccount}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(payout.status)}`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {new Date(payout.requestDate).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          {payout.status === 'pending' && (
                            <>
                              <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                                <AlertCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Reports</h3>
          <p className="text-gray-600 mb-6">Generate detailed financial reports and analytics</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Revenue Report</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Transaction Report</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Commission Report</p>
            </button>
          </div>
        </div>
      )}

      {/* Gateways Tab */}
      {activeTab === 'gateways' && (
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Gateway Configuration</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Razorpay</h4>
                  <p className="text-sm text-gray-600">Primary payment gateway for Indian customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-sm font-medium">Active</span>
                <button className="text-amber-600 hover:text-amber-700 text-sm">Configure</button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">PayPal</h4>
                  <p className="text-sm text-gray-600">International payments and PayPal users</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 text-sm font-medium">Active</span>
                <button className="text-amber-600 hover:text-amber-700 text-sm">Configure</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
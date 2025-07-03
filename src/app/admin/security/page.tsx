"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Shield, 
  AlertTriangle, 
  Eye, 
  Ban, 
  CheckCircle,
  Clock,
  User,
  Globe,
  Lock,
  Activity
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('logs');

  const loginHistory = [
    {
      id: '1',
      user: 'Admin User',
      email: 'admin@attarconnect.com',
      role: 'Super Admin',
      ip: '192.168.1.100',
      location: 'Mumbai, India',
      device: 'Chrome on Windows',
      status: 'success',
      timestamp: '2024-01-20 14:30:25'
    },
    {
      id: '2',
      user: 'Mohammad Rashid',
      email: 'mohammad@example.com',
      role: 'Artisan',
      ip: '203.192.12.45',
      location: 'Kannauj, India',
      device: 'Safari on iPhone',
      status: 'success',
      timestamp: '2024-01-20 13:15:10'
    },
    {
      id: '3',
      user: 'Unknown User',
      email: 'hacker@suspicious.com',
      role: 'N/A',
      ip: '45.123.67.89',
      location: 'Unknown',
      device: 'Chrome on Linux',
      status: 'failed',
      timestamp: '2024-01-20 12:45:33'
    }
  ];

  const accessLogs = [
    {
      id: '1',
      action: 'Product Approved',
      user: 'Admin User',
      resource: 'Product ID: PRD-001',
      ip: '192.168.1.100',
      timestamp: '2024-01-20 15:20:15',
      status: 'success'
    },
    {
      id: '2',
      action: 'User Account Created',
      user: 'System',
      resource: 'User ID: USR-456',
      ip: '127.0.0.1',
      timestamp: '2024-01-20 14:55:42',
      status: 'success'
    },
    {
      id: '3',
      action: 'Unauthorized Access Attempt',
      user: 'Unknown',
      resource: '/admin/users',
      ip: '45.123.67.89',
      timestamp: '2024-01-20 12:45:33',
      status: 'blocked'
    }
  ];

  const blockedIPs = [
    {
      id: '1',
      ip: '45.123.67.89',
      reason: 'Multiple failed login attempts',
      blockedBy: 'Auto-Security',
      blockedAt: '2024-01-20 12:45:33',
      attempts: 15,
      status: 'active'
    },
    {
      id: '2',
      ip: '198.51.100.42',
      reason: 'Suspicious activity pattern',
      blockedBy: 'Admin User',
      blockedAt: '2024-01-19 18:30:00',
      attempts: 8,
      status: 'active'
    },
    {
      id: '3',
      ip: '203.0.113.15',
      reason: 'Spam registration attempts',
      blockedBy: 'Auto-Security',
      blockedAt: '2024-01-18 09:15:22',
      attempts: 25,
      status: 'expired'
    }
  ];

  const securityAlerts = [
    {
      id: '1',
      type: 'high',
      title: 'Multiple Failed Login Attempts',
      description: 'IP 45.123.67.89 has attempted to login 15 times in the last hour',
      timestamp: '2024-01-20 12:45:33',
      resolved: false
    },
    {
      id: '2',
      type: 'medium',
      title: 'Unusual Admin Activity',
      description: 'Admin user logged in from a new location: Singapore',
      timestamp: '2024-01-20 10:30:15',
      resolved: true
    },
    {
      id: '3',
      type: 'low',
      title: 'Password Policy Violation',
      description: 'User attempted to set a weak password',
      timestamp: '2024-01-20 09:15:42',
      resolved: true
    }
  ];

  const tabs = [
    { id: 'logs', label: 'Access Logs', count: accessLogs.length },
    { id: 'logins', label: 'Login History', count: loginHistory.length },
    { id: 'blocked', label: 'Blocked IPs', count: blockedIPs.filter(ip => ip.status === 'active').length },
    { id: 'alerts', label: 'Security Alerts', count: securityAlerts.filter(alert => !alert.resolved).length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'blocked': return 'text-red-600 bg-red-100';
      case 'active': return 'text-red-600 bg-red-100';
      case 'expired': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'high': return 'border-red-200 bg-red-50 text-red-700';
      case 'medium': return 'border-yellow-200 bg-yellow-50 text-yellow-700';
      case 'low': return 'border-blue-200 bg-blue-50 text-blue-700';
      default: return 'border-gray-200 bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security & Logs</h1>
          <p className="text-gray-600">Monitor system security and access logs</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            Security Scan
          </button>
        </div>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Security Status</p>
              <p className="text-2xl font-bold text-green-600">Secure</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{securityAlerts.filter(alert => !alert.resolved).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Ban className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Blocked IPs</p>
              <p className="text-2xl font-bold text-gray-900">{blockedIPs.filter(ip => ip.status === 'active').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Today's Logins</p>
              <p className="text-2xl font-bold text-gray-900">{loginHistory.filter(log => log.status === 'success').length}</p>
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

      {/* Access Logs Tab */}
      {activeTab === 'logs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search access logs..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
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
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Action</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">User</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Resource</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">IP Address</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {accessLogs.map((log) => (
                    <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">{log.action}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{log.user}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{log.resource}</td>
                      <td className="py-4 px-6 text-sm font-mono text-gray-900">{log.ip}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(log.status)}`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{log.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Login History Tab */}
      {activeTab === 'logins' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">User</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Role</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">IP Address</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Location</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Device</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Timestamp</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loginHistory.map((login) => (
                    <tr key={login.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{login.user}</p>
                          <p className="text-sm text-gray-500">{login.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{login.role}</td>
                      <td className="py-4 px-6 text-sm font-mono text-gray-900">{login.ip}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{login.location}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{login.device}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(login.status)}`}>
                          {login.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{login.timestamp}</td>
                      <td className="py-4 px-6">
                        {login.status === 'failed' && (
                          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                            <Ban className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Blocked IPs Tab */}
      {activeTab === 'blocked' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">IP Address</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Reason</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Attempts</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Blocked By</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Blocked At</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blockedIPs.map((ip) => (
                    <tr key={ip.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-mono text-gray-900">{ip.ip}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{ip.reason}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{ip.attempts}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{ip.blockedBy}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{ip.blockedAt}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(ip.status)}`}>
                          {ip.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        {ip.status === 'active' && (
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Unblock
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Security Alerts Tab */}
      {activeTab === 'alerts' && (
        <div className="space-y-6">
          <div className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className={`border rounded-lg p-6 ${getAlertColor(alert.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 mr-3 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{alert.title}</h3>
                      <p className="text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!alert.resolved && (
                      <button className="text-sm font-medium hover:underline">
                        Resolve
                      </button>
                    )}
                    <button className="p-1 hover:bg-black/10 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityPage;
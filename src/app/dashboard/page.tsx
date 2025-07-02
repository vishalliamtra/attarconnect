"use client"

import type React from "react"
import { useState } from "react"
import { Package, Heart, User, MapPin, CreditCard, Bell, Settings, Star, Truck, RotateCcw } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const CustomerDashboard: React.FC = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("orders")

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 2499,
      items: [
        {
          name: "Pure Rose Attar",
          artisan: "Mohammad Rashid",
          image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
          quantity: 1,
          price: 2499,
        },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "shipped",
      total: 3799,
      items: [
        {
          name: "Mysore Sandalwood Oil",
          artisan: "Suresh Kumar",
          image: "https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400",
          quantity: 1,
          price: 3799,
        },
      ],
    },
  ]

  const wishlist = [
    {
      id: "1",
      name: "Jasmine Night Bloom",
      artisan: "Priya Devi",
      price: 1899,
      originalPrice: 2199,
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: true,
    },
    {
      id: "2",
      name: "Traditional Oud Collection",
      artisan: "Fatima Begum",
      price: 5999,
      originalPrice: 6999,
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: false,
    },
  ]

  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "Priya Sharma",
      address: "123 MG Road, Bangalore, Karnataka 560001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: "2",
      type: "Office",
      name: "Priya Sharma",
      address: "456 Tech Park, Electronic City, Bangalore, Karnataka 560100",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600 bg-green-100"
      case "shipped":
        return "text-blue-600 bg-blue-100"
      case "processing":
        return "text-yellow-600 bg-yellow-100"
      case "cancelled":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const sidebarItems = [
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  // Show loading state until hydration is complete
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <img
              src={
                user?.avatar ||
                "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt={user?.name || "User"}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name || "Guest"}!</h1>
              <p className="text-gray-600">Manage your orders and account settings</p>
            </div>
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
                      activeTab === item.id ? "bg-amber-100 text-amber-700" : "text-gray-700 hover:bg-gray-100"
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
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">My Orders</h2>

                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                            <p className="text-sm text-gray-600">
                              Placed on {new Date(order.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)}`}
                            >
                              {order.status}
                            </span>
                            <p className="text-lg font-bold text-gray-900 mt-1">₹{order.total.toLocaleString()}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-600">by {item.artisan}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                              </div>
                              <p className="font-bold text-gray-900">₹{item.price.toLocaleString()}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-200">
                          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            <Truck className="w-4 h-4 mr-2" />
                            Track Order
                          </button>
                          {order.status === "delivered" && (
                            <>
                              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Return
                              </button>
                              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                <Star className="w-4 h-4 mr-2" />
                                Review
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">My Wishlist</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                          <Heart className="w-4 h-4 text-red-500 fill-current" />
                        </button>
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-medium">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {item.artisan}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <button
                          disabled={!item.inStock}
                          className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                            item.inStock
                              ? "bg-amber-600 text-white hover:bg-amber-700"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Saved Addresses</h2>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-gray-900">{address.type}</span>
                            {address.isDefault && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Default</span>
                            )}
                          </div>
                          <p className="font-medium text-gray-900">{address.name}</p>
                          <p className="text-gray-600">{address.address}</p>
                          <p className="text-gray-600">{address.phone}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-amber-600 hover:text-amber-700 text-sm">Edit</button>
                          <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue={user?.name?.split(" ")[0] || ""}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue={user?.name?.split(" ")[1] || ""}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email || ""}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 12345 67890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>

                  <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* Other tabs */}
            {activeTab === "payments" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h2>
                <p className="text-gray-600">Manage your saved payment methods here.</p>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
                <p className="text-gray-600">Configure your notification preferences.</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <p className="text-gray-600">Manage your account settings and preferences.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard

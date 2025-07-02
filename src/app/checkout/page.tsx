"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Address
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    
    // UPI
    upiId: '',
    
    // Additional
    saveAddress: false,
    giftWrap: false,
    specialInstructions: ''
  });

  const shippingCost = totalPrice > 999 ? 0 : 99;
  const giftWrapCost = formData.giftWrap ? 50 : 0;
  const finalTotal = totalPrice + shippingCost + giftWrapCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect to success page
    clearCart();
    router.push('/order-success');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <Link
              href="/cart"
              className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </div>
          
          {/* Progress Steps */}
          <div className="mt-6">
            <div className="flex items-center">
              {[1, 2, 3].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step >= stepNumber ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      step > stepNumber ? 'bg-amber-600' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={step >= 1 ? 'text-amber-600' : 'text-gray-500'}>Shipping</span>
              <span className={step >= 2 ? 'text-amber-600' : 'text-gray-500'}>Payment</span>
              <span className={step >= 3 ? 'text-amber-600' : 'text-gray-500'}>Review</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Street address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveAddress"
                        checked={formData.saveAddress}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-amber-600 mr-3"
                      />
                      <span className="text-sm text-gray-700">Save this address for future orders</span>
                    </label>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>
                  
                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'card' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center">
                          <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="font-medium">Credit/Debit Card</span>
                        </div>
                      </label>
                      
                      <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'upi' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-orange-500 rounded mr-3"></div>
                          <span className="font-medium">UPI</span>
                        </div>
                      </label>
                      
                      <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center">
                          <Truck className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Card Details */}
                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            required
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            required
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="nameOnCard"
                          required
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* UPI Details */}
                  {formData.paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                      <input
                        type="text"
                        name="upiId"
                        required
                        value={formData.upiId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="yourname@upi"
                      />
                    </div>
                  )}
                  
                  {/* COD Message */}
                  {formData.paymentMethod === 'cod' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700">
                        You will pay ₹{finalTotal.toLocaleString()} when your order is delivered.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Order Review */}
              {step === 3 && (
                <div className="space-y-6">
                  {/* Order Items */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Order Review</h2>
                    
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">by {item.artisan}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shipping & Payment Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Shipping Address
                      </h3>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} {formData.pincode}</p>
                        <p className="flex items-center mt-2">
                          <Phone className="w-4 h-4 mr-1" />
                          {formData.phone}
                        </p>
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {formData.email}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Payment Method
                      </h3>
                      <div className="text-sm text-gray-700">
                        {formData.paymentMethod === 'card' && (
                          <p>Credit/Debit Card ending in {formData.cardNumber.slice(-4)}</p>
                        )}
                        {formData.paymentMethod === 'upi' && (
                          <p>UPI: {formData.upiId}</p>
                        )}
                        {formData.paymentMethod === 'cod' && (
                          <p>Cash on Delivery</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shippingCost}`
                    )}
                  </span>
                </div>
                
                {formData.giftWrap && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gift Wrap</span>
                    <span className="font-medium">₹{giftWrapCost}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="giftWrap"
                    checked={formData.giftWrap}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-amber-600 mr-3"
                  />
                  <span className="text-sm text-gray-700">Add gift wrap (+₹50)</span>
                </label>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
                    placeholder="Any special delivery instructions..."
                  />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-green-500 mr-3" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 text-blue-500 mr-3" />
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span>Authentic products guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
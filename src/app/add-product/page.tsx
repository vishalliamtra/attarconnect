"use client"
import React, { useState } from 'react';
import { ArrowLeft, Upload, Plus, Minus, Save, Eye, Calendar, Sparkles, Brain, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const AddProductPage: React.FC = () => {
  const [formData, setFormData] = useState({
    // Basic Details
    productName: '',
    productType: '',
    shortDescription: '',
    detailedDescription: '',
    
    // Specifications
    ingredients: [''],
    extractionMethod: '',
    volumes: [{ size: '', price: '' }],
    alcoholFree: true,
    shelfLife: '',
    packagingType: '',
    fragranceNotes: { top: '', middle: '', base: '' },
    genderTarget: '',
    
    // Images & Media
    primaryImage: null,
    galleryImages: [],
    productVideo: '',
    
    // Pricing & Inventory
    regularPrice: '',
    salePrice: '',
    stockQuantity: '',
    minOrderQuantity: '',
    skuCode: '',
    taxCategory: '',
    
    // Shipping
    readyToShipIn: '',
    shipsFrom: 'Kannauj, Uttar Pradesh',
    deliveryOptions: ['Local', 'National', 'International'],
    shippingWeight: '',
    
    // SEO & Tags
    searchTags: [''],
    metaTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    
    // AI Settings
    autoDescription: false,
    keywordSuggestions: false,
    categoryRecommendation: false,
    stockAlert: false,
    demandForecast: false
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [showAIPanel, setShowAIPanel] = useState(false);

  const productTypes = [
    'Attar',
    'Essential Oil',
    'Blended Perfume',
    'Gift Set',
    'Perfumed Soap',
    'Incense',
    'Other'
  ];

  const extractionMethods = [
    'Steam Distillation',
    'Cold Press',
    'Traditional Deg-Bhapka',
    'Hydro-Distillation',
    'Enfleurage',
    'Solvent Extraction'
  ];

  const taxCategories = [
    'None',
    '5% GST',
    '12% GST',
    '18% GST',
    '28% GST'
  ];

  const deliveryOptionsList = [
    'Local',
    'National',
    'International'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    const updatedArray = [...(formData[field as keyof typeof formData] as string[])];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      [field]: updatedArray
    });
  };

  const addArrayItem = (field: string) => {
    setFormData({
      ...formData,
      [field]: [...(formData[field as keyof typeof formData] as string[]), '']
    });
  };

  const removeArrayItem = (field: string, index: number) => {
    const updatedArray = (formData[field as keyof typeof formData] as string[]).filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [field]: updatedArray
    });
  };

  const handleVolumeChange = (index: number, field: 'size' | 'price', value: string) => {
    const updatedVolumes = [...formData.volumes];
    updatedVolumes[index] = { ...updatedVolumes[index], [field]: value };
    setFormData({
      ...formData,
      volumes: updatedVolumes
    });
  };

  const addVolume = () => {
    setFormData({
      ...formData,
      volumes: [...formData.volumes, { size: '', price: '' }]
    });
  };

  const removeVolume = (index: number) => {
    const updatedVolumes = formData.volumes.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      volumes: updatedVolumes
    });
  };

  const handleSubmit = (action: 'draft' | 'preview' | 'publish' | 'schedule') => {
    console.log('Submitting product:', action, formData);
    // Handle form submission based on action
  };

  const tabs = [
    { id: 'basic', label: 'Basic Details', icon: '📝' },
    { id: 'specifications', label: 'Specifications', icon: '🧪' },
    { id: 'media', label: 'Images & Media', icon: '📸' },
    { id: 'pricing', label: 'Pricing & Inventory', icon: '💰' },
    { id: 'shipping', label: 'Shipping', icon: '🚚' },
    { id: 'seo', label: 'SEO & Tags', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/artisan-dashboard"
                className="flex items-center text-amber-600 hover:text-amber-700 font-medium mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
                <p className="text-gray-600">Create a new product listing for your attar or perfume</p>
              </div>
            </div>
            <button
              onClick={() => setShowAIPanel(!showAIPanel)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Brain className="w-4 h-4 mr-2" />
              AI Assistant
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Product Sections</h3>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Basic Details Tab */}
              {activeTab === 'basic' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Basic Product Details</h2>
                    <p className="text-gray-600">This section captures the essential information about the attar or perfume product.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                      <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="e.g., Ruh Gulab – Rose Attar"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Choose product type</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Description *</label>
                    <input
                      type="text"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="A quick summary of the product (maximum 250 characters)"
                      maxLength={250}
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.shortDescription.length}/250 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
                    <textarea
                      name="detailedDescription"
                      value={formData.detailedDescription}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Provide an in-depth description of the product, its background, benefits, and how to use it..."
                    />
                  </div>
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Product Specifications</h2>
                    <p className="text-gray-600">Help buyers understand what's in the product and how it's made.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients *</label>
                    {formData.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={ingredient}
                          onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., sandalwood oil, rose petals"
                        />
                        {formData.ingredients.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('ingredients', index)}
                            className="p-2 text-red-500 hover:text-red-700"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem('ingredients')}
                      className="flex items-center text-amber-600 hover:text-amber-700 text-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Ingredient
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Extraction Method *</label>
                      <select
                        name="extractionMethod"
                        value={formData.extractionMethod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Select method</option>
                        {extractionMethods.map((method) => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender Target</label>
                      <select
                        name="genderTarget"
                        value={formData.genderTarget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Select target</option>
                        <option value="Unisex">Unisex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Volume & Pricing Options *</label>
                    {formData.volumes.map((volume, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={volume.size}
                          onChange={(e) => handleVolumeChange(index, 'size', e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., 3ml, 6ml, 12ml"
                        />
                        <input
                          type="number"
                          value={volume.price}
                          onChange={(e) => handleVolumeChange(index, 'price', e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Price in ₹"
                        />
                        {formData.volumes.length > 1 && (
                          <button
                            onClick={() => removeVolume(index)}
                            className="p-2 text-red-500 hover:text-red-700"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addVolume}
                      className="flex items-center text-amber-600 hover:text-amber-700 text-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Volume Option
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shelf Life</label>
                      <input
                        type="text"
                        name="shelfLife"
                        value={formData.shelfLife}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="e.g., 36 months"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Packaging Type</label>
                      <input
                        type="text"
                        name="packagingType"
                        value={formData.packagingType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="e.g., glass bottle, wooden box"
                      />
                    </div>

                    <div className="flex items-center">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="alcoholFree"
                          checked={formData.alcoholFree}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-amber-600 mr-3"
                        />
                        <span className="text-sm text-gray-700">Alcohol-Free</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fragrance Notes</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Top Notes</label>
                        <input
                          type="text"
                          value={formData.fragranceNotes.top}
                          onChange={(e) => setFormData({
                            ...formData,
                            fragranceNotes: { ...formData.fragranceNotes, top: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., citrus, bergamot"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Middle Notes</label>
                        <input
                          type="text"
                          value={formData.fragranceNotes.middle}
                          onChange={(e) => setFormData({
                            ...formData,
                            fragranceNotes: { ...formData.fragranceNotes, middle: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., rose, jasmine"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Base Notes</label>
                        <input
                          type="text"
                          value={formData.fragranceNotes.base}
                          onChange={(e) => setFormData({
                            ...formData,
                            fragranceNotes: { ...formData.fragranceNotes, base: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., sandalwood, musk"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Images & Media Tab */}
              {activeTab === 'media' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Images & Media</h2>
                    <p className="text-gray-600">Visuals help customers trust the product and understand its presentation.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Product Image *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-500 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload the main image of the product</p>
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                        Choose File
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-500 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload multiple supporting images: bottle, packaging, application</p>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        Choose Files
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Video (Optional)</label>
                    <input
                      type="url"
                      name="productVideo"
                      value={formData.productVideo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Link or upload a short promotional video (up to 1 minute)"
                    />
                  </div>
                </div>
              )}

              {/* Pricing & Inventory Tab */}
              {activeTab === 'pricing' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Pricing & Inventory</h2>
                    <p className="text-gray-600">Set your product's price and keep track of stock.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price *</label>
                      <input
                        type="number"
                        name="regularPrice"
                        value={formData.regularPrice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter the main selling price"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price (Optional)</label>
                      <input
                        type="number"
                        name="salePrice"
                        value={formData.salePrice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Add a discounted price"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity *</label>
                      <input
                        type="number"
                        name="stockQuantity"
                        value={formData.stockQuantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Total available inventory"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Min Order Quantity</label>
                      <input
                        type="number"
                        name="minOrderQuantity"
                        value={formData.minOrderQuantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="For B2B buyers"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SKU Code</label>
                      <input
                        type="text"
                        name="skuCode"
                        value={formData.skuCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Internal product code"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax Category</label>
                    <select
                      name="taxCategory"
                      value={formData.taxCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select applicable GST rate</option>
                      {taxCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Shipping Tab */}
              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Shipping & Availability</h2>
                    <p className="text-gray-600">Define where and how fast the product can be delivered.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ready to Ship In</label>
                      <select
                        name="readyToShipIn"
                        value={formData.readyToShipIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Choose dispatch time</option>
                        <option value="1 day">1 day</option>
                        <option value="2 days">2 days</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ships From</label>
                      <input
                        type="text"
                        name="shipsFrom"
                        value={formData.shipsFrom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Options</label>
                    <div className="space-y-2">
                      {deliveryOptionsList.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            value={option}
                            checked={formData.deliveryOptions.includes(option)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  deliveryOptions: [...formData.deliveryOptions, option]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  deliveryOptions: formData.deliveryOptions.filter(o => o !== option)
                                });
                              }
                            }}
                            className="rounded border-gray-300 text-amber-600 mr-3"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Weight</label>
                    <input
                      type="text"
                      name="shippingWeight"
                      value={formData.shippingWeight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="e.g., 250g"
                    />
                  </div>
                </div>
              )}

              {/* SEO & Tags Tab */}
              {activeTab === 'seo' && (
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">SEO & Tags</h2>
                    <p className="text-gray-600">Improve discoverability in search engines and on the site.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Tags</label>
                    {formData.searchTags.map((tag, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) => handleArrayChange('searchTags', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="e.g., attar, natural perfume, sandalwood"
                        />
                        {formData.searchTags.length > 1 && (
                          <button
                            onClick={() => removeArrayItem('searchTags', index)}
                            className="p-2 text-red-500 hover:text-red-700"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem('searchTags')}
                      className="flex items-center text-amber-600 hover:text-amber-700 text-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Tag
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title (Optional)</label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Title for Google/Search engines"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description (Optional)</label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Summary shown in search results"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Canonical URL (Optional)</label>
                    <input
                      type="url"
                      name="canonicalUrl"
                      value={formData.canonicalUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Reference URL if product is listed elsewhere"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleSubmit('draft')}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save as Draft
                  </button>
                  <button
                    onClick={() => handleSubmit('preview')}
                    className="flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Product
                  </button>
                  <button
                    onClick={() => handleSubmit('publish')}
                    className="flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Publish Now
                  </button>
                  <button
                    onClick={() => handleSubmit('schedule')}
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Publishing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Panel */}
        {showAIPanel && (
          <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  AI Assistance
                </h3>
                <button
                  onClick={() => setShowAIPanel(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Smart Panel
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">Use AI tools built into the platform to optimize your product listing.</p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors text-sm">
                  🤖 Auto-generate Description
                </button>

                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 rounded-lg hover:from-green-600 hover:to-teal-700 transition-colors text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 inline" />
                  Keyword Suggestions
                </button>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-colors text-sm">
                  📂 Category Recommendation
                </button>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors text-sm">
                  🔔 Stock Alert Setup
                </button>

                <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-3 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-colors text-sm">
                  📈 Demand Forecast
                </button>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-amber-900 text-sm">AI Tip</h5>
                      <p className="text-xs text-amber-700 mt-1">
                        Products with detailed descriptions and multiple images get 3x more views!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductPage;
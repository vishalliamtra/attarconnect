import React from 'react';
import { Building, Package, Truck, Award, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const B2BPage: React.FC = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Bulk Pricing',
      description: 'Competitive wholesale rates with volume discounts starting from 50 units'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Priority shipping with dedicated logistics for B2B orders'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Certified authentic products with quality guarantees'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 business support with dedicated account managers'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Worldwide delivery with customs documentation support'
    },
    {
      icon: Building,
      title: 'Custom Branding',
      description: 'Private labeling and custom packaging options available'
    }
  ];

  const services = [
    {
      title: 'Corporate Gifting',
      description: 'Premium gift sets for corporate events, festivals, and employee appreciation',
      features: ['Custom packaging', 'Bulk discounts', 'Gift wrapping', 'Corporate branding'],
      minOrder: '25 units',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'White Labeling',
      description: 'Create your own perfume brand with our authentic Kannauj fragrances',
      features: ['Custom labels', 'Brand design', 'MOQ flexibility', 'Marketing support'],
      minOrder: '100 units',
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Retail Partnership',
      description: 'Stock authentic Kannauj perfumes in your retail stores with full support',
      features: ['Display materials', 'Training support', 'Return policy', 'Promotional materials'],
      minOrder: '50 units',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      company: 'Luxury Hotels Group',
      name: 'Rajesh Malhotra',
      role: 'Procurement Manager',
      content: 'We\'ve been sourcing lobby fragrances from Kannauj artisans for 2 years. The quality is exceptional and our guests love the authentic Indian scents.',
      logo: '🏨'
    },
    {
      company: 'Ayurvedic Wellness Chain',
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      content: 'The therapeutic-grade essential oils from Kannauj have become a cornerstone of our wellness treatments. Authentic, pure, and effective.',
      logo: '🌿'
    },
    {
      company: 'International Spice Co.',
      name: 'Ahmed Hassan',
      role: 'Export Director',
      content: 'Kannauj Perfumes has been our reliable partner for Middle Eastern markets. Their understanding of oud and traditional fragrances is unmatched.',
      logo: '🌍'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">B2B Portal</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with authentic Kannauj artisans for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Request Quote
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our B2B Partnership?</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business fragrance needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our B2B Services</h2>
            <p className="text-xl text-gray-600">Tailored solutions for every business requirement</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">MOQ:</span> {service.minOrder}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                      Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Request Form */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">Tell us about your requirements and we'll get back to you within 24 hours</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Industry</option>
                    <option>Hotels & Hospitality</option>
                    <option>Retail & E-commerce</option>
                    <option>Wellness & Spa</option>
                    <option>Corporate Gifting</option>
                    <option>Export & Import</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Quantity</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select Quantity Range</option>
                    <option>25 - 100 units</option>
                    <option>100 - 500 units</option>
                    <option>500 - 1000 units</option>
                    <option>1000+ units</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Attars', 'Essential Oils', 'Perfumed Soaps', 'Incense', 'Gift Sets', 'Custom Blends'].map((product) => (
                    <label key={product} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">{product}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your specific requirements, timeline, budget, or any special requests..."
                />
              </div>
              
              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Businesses</h2>
            <p className="text-xl text-gray-600">See what our B2B partners have to say</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.company}</h3>
                    <p className="text-sm text-gray-600">{testimonial.name}, {testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">B2B Sales Team</h3>
              <p className="text-blue-100 mb-2">sales@kannaujperfumes.com</p>
              <p className="text-blue-100">+91 12345 67890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Export Inquiries</h3>
              <p className="text-blue-100 mb-2">export@kannaujperfumes.com</p>
              <p className="text-blue-100">+91 12345 67891</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Custom Orders</h3>
              <p className="text-blue-100 mb-2">custom@kannaujperfumes.com</p>
              <p className="text-blue-100">+91 12345 67892</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BPage;
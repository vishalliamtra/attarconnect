import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Users, Package, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@kannaujperfumes.com', 'support@kannaujperfumes.com'],
      description: 'Get in touch for general inquiries or customer support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 12345 67890', '+91 12345 67891'],
      description: 'Speak directly with our team for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Kannauj, Uttar Pradesh', 'India - 209725'],
      description: 'Our headquarters in the heart of India\'s perfume capital'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      description: 'Indian Standard Time (IST)'
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Customer Support',
      email: 'support@kannaujperfumes.com',
      phone: '+91 12345 67890',
      description: 'For orders, returns, and general customer service'
    },
    {
      icon: Package,
      title: 'B2B Sales',
      email: 'sales@kannaujperfumes.com',
      phone: '+91 12345 67891',
      description: 'For wholesale, bulk orders, and business partnerships'
    },
    {
      icon: Globe,
      title: 'International',
      email: 'international@kannaujperfumes.com',
      phone: '+91 12345 67892',
      description: 'For international shipping and export inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              We're here to help you discover the perfect fragrance or support your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-indigo-100">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">45+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.5%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                ))}
                <p className="text-gray-600 text-sm mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Departments */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Select a subject</option>
                      <option>Product Inquiry</option>
                      <option>Order Support</option>
                      <option>B2B Partnership</option>
                      <option>Shipping Question</option>
                      <option>Return/Exchange</option>
                      <option>Artisan Information</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Please tell us how we can help you..."
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 mr-3" />
                    <span className="text-sm text-gray-600">I agree to receive marketing communications and updates about new products and offers.</span>
                  </div>
                  
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Departments */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Departments</h3>
                
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <dept.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{dept.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-700">
                              <Mail className="w-4 h-4 inline mr-1" />
                              {dept.email}
                            </p>
                            <p className="text-sm text-gray-700">
                              <Phone className="w-4 h-4 inline mr-1" />
                              {dept.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Shipping & Delivery</a>
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Returns & Exchanges</a>
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Size Guide</a>
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Care Instructions</a>
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Wholesale Inquiry</a>
                  <a href="#" className="block text-indigo-600 hover:text-indigo-700 text-sm">Become an Artisan</a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">All times in Indian Standard Time (IST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Kannauj</h2>
            <p className="text-xl text-gray-600">Experience the perfume capital of India</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Heart of Indian Perfumery</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kannauj, located in Uttar Pradesh, India, has been the center of Indian perfume-making for over 1000 years. Our facilities are located in the traditional perfume district, where you can witness the ancient art of distillation firsthand.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Perfume Market, Kannauj, Uttar Pradesh 209725</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Factory tours available by appointment</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700">Interactive Map Coming Soon</p>
                  <p className="text-gray-600">Find us in the heart of Kannauj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
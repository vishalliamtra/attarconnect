"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck, Users, Globe, Heart, Droplets, Flame, Flower, Leaf, Crown, Sparkles, Clock, MapPin, CheckCircle, Brain, TrendingUp, Beaker, Bell, MessageCircle, BarChart3 } from 'lucide-react';

const HomePage: React.FC = () => {
  const categories = [
    { 
      name: 'Attars (Ittar)', 
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: '120+',
      icon: Droplets,
      description: 'Traditional alcohol-free perfumes'
    },
    { 
      name: 'Essential Oils', 
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: '85+',
      icon: Leaf,
      description: 'Pure botanical extracts'
    },
    { 
      name: 'Perfumed Soaps', 
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: '45+',
      icon: Flower,
      description: 'Handcrafted aromatic soaps'
    },
    { 
      name: 'Incense & Dhoop', 
      image: 'https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: '60+',
      icon: Flame,
      description: 'Sacred temple fragrances'
    },
    { 
      name: 'Gift Sets', 
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: '25+',
      icon: Crown,
      description: 'Curated fragrance collections'
    },
    { 
      name: 'Bulk/Wholesale', 
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400', 
      products: 'Custom',
      icon: Users,
      description: 'Business & export orders'
    },
  ];

  const featuredVendors = [
    {
      name: 'Mohammad Rashid',
      years: '25+ Years',
      speciality: 'Rose & Jasmine Attars',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      rating: 4.9,
      location: 'Central Kannauj',
      heritage: '3rd Generation'
    },
    {
      name: 'Suresh Kumar',
      years: '30+ Years',
      speciality: 'Sandalwood Oils',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      rating: 4.8,
      location: 'Old Market',
      heritage: '4th Generation'
    },
    {
      name: 'Fatima Begum',
      years: '18+ Years',
      speciality: 'Traditional Oud',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      rating: 4.9,
      location: 'Perfume Street',
      heritage: '2nd Generation'
    },
  ];

  const traditionalProcess = [
    {
      step: '1',
      title: 'Flower Collection',
      description: 'Fresh flowers collected at dawn when fragrance is strongest',
      icon: Flower,
      time: 'Early Morning'
    },
    {
      step: '2',
      title: 'Deg-Bhapka Setup',
      description: 'Traditional copper vessels arranged for steam distillation',
      icon: Flame,
      time: '2-3 Hours'
    },
    {
      step: '3',
      title: 'Slow Distillation',
      description: 'Gentle heating extracts precious aromatic compounds',
      icon: Droplets,
      time: '12-15 Hours'
    },
    {
      step: '4',
      title: 'Aging & Maturation',
      description: 'Attars aged in traditional leather bottles for depth',
      icon: Clock,
      time: '6 Months+'
    }
  ];

  const heritageStats = [
    { number: '1000+', label: 'Years of Tradition', icon: Crown },
    { number: '150+', label: 'Master Artisans', icon: Users },
    { number: '45', label: 'Countries Served', icon: Globe },
    { number: '500+', label: 'Authentic Products', icon: Sparkles }
  ];

  const aiFeatures = [
    {
      icon: TrendingUp,
      title: 'Live Market Insights',
      description: 'Discover what types of attars are trending globally, including demand from regions like Dubai, Europe, and India.',
      emoji: '📈'
    },
    {
      icon: Beaker,
      title: 'Product Creation Suggestions',
      description: 'Learn new methods and ingredient blends to craft unique, high-quality attars using modern distillation and natural processes.',
      emoji: '🧪'
    },
    {
      icon: Shield,
      title: 'Quality Management Tips',
      description: 'Maintain consistency and purity in every batch with AI-led best practices.',
      emoji: '🛠️'
    },
    {
      icon: Bell,
      title: 'Smart Stock Alerts',
      description: 'Get notified when your product inventory is running low on the platform so you never miss a sale.',
      emoji: '🔔'
    },
    {
      icon: BarChart3,
      title: 'Order Prediction',
      description: 'Based on past trends, the AI predicts upcoming demand to help you plan production efficiently.',
      emoji: '🔮'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat Assistance',
      description: 'Artisans can directly chat with the AI to ask questions, get feedback, or understand how to improve their offerings.',
      emoji: '💬'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Perfume Enthusiast',
      content: 'The authenticity is unmatched. Each attar tells a story of generations of craftsmanship.',
      rating: 5,
      location: 'Mumbai'
    },
    {
      name: 'Heritage Hotels Group',
      role: 'B2B Client',
      content: 'AttarConnect has transformed our guest experience with authentic Indian fragrances.',
      rating: 5,
      location: 'Rajasthan'
    },
    {
      name: 'Sarah Johnson',
      role: 'International Customer',
      content: 'Discovered the magic of Indian perfumery. The quality and packaging are exceptional.',
      rating: 5,
      location: 'London, UK'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Traditional Indian Style */}
      <section className="relative bg-gradient-to-br from-amber-50 via-saffron-50 to-rose-50 py-20 overflow-hidden">
        {/* Traditional Pattern Overlay */}
        <div className="absolute inset-0 bg-traditional-pattern opacity-10"></div>
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">Direct from Kannauj, India</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up font-serif">
                <span className="text-amber-600 block">Traditional Attars</span>
                <span className="text-gray-800">from Master Artisans</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl animate-fade-in-up font-hindi">
                अत्तर की पारंपरिक कला
              </p>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fade-in-up leading-relaxed">
                Connect directly with Kannauj's master perfumers. Experience 1000+ years of authentic Indian fragrance heritage, crafted using traditional deg-bhapka methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <Link 
                  href="/shop" 
                  className="bg-gradient-to-r from-amber-600 to-saffron-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-saffron-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Droplets className="w-5 h-5 mr-2" />
                  Explore Attars
                </Link>
                <Link 
                  href="/artisans" 
                  className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Artisans
                </Link>
              </div>
            </div>

            {/* Right Content - Artisan at Work */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Traditional distillation process"
                    className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
                  />
                  <img 
                    src="https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Artisan crafting attar"
                    className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Traditional perfume bottles"
                    className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
                  />
                  <img 
                    src="https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Kannauj workshop"
                    className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-saffron-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Stats */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-saffron-600 to-sandalwood-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-traditional-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {heritageStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 font-serif">{stat.number}</div>
                <div className="text-lg text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Business Partner Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-saffron-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-saffron-500 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Your Smart Business
              <span className="text-amber-600 block">Partner</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              This platform is more than just a marketplace — it's your smart business partner.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Our AI-powered system helps Kannauj's artisans thrive by offering:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <p className="text-lg font-medium text-gray-900">
                With these tools, your perfume business becomes faster, smarter, and more connected to customers around the world.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-saffron-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-saffron-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              <Brain className="w-5 h-5 mr-2" />
              देखें AI कैसे काम करता है
            </button>
            <button className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              बात करें AI साथी से
            </button>
          </div>
        </div>
      </section>

      {/* Traditional Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              The Sacred Art of 
              <span className="text-amber-600 block">Attar Making</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the ancient deg-bhapka method that has been preserved for over 1000 years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traditionalProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-saffron-100 rounded-full flex items-center justify-center mx-auto group-hover:from-amber-200 group-hover:to-saffron-200 transition-all duration-300 shadow-lg">
                    <process.icon className="w-10 h-10 text-amber-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">{process.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{process.description}</p>
                <div className="inline-flex items-center bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  {process.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Authentic Indian
              <span className="text-amber-600 block">Fragrance Collection</span>
            </h2>
            <p className="text-xl text-gray-600">Discover our curated selection of traditional perfumes and aromatics</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 font-medium">{category.products} products</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Master Artisans of
              <span className="text-amber-600 block">Kannauj</span>
            </h2>
            <p className="text-xl text-gray-600">Meet the guardians of traditional perfume-making heritage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVendors.map((vendor, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 border border-amber-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                    />
                    {vendor.verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">{vendor.name}</h3>
                  <p className="text-amber-600 font-medium mb-1">{vendor.heritage}</p>
                  <p className="text-gray-600 text-sm mb-4">{vendor.location}</p>
                  
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-2">Specializes in</p>
                    <p className="font-medium text-gray-900">{vendor.speciality}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">{vendor.years}</span>
                  </div>
                  
                  <Link 
                    href="/artisans" 
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    View Profile <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Stories from Our
              <span className="text-amber-600 block">Community</span>
            </h2>
            <p className="text-xl text-gray-600">Trusted by fragrance lovers and businesses worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-amber-600 mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-saffron-600 to-sandalwood-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-traditional-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Join the AttarConnect
            <span className="block">Community</span>
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Whether you're seeking authentic fragrances or want to share your craft with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/shop" 
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Start Shopping
            </Link>
            <Link 
              href="/b2b" 
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Become an Artisan
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹999</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authenticity Guaranteed</h3>
              <p className="text-sm text-gray-600">100% verified artisans</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Worldwide Delivery</h3>
              <p className="text-sm text-gray-600">Global shipping available</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Heritage Preservation</h3>
              <p className="text-sm text-gray-600">Supporting traditional crafts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
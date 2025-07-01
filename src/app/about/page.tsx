import React from 'react';
import { Heart, Award, Users, Globe, Target, Eye, Shield, Handshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We preserve traditional methods and ensure every product represents genuine Kannauj craftsmanship'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Rigorous quality standards and verification processes ensure only the finest products reach our customers'
    },
    {
      icon: Handshake,
      title: 'Fair Trade',
      description: 'We provide fair compensation to artisans and support sustainable livelihoods in the perfume community'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting Kannauj artisans with perfume lovers worldwide while preserving local traditions'
    }
  ];

  const team = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Born in Kannauj, Arjun grew up surrounded by the fragrance industry. His vision is to bring authentic Kannauj perfumes to the global market while supporting local artisans.'
    },
    {
      name: 'Dr. Priya Verma',
      role: 'Head of Quality & Authenticity',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Chemistry with 15 years of experience in fragrance analysis. Priya ensures every product meets our strict authenticity and quality standards.'
    },
    {
      name: 'Rashid Ahmed',
      role: 'Artisan Relations Director',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Third-generation perfumer from Kannauj. Rashid bridges traditional craftsmanship with modern business practices, supporting artisan communities.'
    },
    {
      name: 'Sarah Johnson',
      role: 'International Business Manager',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'International trade specialist with expertise in fragrance exports. Sarah manages our global partnerships and ensures smooth international operations.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Started with 5 artisan families in Kannauj'
    },
    {
      year: '2021',
      title: 'First International Order',
      description: 'Shipped our first orders to 12 countries'
    },
    {
      year: '2022',
      title: 'Artisan Network Growth',
      description: 'Expanded to support 50+ artisan families'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Won "Best Traditional Fragrance Platform" award'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launched eco-friendly packaging and fair trade certification'
    }
  ];

  const stats = [
    { number: '150+', label: 'Verified Artisans' },
    { number: '45', label: 'Countries Served' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Unique Products' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-sandalwood-50 to-rose-50 py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About 
              <span className="text-amber-600 block">Kannauj Perfumes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Bridging 1000 years of tradition with modern commerce to bring authentic Indian fragrances to the world
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Target className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To preserve and promote the ancient art of Kannauj perfumery by creating a sustainable ecosystem that supports traditional artisans while making authentic Indian fragrances accessible to perfume lovers worldwide. We believe in fair trade, quality craftsmanship, and cultural preservation.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Eye className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the world's most trusted platform for authentic Indian perfumes, where every artisan thrives, every customer discovers their perfect fragrance, and the rich heritage of Kannauj perfumery continues to flourish for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kannauj Perfumes was born from a simple observation: the world's finest perfume artisans were creating masterpieces in small workshops in Kannauj, but their incredible work remained largely unknown outside India.
                </p>
                <p>
                  Founded in 2020 by Arjun Sharma, who grew up in a family of perfume traders in Kannauj, our platform was created to bridge this gap. We started by partnering with just five artisan families, focusing on quality over quantity and authenticity over profit.
                </p>
                <p>
                  Today, we're proud to support over 150 verified artisans, ship to 45 countries, and have introduced thousands of people to the magic of authentic Indian perfumery. But our core mission remains the same: to honor tradition while embracing innovation.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Traditional distillation"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Artisan at work"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Perfume bottles"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Traditional workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Kannauj Perfumes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-gradient-to-r from-amber-600 to-sandalwood-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Support Kannauj Craftsmen */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Support Kannauj Craftsmen?</h2>
            <p className="text-xl text-gray-600">Your purchase makes a real difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preserve Heritage</h3>
              <p className="text-gray-600">Help maintain traditional skills and cultural knowledge for future generations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair Trade</h3>
              <p className="text-gray-600">Ensure artisans receive fair compensation and work in dignified conditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">Support sustainable communities and promote cultural exchange worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
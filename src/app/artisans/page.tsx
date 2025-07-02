import React from 'react';
import Link from 'next/link';
import { MapPin, Star, Award, Clock, MessageCircle, Phone } from 'lucide-react';

const ArtisansPage: React.FC = () => {
  const artisans = [
    {
      id: 1,
      name: 'Mohammad Rashid',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Central Kannauj',
      years: 25,
      speciality: 'Rose & Jasmine Attars',
      rating: 4.9,
      reviews: 189,
      verified: true,
      description: 'Third-generation attar maker specializing in traditional rose and jasmine distillation using the ancient deg-bhapka method.',
      techniques: ['Deg-Bhapka', 'Steam Distillation', 'Cold Pressing'],
      products: 47,
      languages: ['Hindi', 'Urdu', 'English']
    },
    {
      id: 2,
      name: 'Suresh Kumar Verma',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Old Kannauj Market',
      years: 30,
      speciality: 'Sandalwood & Oud',
      rating: 4.8,
      reviews: 156,
      verified: true,
      description: 'Master craftsman known for premium sandalwood oils and rare oud collections, sourced directly from Karnataka and Assam.',
      techniques: ['Hydro-Distillation', 'Traditional Aging', 'Blending'],
      products: 32,
      languages: ['Hindi', 'English']
    },
    {
      id: 3,
      name: 'Fatima Begum',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Perfume Street',
      years: 18,
      speciality: 'Traditional Oud & Musk',
      rating: 4.9,
      reviews: 203,
      verified: true,
      description: 'Award-winning perfumer specializing in rare oud varieties and natural musk blends, trained by master perfumers of Arabia.',
      techniques: ['Oud Aging', 'Arabian Blending', 'Natural Extraction'],
      products: 28,
      languages: ['Hindi', 'Urdu', 'Arabic', 'English']
    },
    {
      id: 4,
      name: 'Priya Devi Sharma',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Flower Market Area',
      years: 22,
      speciality: 'Floral Attars & Seasonal Blends',
      rating: 4.7,
      reviews: 134,
      verified: true,
      description: 'Innovative artisan creating seasonal floral attars using locally sourced flowers and traditional family recipes passed down for generations.',
      techniques: ['Enfleurage', 'Solar Distillation', 'Seasonal Blending'],
      products: 38,
      languages: ['Hindi', 'English']
    },
    {
      id: 5,
      name: 'Rajesh Gupta',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Traditional Distillery Quarter',
      years: 35,
      speciality: 'Herbal Oils & Ayurvedic Blends',
      rating: 4.8,
      reviews: 167,
      verified: true,
      description: 'Ayurvedic practitioner and perfumer creating therapeutic herbal oils and wellness blends using ancient Ayurvedic principles.',
      techniques: ['Ayurvedic Blending', 'Herbal Extraction', 'Therapeutic Formulation'],
      products: 52,
      languages: ['Hindi', 'Sanskrit', 'English']
    },
    {
      id: 6,
      name: 'Naseem Ahmed',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Heritage Bazaar',
      years: 28,
      speciality: 'Vintage Reproductions & Classic Blends',
      rating: 4.6,
      reviews: 98,
      verified: true,
      description: 'Historical perfume researcher recreating lost fragrances from Mughal era recipes and classic European-Indian fusion blends.',
      techniques: ['Historical Recreation', 'Archive Research', 'Classical Blending'],
      products: 24,
      languages: ['Hindi', 'Urdu', 'English', 'Persian']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-600 to-sandalwood-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Artisans of Kannauj</h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Meet the master craftsmen preserving centuries-old perfume-making traditions
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-amber-100">
              <div className="text-center">
                <div className="text-3xl font-bold">{artisans.length}+</div>
                <div className="text-sm">Verified Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm">Unique Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kannauj Artisan Map</h2>
            <p className="text-xl text-gray-600">Explore the traditional perfume districts of Kannauj</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-sandalwood-50 rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700">Interactive Map Coming Soon</p>
                <p className="text-gray-600">Discover artisan locations and specialties</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium">Central Kannauj</div>
                <div className="text-gray-600">Rose & Jasmine</div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium">Old Market</div>
                <div className="text-gray-600">Sandalwood & Oud</div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium">Perfume Street</div>
                <div className="text-gray-600">Traditional Oud</div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium">Heritage Bazaar</div>
                <div className="text-gray-600">Classic Blends</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artisan Profiles */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-24 h-24 rounded-full object-cover mr-6"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-3">{artisan.name}</h3>
                        {artisan.verified && (
                          <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            Verified
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{artisan.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{artisan.years} years experience</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-medium">{artisan.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({artisan.reviews} reviews)</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {artisan.products} products
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-amber-600 mb-2">Speciality: {artisan.speciality}</h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{artisan.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Techniques</h5>
                        <div className="flex flex-wrap gap-1">
                          {artisan.techniques.map((technique, index) => (
                            <span key={index} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Languages</h5>
                        <div className="flex flex-wrap gap-1">
                          {artisan.languages.map((language, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message Artisan
                      </button>
                      <Link
                        href={`/artisans/${artisan.id}`}
                        className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center"
                      >
                        View Profile
                      </Link>
                      <button className="border border-gray-300 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become an Artisan CTA */}
      <div className="bg-gradient-to-r from-sandalwood-600 to-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Are You a Kannauj Artisan?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join our marketplace and showcase your traditional craftsmanship to the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Join as Artisan
            </button>
            <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisansPage;
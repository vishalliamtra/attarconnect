import React from 'react';
import { Clock, User, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

const KnowledgeHubPage: React.FC = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'What is Attar? Understanding Traditional Indian Perfumes',
      excerpt: 'Discover the ancient art of attar-making and why these alcohol-free perfumes have captivated the world for centuries.',
      author: 'Dr. Rashid Ahmed',
      readTime: '8 min read',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Basics',
      featured: true
    },
    {
      id: 2,
      title: 'The Distillation Process of Kannauj: A Step-by-Step Guide',
      excerpt: 'Learn about the traditional deg-bhapka method that has been used for over 1000 years to create the finest attars.',
      author: 'Master Craftsman Suresh Kumar',
      readTime: '12 min read',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Process',
      featured: true
    },
    {
      id: 3,
      title: 'Choosing the Right Fragrance for Your Personality',
      excerpt: 'A comprehensive guide to selecting attars and essential oils that complement your unique style and preferences.',
      author: 'Priya Devi Sharma',
      readTime: '6 min read',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Guide',
      featured: true
    }
  ];

  const allArticles = [
    {
      id: 4,
      title: 'The History of Kannauj: Perfume Capital of India',
      excerpt: 'Explore the rich heritage of Kannauj and how it became the epicenter of Indian perfumery.',
      author: 'Historical Society of Kannauj',
      readTime: '10 min read',
      date: '2024-01-05',
      category: 'History',
      type: 'article'
    },
    {
      id: 5,
      title: 'Understanding Rose Attar: From Petals to Precious Drops',
      excerpt: 'The journey of rose petals from Kannauj gardens to the world\'s finest rose attar.',
      author: 'Mohammad Rashid',
      readTime: '7 min read',
      date: '2024-01-03',
      category: 'Ingredients',
      type: 'article'
    },
    {
      id: 6,
      title: 'Video: Traditional Deg-Bhapka Method Demonstration',
      excerpt: 'Watch master craftsman demonstrate the ancient distillation technique.',
      author: 'Kannauj Artisan Guild',
      readTime: '15 min watch',
      date: '2024-01-01',
      category: 'Process',
      type: 'video'
    },
    {
      id: 7,
      title: 'Sandalwood: The Sacred Fragrance of India',
      excerpt: 'Understanding the significance and uses of sandalwood in Indian perfumery.',
      author: 'Ayurvedic Research Center',
      readTime: '9 min read',
      date: '2023-12-28',
      category: 'Ingredients',
      type: 'article'
    },
    {
      id: 8,
      title: 'How to Store and Care for Your Attars',
      excerpt: 'Essential tips to preserve the quality and longevity of your precious fragrances.',
      author: 'Fragrance Care Experts',
      readTime: '5 min read',
      date: '2023-12-25',
      category: 'Care',
      type: 'guide'
    },
    {
      id: 9,
      title: 'The Science Behind Fragrance Blending',
      excerpt: 'Understanding the chemistry and artistry of creating perfect fragrance combinations.',
      author: 'Dr. Perfume Institute',
      readTime: '11 min read',
      date: '2023-12-22',
      category: 'Science',
      type: 'article'
    }
  ];

  const categories = [
    { name: 'All', count: allArticles.length + featuredArticles.length },
    { name: 'Basics', count: 8 },
    { name: 'Process', count: 6 },
    { name: 'Ingredients', count: 12 },
    { name: 'History', count: 5 },
    { name: 'Care', count: 4 },
    { name: 'Science', count: 3 }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'guide':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Hub</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Discover the art, science, and tradition of Indian perfumery
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-emerald-100">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Articles & Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm">Video Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Years of Tradition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Essential reads for perfume enthusiasts</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-400">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles & Guides</h2>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <option>Sort by: Latest</option>
                    <option>Most Popular</option>
                    <option>By Category</option>
                    <option>By Author</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <option>All Types</option>
                    <option>Articles</option>
                    <option>Videos</option>
                    <option>Guides</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {allArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="flex items-center space-x-1 text-emerald-600">
                            {getTypeIcon(article.type)}
                            <span className="text-sm font-medium capitalize">{article.type}</span>
                          </div>
                          <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 cursor-pointer transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                          <span>{new Date(article.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                      
                      <button className="ml-6 flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                        Read <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Perfume Knowledge
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get the latest articles, guides, and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-emerald-300 focus:ring-2 focus:ring-white focus:border-white"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubPage;
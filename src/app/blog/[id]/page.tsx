"use client"
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  // Mock blog data - in real app, fetch based on id
  const article = {
    id: '1',
    title: 'What is Attar? Understanding Traditional Indian Perfumes',
    excerpt: 'Discover the ancient art of attar-making and why these alcohol-free perfumes have captivated the world for centuries.',
    content: `
      <p>Attar, also known as Ittar, represents one of the world's oldest and most sophisticated forms of perfumery. Originating in the ancient city of Kannauj in Uttar Pradesh, India, this traditional art form has been perfected over more than a thousand years, creating some of the most exquisite and long-lasting fragrances known to humanity.</p>

      <h2>The Ancient Art of Attar Making</h2>
      <p>The word "Attar" comes from the Persian word "Atr," meaning fragrance. Unlike modern perfumes that rely heavily on alcohol as a carrier, traditional attars are completely alcohol-free, using natural oils as their base. This fundamental difference not only makes attars suitable for all skin types but also ensures that the fragrance develops uniquely on each person's skin.</p>

      <p>The traditional method of creating attar, known as the "Deg-Bhapka" process, is a labor-intensive technique that requires immense skill and patience. Fresh flowers, herbs, or other aromatic materials are placed in a copper vessel called a "Deg," which is then sealed and connected to a receiver containing sandalwood oil or another carrier oil.</p>

      <h2>The Deg-Bhapka Process</h2>
      <p>The deg-bhapka method is a steam distillation process that can take anywhere from 15 to 20 hours for a single batch. The deg containing the aromatic materials is heated slowly over a wood fire, creating steam that carries the essential oils through a bamboo pipe into the receiver containing the base oil.</p>

      <p>What makes this process truly special is the slow, gentle heating that preserves the delicate aromatic compounds that would be destroyed by the high temperatures used in modern industrial distillation. The artisan must constantly monitor the fire, adjusting the heat to maintain the perfect temperature throughout the long distillation process.</p>

      <h2>Types of Attars</h2>
      <p>There are several categories of attars, each with its own characteristics and production methods:</p>

      <ul>
        <li><strong>Floral Attars:</strong> Made from flowers like rose, jasmine, and mogra</li>
        <li><strong>Herbal Attars:</strong> Created from herbs and medicinal plants</li>
        <li><strong>Woody Attars:</strong> Based on sandalwood, oud, and other aromatic woods</li>
        <li><strong>Musky Attars:</strong> Incorporating natural musk and amber</li>
      </ul>

      <h2>The Significance of Kannauj</h2>
      <p>Kannauj, often called the "Perfume Capital of India," has been the center of attar production for over a millennium. The city's unique climate, soil conditions, and the expertise of its artisans have made it the undisputed leader in traditional Indian perfumery.</p>

      <p>The artisans of Kannauj, many of whom belong to families that have been in the perfume business for generations, possess knowledge and skills that have been passed down through centuries. This traditional knowledge, combined with the city's ideal conditions for growing aromatic plants, makes Kannauj attars truly exceptional.</p>

      <h2>Modern Relevance</h2>
      <p>In today's world of synthetic fragrances and mass-produced perfumes, attars offer a return to authenticity and natural beauty. They are increasingly appreciated by perfume connoisseurs worldwide who value their complexity, longevity, and the artisanal skill required to create them.</p>

      <p>Moreover, as consumers become more conscious about the ingredients in their personal care products, the natural, alcohol-free composition of attars makes them an attractive alternative to conventional perfumes.</p>
    `,
    author: {
      name: 'Dr. Rashid Ahmed',
      avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Ahmed is a perfumery expert and researcher who has spent over 20 years studying traditional Indian fragrance-making techniques.'
    },
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Basics',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Attar', 'Traditional Perfumes', 'Kannauj', 'Indian Heritage', 'Natural Fragrances']
  };

  const relatedArticles = [
    {
      id: '2',
      title: 'The Distillation Process of Kannauj: A Step-by-Step Guide',
      image: 'https://images.pexels.com/photos/4041405/pexels-photo-4041405.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '12 min read',
      category: 'Process'
    },
    {
      id: '3',
      title: 'Choosing the Right Fragrance for Your Personality',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 min read',
      category: 'Guide'
    },
    {
      id: '4',
      title: 'The History of Kannauj: Perfume Capital of India',
      image: 'https://images.pexels.com/photos/6303635/pexels-photo-6303635.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '10 min read',
      category: 'History'
    }
  ];


    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/knowledge" className="text-gray-500 hover:text-emerald-600">Knowledge Hub</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{article.category}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{article.author.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">Share:</span>
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-emerald-50 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About {article.author.name}</h3>
              <p className="text-gray-700">{article.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12 py-6 border-t border-b border-gray-200">
          <Link
            href="/knowledge"
            className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Hub
          </Link>
          <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
            Next Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                href={`/blog/${relatedArticle.id}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                    <span className="text-sm text-gray-500">{relatedArticle.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Heart,
  BookOpen,
  Users,
  Stethoscope,
  Globe,
  AlertTriangle,
  Handshake
} from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Transforming Education in Rural Communities',
      excerpt: 'Our latest education initiative has reached over 500 children in remote areas, providing them with quality learning resources and dedicated teachers. This comprehensive program includes after-school tutoring, digital literacy workshops, and educational material distribution.',
      content: 'Full article content would go here...',
      author: 'Dr. Sarah Johnson',
      date: 'September 18, 2025',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Access Milestone Reached',
      excerpt: 'We are proud to announce that we have provided healthcare services to over 10,000 individuals this year through our mobile clinic program and community health initiatives.',
      content: 'Full article content would go here...',
      author: 'Dr. Amara Okafor',
      date: 'September 10, 2025',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Community Garden Project Success Story',
      excerpt: 'The community garden project in Green Valley has exceeded expectations, now providing fresh produce to 50 families while teaching sustainable farming practices.',
      content: 'Full article content would go here...',
      author: 'Michael Chen',
      date: 'August 28, 2025',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzU4Mzk4NTI3fDA&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Youth Mentorship Program Launches',
      excerpt: 'Our new youth mentorship program connects young people with community leaders, providing guidance, support, and opportunities for personal and professional development.',
      content: 'Full article content would go here...',
      author: 'Jennifer Martinez',
      date: 'August 15, 2025',
      category: 'Youth',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzk4NDk0fDA&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Emergency Response: Flood Relief Efforts',
      excerpt: 'When flooding hit the region last month, our emergency response team quickly mobilized to provide essential aid, medical care, and temporary shelter to affected families.',
      content: 'Full article content would go here...',
      author: 'Dr. Sarah Johnson',
      date: 'August 2, 2025',
      category: 'Emergency',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWYlMjBoZWxwfGVufDF8fHx8MTc1ODM5ODQ5MHww&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Partnership Spotlight: Local Business Collaboration',
      excerpt: 'Our partnership with local businesses has created new job training opportunities and economic empowerment programs for community members.',
      content: 'Full article content would go here...',
      author: 'Michael Chen',
      date: 'July 20, 2025',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODM5ODU0MHww&ixlib=rb-4.1.0&q=80&w=600',
      readTime: '5 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: Globe },
    { id: 'Healthcare', name: 'Healthcare', icon: Stethoscope },
    { id: 'Education', name: 'Education', icon: BookOpen },
    { id: 'Community', name: 'Community', icon: Users },
    { id: 'Youth', name: 'Youth', icon: Heart },
    { id: 'Emergency', name: 'Emergency', icon: AlertTriangle },
    { id: 'Partnership', name: 'Partnership', icon: Handshake }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'healthcare': return { color: 'text-red-600', bg: 'bg-red-50' };
      case 'education': return { color: 'text-blue-600', bg: 'bg-blue-50' };
      case 'community': return { color: 'text-green-600', bg: 'bg-green-50' };
      case 'youth': return { color: 'text-pink-600', bg: 'bg-pink-50' };
      case 'emergency': return { color: 'text-orange-600', bg: 'bg-orange-50' };
      case 'partnership': return { color: 'text-purple-600', bg: 'bg-purple-50' };
      default: return { color: 'text-gray-600', bg: 'bg-gray-50' };
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              Stories & Updates
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Community <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, success stories, and insights from our work 
              in communities around the world. Read about the impact we're making together.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 
                    'bg-primary hover:bg-primary/90' : 
                    'border-primary text-primary hover:bg-primary/5'
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-gray-900 mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const categoryColors = getCategoryColor(post.category);
                return (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group" onClick={() => onPageChange(`blog-${post.id}`)}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className={`${categoryColors.bg} ${categoryColors.color}`}>
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Calendar className="h-4 w-4 ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-0" onClick={(e) => { e.stopPropagation(); onPageChange(`blog-${post.id}`); }}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <>
              <h2 className="text-2xl text-gray-900 mb-8">All Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => {
                  const categoryColors = getCategoryColor(post.category);
                  return (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group" onClick={() => onPageChange(`blog-${post.id}`)}>
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className={`${categoryColors.bg} ${categoryColors.color} text-xs`}>
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 mt-3" onClick={(e) => { e.stopPropagation(); onPageChange(`blog-${post.id}`); }}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Stay Updated with Our Stories
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest stories, updates, and insights 
            from our community work directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
            />
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          
          <div className="mt-8">
            <Button 
              variant="outline"
              className="border-white bg-primary text-white hover:bg-white/10"
              onClick={() => onPageChange('contact')}
            >
              Share Your Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
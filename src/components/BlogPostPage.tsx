import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Calendar, 
  User, 
  ArrowLeft,
  Share2,
  Heart,
  BookOpen,
  Clock,
  Eye,
  MessageCircle
} from 'lucide-react';

interface BlogPostPageProps {
  postId: string;
  onPageChange: (page: string) => void;
}

export function BlogPostPage({ postId, onPageChange }: BlogPostPageProps) {
  // Mock blog post data - when you've integrated the api routes and backend, this would be fetched based on postId
  const blogPost = {
    id: postId,
    title: 'Transforming Education in Rural Communities',
    content: `
      <p>Our latest education initiative has reached over 500 children in remote areas, providing them with quality learning resources and dedicated teachers. This comprehensive program includes after-school tutoring, digital literacy workshops, and educational material distribution.</p>
      
      <h2>The Challenge</h2>
      <p>In many rural communities, access to quality education remains a significant challenge. Limited resources, lack of qualified teachers, and inadequate infrastructure have created educational gaps that affect children's future opportunities.</p>
      
      <p>When we first visited Green Valley Village, we found a community eager to learn but lacking the basic tools for education. The local school had only a few outdated textbooks, no computers, and teachers who traveled hours just to reach their students.</p>
      
      <h2>Our Approach</h2>
      <p>Working closely with community leaders, parents, and local educators, we developed a comprehensive education support program that addresses multiple aspects of learning:</p>
      
      <ul>
        <li><strong>Infrastructure Development:</strong> We helped build and renovate classrooms, creating safe and conducive learning environments.</li>
        <li><strong>Teacher Training:</strong> Our professional development programs equipped local teachers with modern teaching methods and classroom management skills.</li>
        <li><strong>Technology Integration:</strong> We introduced computers and digital learning tools, connecting students to the wider world of knowledge.</li>
        <li><strong>Community Engagement:</strong> Parents and community members became active participants in the educational process.</li>
      </ul>
      
      <h2>The Results</h2>
      <p>The transformation has been remarkable. Within just one year of program implementation:</p>
      
      <ul>
        <li>Student enrollment increased by 40%</li>
        <li>Reading proficiency improved by 65%</li>
        <li>95% of students now have access to digital learning tools</li>
        <li>Community engagement in education increased dramatically</li>
      </ul>
      
      <blockquote>
        "I never thought my children would have the same educational opportunities as children in the city. Now they're not just keeping up – they're excelling. My daughter wants to become a doctor, and for the first time, I believe she can achieve that dream." - Mary Wanjiku, Parent
      </blockquote>
      
      <h2>Looking Forward</h2>
      <p>This success story in Green Valley Village is just the beginning. We're now expanding this model to 12 additional communities, with plans to reach 2,000 more children by the end of next year.</p>
      
      <p>The key to our success has been the understanding that education is not just about books and classrooms – it's about building hope, creating opportunities, and empowering communities to break the cycle of poverty.</p>
      
      <h2>How You Can Help</h2>
      <p>Supporting education in rural communities requires ongoing commitment and resources. Here's how you can make a difference:</p>
      
      <ul>
        <li><strong>Sponsor a Child:</strong> $50 per month can provide a child with books, supplies, and tutoring support</li>
        <li><strong>Fund a Classroom:</strong> $5,000 can help build or renovate a classroom for 30+ students</li>
        <li><strong>Support Teacher Training:</strong> $1,000 can provide professional development for 5 teachers</li>
        <li><strong>Digital Learning Initiative:</strong> $10,000 can establish a computer lab serving 200+ students</li>
      </ul>
      
      <p>Every contribution, no matter the size, makes a real difference in a child's life. When we invest in education, we invest in the future of entire communities.</p>
    `,
    author: 'Dr. Sarah Johnson',
    authorRole: 'Education Program Director',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvcnxlbnwxfHx8fDE3NTgzOTg0NjN8MA&ixlib=rb-4.1.0&q=80&w=400',
    date: 'September 18, 2025',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=800',
    readTime: '8 min read',
    views: 1250,
    likes: 89,
    comments: 12,
    tags: ['Education', 'Rural Development', 'Community Impact', 'Digital Literacy']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Healthcare Access Milestone Reached',
      excerpt: 'We are proud to announce that we have provided healthcare services to over 10,000 individuals...',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Healthcare',
      readTime: '5 min read'
    },
    {
      id: '3',
      title: 'Community Garden Project Success',
      excerpt: 'The community garden project in Green Valley has exceeded expectations...',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzU4Mzk4NTI3fDA&ixlib=rb-4.1.0&q=80&w=400',
      category: 'Community',
      readTime: '4 min read'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'healthcare': return { color: 'text-red-600', bg: 'bg-red-50' };
      case 'education': return { color: 'text-blue-600', bg: 'bg-blue-50' };
      case 'community': return { color: 'text-green-600', bg: 'bg-green-50' };
      default: return { color: 'text-gray-600', bg: 'bg-gray-50' };
    }
  };

  const categoryColors = getCategoryColor(blogPost.category);

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => onPageChange('blog')}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            whileHover={{ x: -5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </motion.button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Badge className={`${categoryColors.bg} ${categoryColors.color} mb-4`}>
                {blogPost.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{blogPost.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{blogPost.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{blogPost.comments} comments</span>
                </div>
              </div>
            </div>
            
            <motion.img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-blockquote:border-l-primary prose-blockquote:text-gray-800 prose-blockquote:bg-green-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="hover:bg-primary/5 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Author Info */}
              <motion.div 
                className="mt-12 p-6 bg-gray-50 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{blogPost.author}</h3>
                    <p className="text-primary">{blogPost.authorRole}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Dr. Johnson leads our education initiatives and has over 15 years of experience 
                      in community development and educational program management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="sticky top-8 space-y-8">
                {/* Social Share */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Share This Story</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 space-x-2">
                      <Button variant="outline" className="w-auto justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Article
                      </Button>
                      <Button variant="outline" className="w-auto justify-start">
                        <Heart className="h-4 w-4 mr-2" />
                        Like ({blogPost.likes})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Table of Contents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      In This Article
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <a href="#challenge" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        The Challenge
                      </a>
                      <a href="#approach" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Our Approach
                      </a>
                      <a href="#results" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        The Results
                      </a>
                      <a href="#forward" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        Looking Forward
                      </a>
                      <a href="#help" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                        How You Can Help
                      </a>
                    </nav>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="bg-gradient-to-br from-primary/5 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Support Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Help us bring quality education to more communities like Green Valley Village.
                    </p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => onPageChange('contact')}
                    >
                      Get Involved
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Related Stories</h2>
            <p className="text-xl text-gray-600">More stories of impact and transformation</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => onPageChange(`blog-${post.id}`)}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className={`${getCategoryColor(post.category).bg} ${getCategoryColor(post.category).color}`}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
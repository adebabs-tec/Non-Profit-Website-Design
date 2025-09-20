import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Users, BookOpen, Stethoscope, Calendar, ArrowRight, Globe, Shield, Star } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const impactStats = [
    { icon: Users, number: '2,500+', label: 'Lives Transformed', color: 'text-green-600' },
    { icon: BookOpen, number: '45+', label: 'Education Programs', color: 'text-blue-600' },
    { icon: Stethoscope, number: '12,000+', label: 'Healthcare Services', color: 'text-red-500' },
    { icon: Globe, number: '15+', label: 'Communities Served', color: 'text-purple-600' }
  ];

  const programs = [
    {
      icon: Stethoscope,
      title: 'Healthcare Access',
      description: 'Providing essential medical care and health education to underserved communities.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Empowering children and adults through quality education and literacy programs.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Building stronger communities through infrastructure and capacity building.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Heart,
      title: 'Child Welfare',
      description: 'Protecting and nurturing children through comprehensive care programs.',
      color: 'bg-pink-50 text-pink-600'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Oct 15',
      title: 'Community Health Fair',
      location: 'Central Community Center',
      type: 'Healthcare'
    },
    {
      date: 'Oct 22',
      title: 'Education Workshop',
      location: 'Local School District',
      type: 'Education'
    },
    {
      date: 'Nov 5',
      title: 'Fundraising Gala',
      location: 'Grand Hotel Ballroom',
      type: 'Fundraising'
    }
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      title: 'Transforming Education in Rural Communities',
      excerpt: 'Our latest education initiative has reached over 500 children in remote areas...',
      date: 'September 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=400',
      title: 'Healthcare Access Milestone Reached',
      excerpt: 'We are proud to announce that we have provided healthcare services to over 10,000 individuals...',
      date: 'September 10, 2024'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                  <Star className="w-3 h-3 mr-1" />
                  Transforming Lives Since 2020
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building Healthier,{' '}
                  <span className="text-primary">Brighter Communities</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mt-6">
                  The Serene Scheal Initiative is dedicated to improving healthcare access, 
                  education, and community development for children and families in need. 
                  Together, we create lasting positive change.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
                  onClick={() => onPageChange('contact')}
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary/5"
                  onClick={() => onPageChange('programs')}
                >
                  View Programs
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Trusted by communities</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>2,500+ lives impacted</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Children in community education program"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together with our partners and volunteers, we're making a real difference in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to address the most pressing needs in our communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${program.color}`}>
                    <program.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onPageChange('programs')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Join us in making a difference</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onPageChange('events')}
              className="hidden sm:flex border-primary text-primary hover:bg-primary/5"
            >
              View All Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-lg p-3 mb-2">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="text-sm font-medium text-primary">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 text-xs">{event.type}</Badge>
                      <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button 
              variant="outline"
              onClick={() => onPageChange('events')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Latest Stories</h2>
              <p className="text-xl text-gray-600">Success stories and updates from our work</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onPageChange('blog')}
              className="hidden sm:flex border-primary text-primary hover:bg-primary/5"
            >
              Read All Stories
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button 
              variant="outline"
              onClick={() => onPageChange('blog')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              Read All Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
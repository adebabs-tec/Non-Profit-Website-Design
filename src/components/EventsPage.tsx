import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Heart,
  Stethoscope,
  BookOpen,
  DollarSign,
  Globe
} from 'lucide-react';

interface EventsPageProps {
  onPageChange: (page: string) => void;
}

export function EventsPage({ onPageChange }: EventsPageProps) {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Fair',
      description: 'Free health screenings, vaccinations, and health education for all community members.',
      date: 'October 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Central Community Center',
      address: '123 Main Street, Health City',
      type: 'Healthcare',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=600',
      attendees: 200,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      title: 'Education Workshop: Digital Literacy',
      description: 'Computer skills training for adults and seniors, including internet safety and basic applications.',
      date: 'October 22, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Local School District',
      address: '456 Education Ave, Learning Town',
      type: 'Education',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      attendees: 50,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      title: 'Annual Fundraising Gala',
      description: 'Join us for an evening of celebration, inspiration, and support for our community programs.',
      date: 'November 5, 2025',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Hotel Ballroom',
      address: '789 Elegant Street, Celebration City',
      type: 'Fundraising',
      icon: DollarSign,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxhJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTgzOTg1MTZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      attendees: 300,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Community Clean-Up Day',
      description: 'Environmental conservation initiative to beautify our neighborhoods and promote sustainability.',
      date: 'November 12, 2025',
      time: '8:00 AM - 2:00 PM',
      location: 'Riverside Park',
      address: 'River Road, Green Valley',
      type: 'Community',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbiUyMHVwfGVufDF8fHx8MTc1ODM5ODUxOXww&ixlib=rb-4.1.0&q=80&w=600',
      attendees: 150,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 5,
      title: 'Youth Mentorship Program Launch',
      description: 'Connecting young people with community leaders and professionals for guidance and support.',
      date: 'November 20, 2025',
      time: '3:00 PM - 6:00 PM',
      location: 'Youth Center',
      address: '321 Youth Street, Future City',
      type: 'Youth',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzk4NDk0fDA&ixlib=rb-4.1.0&q=80&w=600',
      attendees: 75,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: 'Back-to-School Supply Drive',
      description: 'Successfully distributed school supplies to 500+ children in our community.',
      date: 'August 15, 2025',
      location: 'Community Center',
      type: 'Education',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      impact: '500+ children supported',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 7,
      title: 'Summer Health Camp',
      description: 'Provided comprehensive health services to 300+ community members over three days.',
      date: 'July 10-12, 2025',
      location: 'Mobile Clinic Sites',
      type: 'Healthcare',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=600',
      impact: '300+ people served',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 8,
      title: 'Community Garden Project',
      description: 'Established a sustainable community garden to promote food security and nutrition education.',
      date: 'June 5, 2025',
      location: 'Neighborhood Park',
      type: 'Community',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzU4Mzk4NTI3fDA&ixlib=rb-4.1.0&q=80&w=600',
      impact: 'Garden serving 50 families',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'healthcare': return { color: 'text-red-600', bg: 'bg-red-50' };
      case 'education': return { color: 'text-blue-600', bg: 'bg-blue-50' };
      case 'fundraising': return { color: 'text-green-600', bg: 'bg-green-50' };
      case 'community': return { color: 'text-green-600', bg: 'bg-green-50' };
      case 'youth': return { color: 'text-pink-600', bg: 'bg-pink-50' };
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
              Community Events
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-primary">Community Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Be part of the change! Participate in our community events, workshops, and initiatives 
              designed to bring people together and create positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" className="text-lg">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="text-lg">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Upcoming Events</h2>
                <p className="text-xl text-gray-600">Mark your calendar and join us at these exciting events</p>
              </div>
              
              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="lg:col-span-1">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 lg:h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="lg:col-span-2 p-6 lg:p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${event.bgColor}`}>
                              <event.icon className={`h-5 w-5 ${event.color}`} />
                            </div>
                            <Badge className={`${event.bgColor} ${event.color}`}>
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{event.attendees} expected</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-600">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-600">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-600">{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => onPageChange('contact')}
                          >
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Past Events</h2>
                <p className="text-xl text-gray-600">See the impact we've made together in our community</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => {
                  const typeColors = getTypeColor(event.type);
                  return (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <event.icon className={`h-4 w-4 ${typeColors.color}`} />
                          <Badge className={`${typeColors.bg} ${typeColors.color}`}>
                            {event.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3 text-primary" />
                            <span className="text-xs text-gray-600">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3 text-primary" />
                            <span className="text-xs text-gray-600">{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-green-800">Impact:</div>
                          <div className="text-sm text-green-700">{event.impact}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Want to Host an Event?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Have an idea for a community event or workshop? Partner with us to make it happen! 
            We provide resources, support, and expertise to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => onPageChange('contact')}
            >
              Propose an Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white bg-primary text-white hover:bg-white/10"
              onClick={() => onPageChange('programs')}
            >
              View Our Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
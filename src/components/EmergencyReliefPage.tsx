import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Shield, 
  Zap, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Truck,
  Heart,
  AlertTriangle,
  Phone,
  MapPin,
  Radio
} from 'lucide-react';

interface EmergencyReliefPageProps {
  onPageChange: (page: string) => void;
}

export function EmergencyReliefPage({ onPageChange }: EmergencyReliefPageProps) {
  const stats = [
    { number: '5,000+', label: 'People Assisted', progress: 95 },
    { number: '48hrs', label: 'Average Response Time', progress: 88 },
    { number: '25', label: 'Emergency Deployments', progress: 85 },
    { number: '100%', label: 'Community Coverage', progress: 100 }
  ];

  const responseCapabilities = [
    {
      icon: Truck,
      title: 'Rapid Deployment',
      description: 'Mobile emergency response teams ready to deploy within hours of disaster notification.',
      features: ['Emergency vehicles', 'Medical supplies', 'Communication equipment', 'Response personnel'],
      color: 'from-red-500 to-orange-500',
      responseTime: '2-6 hours'
    },
    {
      icon: Heart,
      title: 'Medical Emergency Care',
      description: 'Emergency medical services and trauma care for disaster-affected communities.',
      features: ['Emergency surgery', 'Trauma treatment', 'Medical evacuation', 'Mental health support'],
      color: 'from-blue-500 to-indigo-500',
      responseTime: '1-3 hours'
    },
    {
      icon: Shield,
      title: 'Search & Rescue',
      description: 'Trained search and rescue teams for locating and evacuating people in danger.',
      features: ['Search operations', 'Rescue teams', 'Evacuation support', 'Safety assessments'],
      color: 'from-green-500 to-emerald-500',
      responseTime: '30min-2 hours'
    },
    {
      icon: Users,
      title: 'Shelter & Care',
      description: 'Temporary shelter, food, and essential services for displaced families.',
      features: ['Emergency shelters', 'Food distribution', 'Clean water', 'Sanitation facilities'],
      color: 'from-purple-500 to-pink-500',
      responseTime: '4-8 hours'
    }
  ];

  const emergencyTypes = [
    {
      type: 'Natural Disasters',
      examples: ['Floods', 'Earthquakes', 'Hurricanes', 'Droughts'],
      preparedness: '15 response kits ready',
      lastResponse: 'Flood response - 2 weeks ago'
    },
    {
      type: 'Health Emergencies',
      examples: ['Disease outbreaks', 'Medical crises', 'Poisoning', 'Epidemics'],
      preparedness: '24/7 medical team',
      lastResponse: 'Medical emergency - 3 days ago'
    },
    {
      type: 'Human-Made Crises',
      examples: ['Building collapses', 'Fire incidents', 'Industrial accidents', 'Violence'],
      preparedness: 'Rapid response team',
      lastResponse: 'Fire incident - 1 week ago'
    },
    {
      type: 'Environmental Hazards',
      examples: ['Chemical spills', 'Air pollution', 'Water contamination', 'Toxic exposure'],
      preparedness: 'Specialized equipment',
      lastResponse: 'Water contamination - 1 month ago'
    }
  ];

  const recentResponses = [
    {
      title: 'Flood Emergency Response',
      location: 'Riverside Community',
      date: '2 weeks ago',
      duration: '5 days',
      peopleHelped: 800,
      description: 'Massive flooding displaced hundreds of families. Our team provided emergency shelter, medical care, and food distribution.',
      image: 'https://images.unsplash.com/photo-1660066522109-82af50d99488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWYlMjBkaXNhc3RlciUyMHJlc3BvbnNlfGVufDF8fHx8MTc1ODM5OTU4MHww&ixlib=rb-4.1.0&q=80&w=600',
      services: ['Emergency shelter', 'Medical aid', 'Food distribution', 'Water purification']
    },
    {
      title: 'Medical Emergency Support',
      location: 'Central District',
      date: '1 month ago',
      duration: '3 days',
      peopleHelped: 200,
      description: 'Disease outbreak required immediate medical intervention and quarantine support for affected community.',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=600',
      services: ['Medical treatment', 'Quarantine setup', 'Health education', 'Contact tracing']
    }
  ];

  const emergencyContacts = [
    { type: 'Emergency Hotline', number: '+1 (555) 123-HELP', available: '24/7' },
    { type: 'Medical Emergency', number: '+1 (555) 123-MED1', available: '24/7' },
    { type: 'Disaster Response', number: '+1 (555) 123-DISASTER', available: '24/7' },
    { type: 'Coordination Center', number: '+1 (555) 123-COORD', available: 'Business Hours' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        {/* Emergency Alert Animation */}
        <motion.div 
          className="absolute top-20 right-10 opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle className="h-20 w-20 text-red-500" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">
                    <Shield className="w-3 h-3 mr-1" />
                    Emergency Relief Program
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Rapid{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Emergency
                  </span>{' '}
                  Response
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Emergency Relief program provides immediate response to disasters and crises, 
                  delivering life-saving assistance when communities need it most.
                </motion.p>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Emergency Hotline: +1 (555) 123-HELP</span>
                </div>
                <p className="text-red-100 text-sm">Available 24/7 for emergency situations</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg"
                  onClick={() => onPageChange('contact')}
                >
                  Report Emergency
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  Emergency Preparedness
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:pl-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1660066522109-82af50d99488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWYlMjBkaXNhc3RlciUyMHJlc3BvbnNlfGVufDF8fHx8MTc1ODM5OTU4MHww&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Emergency response team in action"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">48hr Response Time</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Emergency Response Performance</h2>
            <p className="text-xl text-gray-600">Measuring our readiness and effectiveness in crisis situations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-red-50/30">
                  <CardContent className="pt-8 pb-6">
                    <motion.div 
                      className="text-3xl font-bold text-red-600 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 mb-4">{stat.label}</div>
                    <Progress value={stat.progress} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Capabilities */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Emergency Response Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive emergency services ready to deploy at a moment's notice
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responseCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${capability.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-lg flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <capability.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl">{capability.title}</CardTitle>
                      </div>
                      <Badge className="bg-red-100 text-red-800">{capability.responseTime}</Badge>
                    </div>
                    <p className="text-gray-600">{capability.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Emergency Response Types</h2>
            <p className="text-xl text-gray-600">Prepared for various emergency scenarios</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTypes.map((emergency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600 mb-3">{emergency.type}</CardTitle>
                    <div className="space-y-1">
                      {emergency.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs mx-1">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Preparedness:</span>
                        <p className="text-gray-600">{emergency.preparedness}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Last Response:</span>
                        <p className="text-gray-600">{emergency.lastResponse}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Responses */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Recent Emergency Responses</h2>
            <p className="text-xl text-gray-600">Real emergencies, real impact, real lives saved</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentResponses.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={response.image}
                      alt={response.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-red-100 text-red-800">{response.date}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{response.peopleHelped} people helped</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{response.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{response.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{response.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{response.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">Services Provided:</h4>
                      <div className="flex flex-wrap gap-1">
                        {response.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Emergency Contact Information</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              In case of emergency, contact us immediately. We're here to help 24/7.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{contact.type}</h3>
                    <p className="text-xl font-bold mb-2">{contact.number}</p>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {contact.available}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Be Prepared, Stay Safe
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Support our emergency response capabilities and help us be ready to serve 
              communities when disaster strikes. Together, we can save lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg"
                onClick={() => onPageChange('contact')}
              >
                Support Emergency Response
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50"
                onClick={() => onPageChange('programs')}
              >
                View All Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
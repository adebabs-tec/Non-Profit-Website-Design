import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Stethoscope, 
  Heart, 
  Users, 
  MapPin, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Activity,
  Shield,
  Clock,
  Award
} from 'lucide-react';

interface HealthcareAccessPageProps {
  onPageChange: (page: string) => void;
}

export function HealthcareAccessPage({ onPageChange }: HealthcareAccessPageProps) {
  const stats = [
    { number: '12,000+', label: 'Medical Consultations', progress: 95 },
    { number: '25', label: 'Mobile Clinics', progress: 80 },
    { number: '8,500+', label: 'Vaccinations Given', progress: 90 },
    { number: '15', label: 'Healthcare Centers', progress: 75 }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Mobile Health Clinics',
      description: 'Bringing healthcare directly to remote communities through our fleet of mobile medical units.',
      features: ['Basic medical checkups', 'Prescription medications', 'Health screenings', 'Emergency care']
    },
    {
      icon: Heart,
      title: 'Maternal & Child Health',
      description: 'Specialized care for mothers and children to ensure healthy pregnancies and early childhood development.',
      features: ['Prenatal care', 'Child immunizations', 'Nutrition counseling', 'Birth assistance']
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Focus on preventing diseases through education, screenings, and community health programs.',
      features: ['Health education', 'Disease prevention', 'Regular screenings', 'Community workshops']
    },
    {
      icon: Clock,
      title: 'Emergency Response',
      description: '24/7 emergency medical services for urgent healthcare needs in our served communities.',
      features: ['Emergency transport', 'Critical care', 'First aid training', 'Rapid response teams']
    }
  ];

  const impacts = [
    { title: 'Lives Saved', value: '2,400+', description: 'Through emergency interventions' },
    { title: 'Children Vaccinated', value: '8,500+', description: 'Against preventable diseases' },
    { title: 'Mothers Supported', value: '1,200+', description: 'During pregnancy and childbirth' },
    { title: 'Communities Reached', value: '45', description: 'Across rural and urban areas' }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Community Health Leader',
      quote: 'The mobile clinic has been a lifesaver for our community. My daughter received life-saving treatment that wouldn\'t have been possible without this program.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvcnxlbnwxfHx8fDE3NTgzOTg0NjN8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Mobile Clinic Coordinator',
      quote: 'Working with Serene Scheal Initiative has allowed us to reach communities that have never had access to quality healthcare before.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
        
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
                    <Stethoscope className="w-3 h-3 mr-1" />
                    Healthcare Access Program
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Bringing Quality{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                    Healthcare
                  </span>{' '}
                  to Every Community
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Healthcare Access program provides comprehensive medical services to underserved 
                  communities through mobile clinics, preventive care, and emergency response services.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg"
                  onClick={() => onPageChange('contact')}
                >
                  Support Healthcare
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  View Impact Report
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
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1750008628144-32bc7aebd812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGNsaW5pYyUyMGFmcmljYXxlbnwxfHx8fDE3NTgzOTk1Njh8MA&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Healthcare services in action"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
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
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Healthcare Impact</h2>
            <p className="text-xl text-gray-600">Real numbers, real lives changed</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 mb-4">{stat.label}</div>
                    <Progress value={stat.progress} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care designed to meet the diverse health needs of our communities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Transforming Lives Through Healthcare</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Every statistic represents a life improved, a family supported, and a community strengthened
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{impact.value}</div>
                <div className="text-lg mb-1">{impact.title}</div>
                <div className="text-red-200 text-sm">{impact.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Stories from the Field</h2>
            <p className="text-xl text-gray-600">Hear from those whose lives have been touched by our healthcare programs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-red-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Help Us Expand Healthcare Access
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your support enables us to reach more communities, save more lives, and build a healthier future for all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg"
                onClick={() => onPageChange('contact')}
              >
                Partner With Us
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
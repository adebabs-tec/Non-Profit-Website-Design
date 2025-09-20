import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Users, 
  Home, 
  Zap, 
  Droplets,
  CheckCircle,
  ArrowRight,
  TreePine,
  Building,
  Hammer,
  Lightbulb
} from 'lucide-react';

interface CommunityDevelopmentPageProps {
  onPageChange: (page: string) => void;
}

export function CommunityDevelopmentPage({ onPageChange }: CommunityDevelopmentPageProps) {
  const stats = [
    { number: '15', label: 'Communities Transformed', progress: 88 },
    { number: '50+', label: 'Infrastructure Projects', progress: 75 },
    { number: '3,000+', label: 'People Reached', progress: 92 },
    { number: '25', label: 'Local Partnerships', progress: 85 }
  ];

  const initiatives = [
    {
      icon: Droplets,
      title: 'Water & Sanitation',
      description: 'Providing clean water access and improved sanitation facilities to ensure community health.',
      features: ['Clean water wells', 'Water filtration systems', 'Sanitation facilities', 'Hygiene education'],
      color: 'from-blue-500 to-cyan-500',
      impact: '15 wells constructed'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Implementing sustainable energy solutions to power community development and growth.',
      features: ['Solar panel installations', 'Energy education', 'Grid connections', 'Maintenance training'],
      color: 'from-yellow-500 to-orange-500',
      impact: '8 communities electrified'
    },
    {
      icon: Building,
      title: 'Infrastructure Development',
      description: 'Building essential infrastructure to support economic growth and community wellbeing.',
      features: ['Community centers', 'Roads and bridges', 'Market spaces', 'Storage facilities'],
      color: 'from-gray-500 to-slate-600',
      impact: '12 centers built'
    },
    {
      icon: TreePine,
      title: 'Environmental Conservation',
      description: 'Promoting sustainable practices and environmental protection for future generations.',
      features: ['Tree planting programs', 'Waste management', 'Conservation education', 'Sustainable farming'],
      color: 'from-green-500 to-emerald-500',
      impact: '5,000 trees planted'
    }
  ];

  const projectTimeline = [
    {
      phase: 'Assessment',
      description: 'Community needs assessment and planning',
      duration: '1-2 months',
      status: 'completed'
    },
    {
      phase: 'Design',
      description: 'Collaborative design with community input',
      duration: '2-3 months',
      status: 'completed'
    },
    {
      phase: 'Implementation',
      description: 'Project execution with local workforce',
      duration: '6-12 months',
      status: 'in-progress'
    },
    {
      phase: 'Sustainability',
      description: 'Training and handover to community',
      duration: 'Ongoing',
      status: 'planned'
    }
  ];

  const communityProjects = [
    {
      name: 'Green Valley Water Project',
      location: 'Green Valley Village',
      type: 'Water Access',
      beneficiaries: '2,500 people',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzk5NjQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Constructed 3 deep water wells providing clean water access to entire community.'
    },
    {
      name: 'Solar Power Initiative',
      location: 'Sunset Community',
      type: 'Energy Access',
      beneficiaries: '800 families',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGFmcmljYXxlbnwxfHx8fDE3NTgzOTk2NTB8MA&ixlib=rb-4.1.0&q=80&w=400',
      description: 'Installing solar panels to provide clean electricity for homes and businesses.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Building className="h-20 w-20 text-green-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <TreePine className="h-16 w-16 text-blue-500" />
          </motion.div>
        </div>
        
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
                  <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                    <Building className="w-3 h-3 mr-1" />
                    Community Development Program
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Building{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                    Stronger
                  </span>{' '}
                  Communities
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Community Development program focuses on sustainable infrastructure, environmental 
                  conservation, and local capacity building to create thriving, self-sufficient communities.
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
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg"
                  onClick={() => onPageChange('contact')}
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  View Projects
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
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-3xl transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1745169921509-ceb2b517dd9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBidWlsZGluZyUyMGRldmVsb3BtZW50JTIwcGVvcGxlJTIwd29ya2luZ3xlbnwxfHx8fDE3NTgzOTk1NzR8MA&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Community development project"
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
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Development Impact</h2>
            <p className="text-xl text-gray-600">Measuring progress through community transformation</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50/30">
                  <CardContent className="pt-8 pb-6">
                    <motion.div 
                      className="text-3xl font-bold text-green-600 mb-2"
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

      {/* Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Development Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs addressing infrastructure, sustainability, and community empowerment
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${initiative.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${initiative.color} rounded-lg flex items-center justify-center`}
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <initiative.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl">{initiative.title}</CardTitle>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{initiative.impact}</Badge>
                    </div>
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {initiative.features.map((feature, featureIndex) => (
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

      {/* Project Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Project Development Process</h2>
            <p className="text-xl text-gray-600">Our systematic approach to community development</p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-300 to-teal-300"></div>
            
            <div className="space-y-12">
              {projectTimeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            phase.status === 'completed' ? 'bg-green-500' : 
                            phase.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`}>
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        </div>
                        <p className="text-gray-600 mb-2">{phase.description}</p>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing successful community transformations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
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
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="text-gray-600">{project.beneficiaries}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-600">{project.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl mb-6">
              Build Sustainable Communities Together
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join us in creating lasting change through infrastructure development, environmental 
              conservation, and community empowerment initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-green-700 hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-primary text-white hover:bg-white/10"
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
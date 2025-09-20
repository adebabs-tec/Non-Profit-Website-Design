import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Heart, 
  Shield, 
  Baby, 
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Home,
  Utensils,
  Activity
} from 'lucide-react';

interface ChildWelfarePageProps {
  onPageChange: (page: string) => void;
}

export function ChildWelfarePage({ onPageChange }: ChildWelfarePageProps) {
  const stats = [
    { number: '800+', label: 'Children Supported', progress: 90 },
    { number: '150', label: 'Families Assisted', progress: 85 },
    { number: '12', label: 'Safe Spaces Created', progress: 75 },
    { number: '98%', label: 'Child Safety Rate', progress: 98 }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Child Protection Services',
      description: 'Comprehensive protection programs ensuring children are safe from harm and abuse.',
      features: ['24/7 helpline', 'Safe shelter provision', 'Legal advocacy', 'Crisis intervention'],
      color: 'from-red-500 to-pink-500',
      beneficiaries: '200+ children'
    },
    {
      icon: Utensils,
      title: 'Nutrition Programs',
      description: 'Addressing malnutrition and ensuring children have access to healthy, nutritious meals.',
      features: ['Daily meal programs', 'Nutrition education', 'Growth monitoring', 'Supplement distribution'],
      color: 'from-orange-500 to-amber-500',
      beneficiaries: '450+ children'
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Ensuring every child has access to quality education and learning opportunities.',
      features: ['School enrollment support', 'Learning materials', 'Tutoring programs', 'Scholarship assistance'],
      color: 'from-blue-500 to-indigo-500',
      beneficiaries: '320+ students'
    },
    {
      icon: Activity,
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare services focused on child development and wellbeing.',
      features: ['Regular health checkups', 'Vaccination programs', 'Mental health support', 'Therapy services'],
      color: 'from-green-500 to-emerald-500',
      beneficiaries: '600+ children'
    }
  ];

  const safeguards = [
    { title: 'Child Safety Protocols', description: 'Strict background checks and safety procedures', icon: Shield },
    { title: 'Professional Training', description: 'Continuous training for all staff and volunteers', icon: Users },
    { title: 'Family Engagement', description: 'Working closely with families and guardians', icon: Home },
    { title: 'Community Oversight', description: 'Community-based monitoring and feedback systems', icon: Heart }
  ];

  const ageGroups = [
    {
      group: 'Infants & Toddlers (0-3)',
      focus: 'Early childhood development and nutrition',
      programs: ['Infant care', 'Nutrition support', 'Development screening', 'Parent education'],
      count: 120
    },
    {
      group: 'Preschoolers (4-6)',
      focus: 'Learning readiness and social development',
      programs: ['Early learning', 'Social skills', 'Play therapy', 'School preparation'],
      count: 180
    },
    {
      group: 'School Age (7-12)',
      focus: 'Education support and skill development',
      programs: ['Academic support', 'Life skills', 'Sports & recreation', 'Mentorship'],
      count: 320
    },
    {
      group: 'Adolescents (13-18)',
      focus: 'Life preparation and career guidance',
      programs: ['Career counseling', 'Leadership training', 'Health education', 'Transition support'],
      count: 180
    }
  ];

  const testimonials = [
    {
      name: 'Grace Wanjiku',
      role: 'Single Mother',
      quote: 'The child welfare program has been a blessing to my family. My children are now healthy, in school, and have a bright future ahead.',
      children: 3,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvcnxlbnwxfHx8fDE3NTgzOTg0NjN8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'James Ochieng',
      role: 'Community Leader',
      quote: 'Seeing the transformation in our children through these programs fills my heart with hope. They are the future of our community.',
      children: 'Community of 50+ children',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="h-16 w-16 text-pink-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Baby className="h-20 w-20 text-purple-500" />
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
                  <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">
                    <Heart className="w-3 h-3 mr-1" />
                    Child Welfare Program
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Protecting{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    Every Child
                  </span>'s Future
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Child Welfare program provides comprehensive protection, nutrition, education, 
                  and healthcare services to ensure every child grows up safe, healthy, and with 
                  unlimited potential.
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
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg"
                  onClick={() => onPageChange('contact')}
                >
                  Support Children
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-pink-300 text-pink-700 hover:bg-pink-50"
                >
                  Learn More
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
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-3xl transform -rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1600563093202-337471bde37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdlbGZhcmUlMjBwcm90ZWN0aW9uJTIwY2FyZXxlbnwxfHx8fDE3NTgzOTk1Nzd8MA&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Children in care program"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">98% Safety Rate</span>
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
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Child Welfare Impact</h2>
            <p className="text-xl text-gray-600">Creating safe spaces and bright futures for children</p>
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
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-pink-50/30">
                  <CardContent className="pt-8 pb-6">
                    <motion.div 
                      className="text-3xl font-bold text-pink-600 mb-2"
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

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Comprehensive Child Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic support addressing every aspect of child development and wellbeing
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <Badge className="bg-pink-100 text-pink-800">{service.beneficiaries}</Badge>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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

      {/* Age Groups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Age-Appropriate Programs</h2>
            <p className="text-xl text-gray-600">Tailored support for every stage of childhood development</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
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
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{group.count}</span>
                    </div>
                    <CardTitle className="text-lg">{group.group}</CardTitle>
                    <p className="text-gray-600 text-sm">{group.focus}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {group.programs.map((program, programIndex) => (
                        <div key={programIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{program}</span>
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

      {/* Safeguards Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Child Protection Safeguards</h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Ensuring the highest standards of child safety and protection in all our programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeguards.map((safeguard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <safeguard.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{safeguard.title}</h3>
                <p className="text-pink-200 text-sm">{safeguard.description}</p>
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
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Family Stories</h2>
            <p className="text-xl text-gray-600">Hear from families whose children have thrived in our programs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-pink-600">{testimonial.role}</p>
                        <Badge className="mt-1 bg-pink-100 text-pink-800">{testimonial.children} children</Badge>
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Every Child Deserves a Bright Future
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your support helps us provide protection, nutrition, education, and healthcare 
              to vulnerable children, giving them the foundation they need to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg"
                onClick={() => onPageChange('contact')}
              >
                Protect Children
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-700 hover:bg-pink-50"
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
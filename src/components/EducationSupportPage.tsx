import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Laptop,
  Globe,
  Heart,
  Star
} from 'lucide-react';

interface EducationSupportPageProps {
  onPageChange: (page: string) => void;
}

export function EducationSupportPage({ onPageChange }: EducationSupportPageProps) {
  const stats = [
    { number: '1,200+', label: 'Students Supported', progress: 85 },
    { number: '45+', label: 'Schools Partnered', progress: 90 },
    { number: '200+', label: 'Teachers Trained', progress: 75 },
    { number: '95%', label: 'Graduation Rate', progress: 95 }
  ];

  const programs = [
    {
      icon: BookOpen,
      title: 'After-School Tutoring',
      description: 'Personalized learning support to help students excel in their studies and overcome educational challenges.',
      features: ['Math & Science support', 'Reading comprehension', 'Homework assistance', 'Exam preparation'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Technology education programs that prepare students for the digital age and future careers.',
      features: ['Computer skills training', 'Internet safety education', 'Coding workshops', 'Digital citizenship'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Program',
      description: 'Financial assistance for deserving students to continue their education and achieve their dreams.',
      features: ['Tuition assistance', 'Books & supplies', 'Mentorship support', 'Career guidance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Professional development programs to enhance teaching quality and student learning outcomes.',
      features: ['Modern teaching methods', 'Classroom management', 'Technology integration', 'Assessment techniques'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { title: 'Students Graduated', value: '850+', description: 'Successfully completed their education' },
    { title: 'Literacy Rate Improved', value: '40%', description: 'In communities we serve' },
    { title: 'Scholarships Awarded', value: '320', description: 'To deserving students' },
    { title: 'Digital Skills Training', value: '500+', description: 'Students equipped with tech skills' }
  ];

  const successStories = [
    {
      name: 'Sarah Kimani',
      age: '16 years old',
      story: 'Thanks to the scholarship program, I was able to continue my education and now I\'m the top student in my class. I dream of becoming a doctor.',
      achievement: 'Top Student Award',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzk4NDk0fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Michael Oduya',
      age: '14 years old',
      story: 'The digital literacy program opened my eyes to technology. I\'ve learned coding and now I help teach other students in my village.',
      achievement: 'Youth Tech Ambassador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <BookOpen className="h-16 w-16 text-blue-500" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <GraduationCap className="h-12 w-12 text-purple-500" />
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
                  <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Education Support Program
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Empowering Minds,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Building Futures
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Education Support program provides comprehensive learning opportunities, from literacy 
                  programs to digital skills training, ensuring every child has access to quality education.
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                  onClick={() => onPageChange('contact')}
                >
                  Support Education
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  View Success Stories
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1720160644902-d447e3313b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNjaG9vbCUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODM5OTU3MXww&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Children in classroom learning"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">95% Success Rate</span>
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
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Educational Impact</h2>
            <p className="text-xl text-gray-600">Measuring success through student achievements</p>
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
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 mb-4">{stat.label}</div>
                    <Progress value={stat.progress} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Education Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational support designed to unlock every student's potential
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center`}>
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
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

      {/* Achievement Metrics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">Educational Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every milestone represents a student's journey toward a brighter future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {achievement.value}
                </motion.div>
                <div className="text-lg mb-1">{achievement.title}</div>
                <div className="text-blue-200 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Meet the incredible students whose lives have been transformed through education</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                          <Award className="h-4 w-4 text-yellow-800" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg text-gray-900">{story.name}</h3>
                        <p className="text-blue-600">{story.age}</p>
                        <Badge className="mt-1 bg-yellow-100 text-yellow-800">{story.achievement}</Badge>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                      "{story.story}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Invest in the Future Generation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your support helps us provide quality education, digital literacy, and opportunities 
              that transform young lives and strengthen communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                onClick={() => onPageChange('contact')}
              >
                Support Education
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
                onClick={() => onPageChange('programs')}
              >
                Explore All Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
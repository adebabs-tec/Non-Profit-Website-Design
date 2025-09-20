import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Eye, 
  DollarSign, 
  Users, 
  FileText,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Award,
  Globe,
  Target
} from 'lucide-react';

interface TransparencyPageProps {
  onPageChange: (page: string) => void;
}

export function TransparencyPage({ onPageChange }: TransparencyPageProps) {
  const transparencyPrinciples = [
    {
      icon: Eye,
      title: 'Open Operations',
      description: 'Complete transparency in how we operate, make decisions, and allocate resources.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Accountability',
      description: 'Detailed reporting of all donations, expenses, and financial management practices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Impact Measurement',
      description: 'Regular assessment and reporting of program effectiveness and community impact.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description: 'Inclusive decision-making with input from communities, donors, and partners.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const financialBreakdown = [
    { category: 'Program Services', percentage: 78, amount: '$780,000', description: 'Direct support to communities' },
    { category: 'Administrative', percentage: 12, amount: '$120,000', description: 'Operational overhead' },
    { category: 'Fundraising', percentage: 10, amount: '$100,000', description: 'Donor engagement & development' }
  ];

  const impactMetrics = [
    { metric: 'Program Efficiency', value: '92%', target: '90%', status: 'exceeding' },
    { metric: 'Community Satisfaction', value: '96%', target: '85%', status: 'exceeding' },
    { metric: 'Donor Retention', value: '87%', target: '80%', status: 'exceeding' },
    { metric: 'Goal Achievement', value: '94%', target: '90%', status: 'exceeding' }
  ];

  const annualReports = [
    {
      year: '2023',
      title: 'Annual Impact Report 2023',
      highlights: ['$1.2M raised', '2,500+ lives impacted', '15 communities served'],
      downloadUrl: '#'
    },
    {
      year: '2022',
      title: 'Annual Impact Report 2022',
      highlights: ['$950K raised', '2,100+ lives impacted', '12 communities served'],
      downloadUrl: '#'
    },
    {
      year: '2021',
      title: 'Annual Impact Report 2021',
      highlights: ['$720K raised', '1,800+ lives impacted', '10 communities served'],
      downloadUrl: '#'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Margaret Thompson',
      role: 'Board Chair',
      expertise: 'Public Health & International Development',
      tenure: '5 years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvcnxlbnwxfHx8fDE3NTgzOTg0NjN8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'James Rodriguez',
      role: 'Treasurer',
      expertise: 'Financial Management & Accounting',
      tenure: '3 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Secretary',
      expertise: 'Education & Community Development',
      tenure: '4 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZG9jdG9yfGVufDF8fHx8MTc1ODM5ODQ2OXww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Robert Chen',
      role: 'Member',
      expertise: 'Legal Affairs & Governance',
      tenure: '2 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const certifications = [
    { name: 'GuideStar Gold Seal', description: 'Transparency & accountability certification' },
    { name: 'Charity Navigator 4-Star', description: 'Top-rated charity for efficiency & transparency' },
    { name: 'BBB Wise Giving Alliance', description: 'Meets all accountability standards' },
    { name: 'ISO 9001 Certified', description: 'Quality management system certification' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Eye className="w-3 h-3 mr-1" />
                Transparency & Accountability
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Transparency
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We believe in complete openness about our operations, finances, and impact. 
              Explore our commitment to transparency and accountability in everything we do.
            </motion.p>
            
            <motion.div 
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Last updated: September 20, 2025 | Fiscal Year 2023-2025
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Transparency Principles</h2>
            <p className="text-xl text-gray-600">Core commitments to openness and accountability</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transparencyPrinciples.map((principle, index) => (
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
                    <div className={`w-12 h-12 bg-gradient-to-br ${principle.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <principle.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Financial Transparency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how your donations are used to create positive impact
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center mb-6">2023 Financial Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {financialBreakdown.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{item.category}</span>
                          <div className="text-right">
                            <div className="font-bold text-blue-600">{item.percentage}%</div>
                            <div className="text-sm text-gray-600">{item.amount}</div>
                          </div>
                        </div>
                        <Progress value={item.percentage} className="h-3 mb-1" />
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Efficiency Rating</span>
                    </div>
                    <p className="text-sm text-green-700">
                      78% of donations go directly to programs - exceeding industry standard of 70%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {metric.status === 'exceeding' ? 'Exceeding Target' : 'Meeting Target'}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-blue-600">{metric.value}</span>
                        <span className="text-sm text-gray-600">Target: {metric.target}</span>
                      </div>
                      <Progress value={parseInt(metric.value)} className="h-2" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600">Meet the leaders who guide our mission and ensure accountability</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.tenure} tenure
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600">Comprehensive documentation of our impact and operations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-800">{report.year}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {report.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                      Download Report
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">Third-party validation of our transparency and effectiveness</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl mb-6">
              Questions About Our Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're committed to complete transparency. If you have questions about our 
              operations, finances, or impact, we're here to provide answers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Ask a Question
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white/10"
              >
                View All Reports
              </Button>
            </div>
            
            <div className="mt-8 text-blue-200 text-sm">
              Email: transparency@serene-scheal.org | Phone: +1 (555) 123-INFO
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
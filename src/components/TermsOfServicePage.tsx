import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  FileText, 
  Scale, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Gavel,
  Globe
} from 'lucide-react';

interface TermsOfServicePageProps {
  onPageChange: (page: string) => void;
}

export function TermsOfServicePage({ onPageChange }: TermsOfServicePageProps) {
  const keyTerms = [
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Guidelines for appropriate use of our services and respectful interaction with our community.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Service Availability',
      description: 'Information about service levels, maintenance, and our commitment to accessibility.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      description: 'Rights and permissions regarding content, trademarks, and materials on our platform.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gavel,
      title: 'Legal Framework',
      description: 'Governing law, dispute resolution, and limitation of liability provisions.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const userGuidelines = [
    {
      category: 'Acceptable Use',
      rules: [
        'Use services for lawful purposes only',
        'Respect other users and community members',
        'Provide accurate information when required',
        'Protect your account credentials'
      ],
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      category: 'Prohibited Activities',
      rules: [
        'Harassment or discrimination of any kind',
        'Sharing false or misleading information',
        'Attempting to access unauthorized areas',
        'Interfering with service functionality'
      ],
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ];

  const serviceTerms = [
    {
      title: 'Service Modifications',
      content: 'We reserve the right to modify, suspend, or discontinue services with reasonable notice to users.'
    },
    {
      title: 'Account Termination',
      content: 'We may terminate accounts that violate these terms or engage in harmful activities.'
    },
    {
      title: 'Content Ownership',
      content: 'Users retain ownership of content they submit, but grant us license to use it for service provision.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Our liability is limited to the maximum extent permitted by law for any service-related issues.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">
                <FileText className="w-3 h-3 mr-1" />
                Legal Terms & Conditions
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Terms of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Service
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              These terms govern your use of our services and define the rights and responsibilities 
              of both users and Serene Scheal Initiative.
            </motion.p>
            
            <motion.div 
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Last updated: September 20, 2025 | Effective Date: September 20, 2025
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600">Essential aspects of our service agreement</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTerms.map((term, index) => (
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
                    <div className={`w-12 h-12 bg-gradient-to-br ${term.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <term.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{term.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{term.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Guidelines */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">User Guidelines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Standards for appropriate use of our services and community interaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <guideline.icon className={`h-6 w-6 ${guideline.color}`} />
                      <CardTitle className="text-xl">{guideline.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {guideline.rules.map((rule, ruleIndex) => (
                        <motion.div 
                          key={ruleIndex} 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + ruleIndex * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full ${guideline.color === 'text-green-600' ? 'bg-green-600' : 'bg-red-600'} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-600 text-sm">{rule}</span>
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

      {/* Detailed Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Service Terms</h2>
            <p className="text-xl text-gray-600">Detailed terms governing our services</p>
          </motion.div>
          
          <div className="space-y-8">
            {serviceTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-600">{term.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{term.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Terms */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using our services. These terms apply to all visitors, 
                  users, donors, volunteers, and others who access or use the service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This license includes:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Access to public information and educational materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Participation in programs and services as offered</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Communication with our organization for legitimate purposes</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-4">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  The materials on our website and services are provided on an 'as is' basis. Serene Scheal Initiative makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties 
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other 
                  violation of rights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Serene Scheal Initiative or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, 
                  even if we or our authorized representative has been notified orally or in writing of the possibility of such damage. 
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential 
                  or incidental damages, these limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which 
                  Serene Scheal Initiative operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                  state or location. Any disputes arising from these terms will be resolved through binding arbitration in accordance 
                  with the rules of the applicable arbitration association.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team 
              for clarification or assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-purple-700 hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Contact Legal Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white/10"
              >
                Download Full Terms
              </Button>
            </div>
            
            <div className="mt-8 text-purple-200 text-sm">
              Email: legal@serene-scheal.org | Phone: +1 (555) 123-LEGAL
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
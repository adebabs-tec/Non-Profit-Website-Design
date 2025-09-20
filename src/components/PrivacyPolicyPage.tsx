import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  AlertCircle,
  FileText
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onPageChange: (page: string) => void;
}

export function PrivacyPolicyPage({ onPageChange }: PrivacyPolicyPageProps) {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement robust security measures to protect your personal information from unauthorized access, use, or disclosure.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and provide you with control over your information.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is stored using industry-standard encryption and security protocols to ensure maximum protection.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Limited Access',
      description: 'Only authorized personnel have access to personal data, and only for legitimate organizational purposes.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const dataTypes = [
    {
      category: 'Personal Information',
      examples: ['Name', 'Email address', 'Phone number', 'Mailing address'],
      purpose: 'Communication and service delivery',
      retention: '5 years or until you request deletion'
    },
    {
      category: 'Donation Information',
      examples: ['Payment details', 'Donation amount', 'Frequency', 'Payment method'],
      purpose: 'Processing donations and tax receipts',
      retention: '7 years for financial records compliance'
    },
    {
      category: 'Volunteer Information',
      examples: ['Skills', 'Availability', 'Background check results', 'Training records'],
      purpose: 'Volunteer coordination and program management',
      retention: '3 years after volunteer service ends'
    },
    {
      category: 'Website Analytics',
      examples: ['IP address', 'Browser type', 'Pages visited', 'Time spent'],
      purpose: 'Website improvement and user experience',
      retention: '2 years'
    }
  ];

  const rights = [
    {
      right: 'Access',
      description: 'You have the right to know what personal data we have about you and receive a copy of it.',
      icon: Eye
    },
    {
      right: 'Correction',
      description: 'You can request that we correct any inaccurate or incomplete personal data.',
      icon: FileText
    },
    {
      right: 'Deletion',
      description: 'You can request that we delete your personal data, subject to legal obligations.',
      icon: AlertCircle
    },
    {
      right: 'Portability',
      description: 'You can request your data in a machine-readable format to transfer to another organization.',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Shield className="w-3 h-3 mr-1" />
                Privacy & Data Protection
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Policy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your privacy is important to us. This policy explains how we collect, use, 
              protect, and share your personal information when you interact with our organization.
            </motion.p>
            
            <motion.div 
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Last updated: September 20, 2024 | Effective Date: January 1, 2024
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600">Core commitments to protecting your personal information</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
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

      {/* Data Collection */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services and fulfill our mission
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{dataType.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dataType.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Purpose:</h4>
                      <p className="text-gray-600 text-sm">{dataType.purpose}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Retention:</h4>
                      <p className="text-gray-600 text-sm">{dataType.retention}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-xl text-gray-600">You have control over your personal information</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <right.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Right to {right.right}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{right.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Service Delivery</h4>
                      <p className="text-gray-600 text-sm">To provide our programs and services effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Communication</h4>
                      <p className="text-gray-600 text-sm">To send updates, newsletters, and important information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Legal Compliance</h4>
                      <p className="text-gray-600 text-sm">To meet regulatory and reporting requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Improvement</h4>
                      <p className="text-gray-600 text-sm">To enhance our services and programs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Data Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We do not sell, rent, or trade your personal information. We may share information only in these limited circumstances:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Service Providers</h4>
                      <p className="text-gray-600 text-sm">With trusted partners who help us provide services (under strict confidentiality agreements)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Legal Requirements</h4>
                      <p className="text-gray-600 text-sm">When required by law or to protect our legal rights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">With Your Consent</h4>
                      <p className="text-gray-600 text-sm">When you explicitly authorize us to share specific information</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Security Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Encryption of sensitive data in transit and at rest</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Regular security audits and vulnerability assessments</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Access controls and staff training on data protection</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Secure backup and disaster recovery procedures</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              If you have questions about this privacy policy or want to exercise your rights, 
              please contact our Data Protection Officer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Contact Privacy Officer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white/10"
              >
                Download Full Policy
              </Button>
            </div>
            
            <div className="mt-8 text-blue-200 text-sm">
              Email: privacy@serene-scheal.org | Phone: +1 (555) 123-PRIVACY
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
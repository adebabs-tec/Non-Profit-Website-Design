import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Handshake,
  DollarSign,
  Users,
  Send,
  CheckCircle
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    partnershipType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would typically send the form data to a server after tyou've implemented the backend logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // This resets the form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        partnershipType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@serene-scheal.org',
      secondary: 'partnerships@serene-scheal.org',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      secondary: '+1 (555) 123-4568 (Emergency)',
      description: 'Mon-Fri, 9AM-5PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Community Street',
      secondary: 'Health City, HC 12345',
      description: 'Main office and community center'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday: 9AM - 5PM',
      secondary: 'Saturday: 10AM - 2PM',
      description: 'Closed Sundays and holidays'
    }
  ];

  const partnershipOptions = [
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers making a direct impact in communities.',
      benefits: ['Flexible scheduling', 'Skills-based opportunities', 'Community impact', 'Personal growth']
    },
    {
      icon: Handshake,
      title: 'Corporate Partnership',
      description: 'Partner with us to create sustainable programs and expand community reach.',
      benefits: ['CSR alignment', 'Employee engagement', 'Brand visibility', 'Tax benefits']
    },
    {
      icon: DollarSign,
      title: 'Sponsor Programs',
      description: 'Fund specific programs and see the direct impact of your contribution.',
      benefits: ['Program naming rights', 'Impact reporting', 'Recognition', 'Direct involvement']
    },
    {
      icon: Users,
      title: 'Community Leader',
      description: 'Lead initiatives in your area and become a catalyst for positive change.',
      benefits: ['Leadership training', 'Resource support', 'Network access', 'Recognition']
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <Card className="max-w-md w-full mx-4 text-center border-0 shadow-lg">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              Your message has been received. We'll get back to you within 24-48 hours.
            </p>
            <div className="text-sm text-gray-500">
              Redirecting back to form in a few seconds...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to make a difference? We welcome volunteers, partners, sponsors, and community 
              leaders who share our vision of building healthier, stronger communities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us and get involved</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    <p className="text-primary">{info.content}</p>
                    {info.secondary && <p className="text-gray-600 text-sm">{info.secondary}</p>}
                  </div>
                  <p className="text-gray-500 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission and make a lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <option.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm text-gray-900 mb-3">Benefits include:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                We're excited to hear from you and explore how we can work together.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization (if applicable)</Label>
                    <Input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="partnershipType">Partnership Interest</Label>
                  <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select how you'd like to get involved" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="corporate">Corporate Partnership</SelectItem>
                      <SelectItem value="sponsor">Program Sponsorship</SelectItem>
                      <SelectItem value="community">Community Leadership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your interest in partnering with us, any specific programs you'd like to support, or questions you have..."
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            {/* Map Placeholder, add the map package here, i just used a placeholder for it */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Find Us</h2>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map would be embedded here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Community Street, Health City, HC 12345</p>
                </div>
              </div>
              
              {/* Additional Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-4">Emergency Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span className="text-gray-600">Emergency Hotline: +1 (555) 123-HELP</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-red-600" />
                      <span className="text-gray-600">emergency@serene-scheal.org</span>
                    </div>
                    <p className="text-sm text-gray-500 pl-7">
                      Available 24/7 for community emergencies and urgent medical situations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every partnership, every volunteer hour, and every contribution makes a real impact 
            in the lives of individuals and families in our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Download Partnership Kit
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white bg-primary text-white hover:bg-white/10"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
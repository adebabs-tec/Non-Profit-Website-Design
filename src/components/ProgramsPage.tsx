import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Stethoscope, 
  BookOpen, 
  Users, 
  Heart, 
  Shield, 
  Home,
  ArrowRight,
  CheckCircle,
  Globe,
  Briefcase
} from 'lucide-react';

interface ProgramsPageProps {
  onPageChange: (page: string) => void;
}

export function ProgramsPage({ onPageChange }: ProgramsPageProps) {
  const programs = [
    {
      id: 'healthcare',
      icon: Stethoscope,
      title: 'Healthcare Access',
      subtitle: 'Comprehensive Medical Care',
      description: 'Providing essential medical services, preventive care, and health education to underserved communities.',
      image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbXVuaXR5JTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzU4Mzk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'Mobile health clinics',
        'Maternal and child health',
        'Vaccination programs',
        'Health education workshops',
        'Mental health support',
        'Emergency medical care'
      ],
      impact: '12,000+ medical consultations provided',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'education',
      icon: BookOpen,
      title: 'Education Support',
      subtitle: 'Quality Learning for All',
      description: 'Empowering children and adults through quality education programs, literacy initiatives, and skill development.',
      image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTgzOTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'After-school tutoring',
        'Adult literacy programs',
        'Scholarship assistance',
        'Teacher training',
        'Educational materials',
        'Digital literacy'
      ],
      impact: '1,200+ students supported',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community Development',
      subtitle: 'Building Stronger Communities',
      description: 'Strengthening communities through infrastructure development, capacity building, and local leadership programs.',
      image: 'https://images.unsplash.com/photo-1747146114146-8b8597a53ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcGVvcGxlJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1ODM5ODQ0M3ww&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'Water and sanitation projects',
        'Community center development',
        'Leadership training',
        'Microfinance programs',
        'Agricultural support',
        'Environmental conservation'
      ],
      impact: '15 communities transformed',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'child-welfare',
      icon: Heart,
      title: 'Child Welfare',
      subtitle: 'Protecting Every Child',
      description: 'Comprehensive programs focused on child protection, nutrition, and creating safe environments for children to thrive.',
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjBoYXBweXxlbnwxfHx8fDE3NTgzOTg0ODd8MA&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'Child protection services',
        'Nutrition programs',
        'Recreational activities',
        'Counseling support',
        'Foster care assistance',
        'Youth mentorship'
      ],
      impact: '800+ children supported',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'emergency',
      icon: Shield,
      title: 'Emergency Relief',
      subtitle: 'Rapid Response Support',
      description: 'Providing immediate assistance during crises and disasters, ensuring communities have access to essential resources.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWYlMjBoZWxwfGVufDF8fHx8MTc1ODM5ODQ5MHww&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'Disaster response teams',
        'Emergency medical care',
        'Food and water distribution',
        'Temporary shelter',
        'Psychological support',
        'Recovery planning'
      ],
      impact: '5,000+ people assisted during emergencies',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'economic',
      icon: Briefcase,
      title: 'Economic Empowerment',
      subtitle: 'Creating Opportunities',
      description: 'Supporting economic development through job training, entrepreneurship programs, and sustainable livelihood initiatives.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzk4NDk0fDA&ixlib=rb-4.1.0&q=80&w=600',
      services: [
        'Vocational training',
        'Small business loans',
        'Financial literacy',
        'Market access support',
        'Cooperative development',
        'Women empowerment'
      ],
      impact: '600+ individuals trained',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const achievements = [
    { number: '45+', label: 'Active Programs', icon: Globe },
    { number: '2,500+', label: 'Lives Impacted', icon: Users },
    { number: '15', label: 'Communities', icon: Home },
    { number: '200+', label: 'Local Partners', icon: Heart }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              Our Programs & Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-primary">Community Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our integrated approach addresses the interconnected challenges facing communities, 
              from healthcare and education to economic empowerment and emergency response.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Our Core Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is designed to create sustainable impact while addressing immediate community needs.
            </p>
          </div>
          
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={program.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${program.bgColor}`}>
                        <program.icon className={`h-6 w-6 ${program.color}`} />
                      </div>
                      <Badge className={`${program.bgColor} ${program.color} hover:${program.bgColor}`}>
                        {program.subtitle}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg text-gray-900 mb-3">Key Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                       <div>
                         <div className="text-2xl font-bold text-primary mb-1">{program.impact.split(' ')[0]}</div>
                         <div className="text-gray-600 text-sm">{program.impact.split(' ').slice(1).join(' ')}</div>
                       </div>
                       <div className="space-x-3">
                         <Button 
                           className="bg-primary hover:bg-primary/90"
                           onClick={() => {
                             const pageMap: { [key: string]: string } = {
                               'healthcare': 'healthcare-access',
                               'education': 'education-support',
                               'community': 'community-development',
                               'child-welfare': 'child-welfare',
                               'emergency': 'emergency-relief'
                             };
                             onPageChange(pageMap[program.id] || 'contact');
                           }}
                         >
                           Learn More
                           <ArrowRight className="ml-2 h-4 w-4" />
                         </Button>
                         <Button 
                           variant="outline" 
                           className="border-primary text-primary hover:bg-primary/5"
                           onClick={() => onPageChange('contact')}
                         >
                           Get Involved
                         </Button>
                       </div>
                     </div>
                  </div>
                </div>
              </Card>
            ))}
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
            Join us in transforming communities and creating lasting positive change. 
            Whether through volunteering, partnerships, or donations, your involvement matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => onPageChange('contact')}
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white bg-primary text-white hover:bg-white/10"
              onClick={() => onPageChange('events')}
            >
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
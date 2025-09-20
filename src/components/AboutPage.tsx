import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Users, Globe, Award, Eye, Target, Compass } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every situation with empathy and understanding, treating all individuals with dignity and respect.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collective action and work collaboratively to strengthen communities from within.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Our programs are designed to create lasting change that communities can maintain and build upon.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our work, ensuring maximum impact for those we serve.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvcnxlbnwxfHx8fDE3NTgzOTg0NjN8MA&ixlib=rb-4.1.0&q=80&w=400',
      bio: '15+ years in international healthcare development with a focus on community-centered solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTgzOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Educational specialist with expertise in curriculum development and teacher training in underserved areas.'
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZG9jdG9yfGVufDF8fHx8MTc1ODM5ODQ2OXww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Pediatrician and public health expert dedicated to improving maternal and child health outcomes.'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Community Outreach Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4Mzk4NDcyfDA&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Community organizer with 10+ years of experience in grassroots mobilization and partnership building.'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              About Our Organization
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Serene Scheal Initiative was founded on the belief that every person deserves 
              access to quality healthcare, education, and opportunities for growth. We work 
              tirelessly to bridge gaps and build stronger, healthier communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2020, the Serene Scheal Initiative emerged from a simple yet powerful 
                  observation: many communities lack access to basic healthcare and educational 
                  resources that could transform lives.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small volunteer effort has grown into a comprehensive 
                  organization serving multiple communities. Our approach is rooted in partnership, 
                  sustainability, and the belief that lasting change comes from within communities themselves.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we work alongside local leaders, healthcare providers, educators, and 
                  families to create programs that address immediate needs while building long-term 
                  capacity for continued growth and development.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1747146114146-8b8597a53ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcGVvcGxlJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1ODM5ODQ0M3ww&ixlib=rb-4.1.0&q=80&w=600"
                alt="Community meeting and collaboration"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To improve the health, education, and overall well-being of underserved 
                  communities by providing sustainable, community-driven programs and resources.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  A world where every community has the resources, knowledge, and support 
                  needed to thrive, regardless of geographic or economic circumstances.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-600">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  We believe in collaborative, sustainable solutions that empower communities 
                  to take ownership of their development and create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our mission and ensure our programs 
              create meaningful, lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Impact Since 2020</h2>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
              These numbers represent real lives touched, communities strengthened, and hope restored.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">2,500+</div>
                <div className="text-green-200">Lives Directly Impacted</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">15</div>
                <div className="text-green-200">Communities Served</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">45+</div>
                <div className="text-green-200">Active Programs</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
                <div className="text-green-200">Local Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
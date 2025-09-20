import React from 'react';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center">
                <img 
                  src="https://sereneschealdev.vercel.app/assets/ssilogo-fhbCBJgc.jpg" 
                  alt="Serene Scheal Initiative" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg">Serene Scheal Initiative</h3>
                <p className="text-green-200 text-sm">Transforming Lives, Building Communities</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Dedicated to improving healthcare access, education, and community development 
              for children and families in need.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Programs', 'Events', 'Blog', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => onPageChange(link.toLowerCase())}
                  className="block text-green-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg">Our Programs</h4>
            <div className="space-y-2 text-sm text-green-100">
              <button 
                onClick={() => onPageChange('healthcare-access')}
                className="block hover:text-white transition-colors duration-200 cursor-pointer text-left"
              >
                Healthcare Access
              </button>
              <button 
                onClick={() => onPageChange('education-support')}
                className="block hover:text-white transition-colors duration-200 cursor-pointer text-left"
              >
                Education Support
              </button>
              <button 
                onClick={() => onPageChange('community-development')}
                className="block hover:text-white transition-colors duration-200 cursor-pointer text-left"
              >
                Community Development
              </button>
              <button 
                onClick={() => onPageChange('child-welfare')}
                className="block hover:text-white transition-colors duration-200 cursor-pointer text-left"
              >
                Child Welfare
              </button>
              <button 
                onClick={() => onPageChange('emergency-relief')}
                className="block hover:text-white transition-colors duration-200 cursor-pointer text-left"
              >
                Emergency Relief
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm text-green-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@serene-scheal.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Community Street, Health City, HC 12345</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white hover:bg-green-600">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white hover:bg-green-600">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-green-100 hover:text-white hover:bg-green-600">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm">
              © 2025 Serene Scheal Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-green-200">
              <button 
                onClick={() => onPageChange('privacy-policy')}
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onPageChange('terms-of-service')}
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => onPageChange('transparency')}
                className="hover:text-white transition-colors duration-200"
              >
                Transparency
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
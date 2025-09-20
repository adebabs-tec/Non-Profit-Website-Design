import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'events', label: 'Events' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center">
              <img 
                src="https://sereneschealdev.vercel.app/assets/ssilogo-fhbCBJgc.jpg" 
                alt="Serene Scheal Initiative" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg text-primary">Serene Scheal Initiative</h1>
              <p className="text-xs text-muted-foreground">Transforming Lives, Building Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => onPageChange('contact')}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-primary bg-green-50'
                      : 'text-gray-600 hover:text-primary hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="mx-4 mt-2 bg-primary hover:bg-primary/90"
                onClick={() => {
                  onPageChange('contact');
                  setIsMenuOpen(false);
                }}
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
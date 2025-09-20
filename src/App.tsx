import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProgramsPage } from './components/ProgramsPage';
import { EventsPage } from './components/EventsPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { HealthcareAccessPage } from './components/HealthcareAccessPage';
import { EducationSupportPage } from './components/EducationSupportPage';
import { CommunityDevelopmentPage } from './components/CommunityDevelopmentPage';
import { ChildWelfarePage } from './components/ChildWelfarePage';
import { EmergencyReliefPage } from './components/EmergencyReliefPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { TransparencyPage } from './components/TransparencyPage';
import { BlogPostPage } from './components/BlogPostPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    // Handle the blog post pages here (like blog-1, blog-2, etc.)
    if (currentPage.startsWith('blog-')) {
      const postId = currentPage.split('-')[1];
      return <BlogPostPage postId={postId} onPageChange={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage onPageChange={setCurrentPage} />;
      case 'events':
        return <EventsPage onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      
      // The individual Program Pages
      case 'healthcare-access':
        return <HealthcareAccessPage onPageChange={setCurrentPage} />;
      case 'education-support':
        return <EducationSupportPage onPageChange={setCurrentPage} />;
      case 'community-development':
        return <CommunityDevelopmentPage onPageChange={setCurrentPage} />;
      case 'child-welfare':
        return <ChildWelfarePage onPageChange={setCurrentPage} />;
      case 'emergency-relief':
        return <EmergencyReliefPage onPageChange={setCurrentPage} />;

      // The Legal Pages
      case 'privacy-policy':
        return <PrivacyPolicyPage onPageChange={setCurrentPage} />;
      case 'terms-of-service':
        return <TermsOfServicePage onPageChange={setCurrentPage} />;
      case 'transparency':
        return <TransparencyPage onPageChange={setCurrentPage} />;
      
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-0">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
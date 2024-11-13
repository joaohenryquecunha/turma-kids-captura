import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <ContactForm />
    </div>
  );
}
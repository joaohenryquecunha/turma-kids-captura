import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import TestimonialCard from './TestimonialCard';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            O Que Dizem Sobre Nós
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <TestimonialCard {...testimonial} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="mt-16 flex flex-col items-center justify-center bg-[#1a1a1a] p-8 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
              <span className="text-4xl font-bold text-white">4.9</span>
              <span className="text-gray-400 text-lg">/5</span>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < 4 || (i === 4 && Math.random() > 0.5) ? 'text-yellow-500 fill-current' : 'text-yellow-500/50 fill-current'}`} 
                />
              ))}
            </div>
            <p className="text-gray-400">
              Baseado em <span className="text-white font-semibold">4.768</span> avaliações
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
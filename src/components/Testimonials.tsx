import React from 'react';
import { Star } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Mãe",
      content: "Minha filha adora a Turma Kids! O aprendizado se tornou muito mais divertido e envolvente.",
      rating: 5
    },
    {
      name: "Prof. Carlos Santos",
      role: "Educador",
      content: "Uma plataforma incrível que complementa perfeitamente o ensino tradicional.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Psicopedagoga",
      content: "Os recursos são muito bem desenvolvidos e adequados para cada faixa etária.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            O Que Dizem Sobre Nós
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight, BookOpen, Gift } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function CallToAction() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="rainbow-gradient rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-white animate-bounce" />
                <h3 className="text-lg font-semibold text-white">Oferta Especial</h3>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Ganhe Uma História Demonstrativa!
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-white/90 mb-8">
                  Cadastre-se agora e receba gratuitamente acesso a uma de nossas histórias interativas. 
                  Descubra como tornamos o aprendizado uma aventura emocionante!
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        O que você vai receber:
                      </h4>
                      <ul className="text-white/80 space-y-2">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          História interativa completa
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          Atividades educativas
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          Jogos relacionados à história
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a href="#contact-form" className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold transition transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary group">
                  Quero Minha História Grátis
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
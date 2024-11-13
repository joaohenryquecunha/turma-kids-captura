import React from 'react';
import { BookOpen, Gamepad2, Music, Palette, Brain } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Leitura Interativa",
      description: "Histórias envolventes que estimulam a imaginação"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
      title: "Jogos Educativos",
      description: "Aprenda brincando com jogos divertidos"
    },
    {
      icon: <Music className="w-8 h-8 text-accent" />,
      title: "Música e Ritmo",
      description: "Desenvolvimento através da música"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Arte e Criatividade",
      description: "Explore o artista dentro de você"
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "Desafios Mentais",
      description: "Exercícios para desenvolver o raciocínio"
    }
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Recursos Incríveis para o Aprendizado
            </span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-background-dark p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
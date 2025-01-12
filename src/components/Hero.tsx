import React from 'react';
import { Sparkles, PlayCircle, Star } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-background-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <ScrollAnimation>
          <div className="animate-float flex flex-col items-center text-center space-y-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-2xl font-bold text-white">Turma Kids</h2>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Onde Aprender é
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                uma Aventura!
              </span>
            </h1>
            
            <p className="max-w-2xl text-xl text-gray-300">
              Junte-se a milhares de crianças felizes em uma jornada emocionante de descoberta, criatividade e diversão!
            </p>

            <div className="w-full max-w-4xl mx-auto mt-8">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Turma Kids - Aprendizado Divertido para Crianças"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            {[
              {
                icon: <Star className="w-8 h-8 text-accent" />,
                title: "Aprendizado Interativo",
                description: "Atividades envolventes que tornam o aprendizado divertido e memorável"
              },
              {
                icon: <PlayCircle className="w-8 h-8 text-primary" />,
                title: "Conteúdo Seguro",
                description: "Conteúdo educacional cuidadosamente selecionado para sua tranquilidade"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-secondary" />,
                title: "Criado por Especialistas",
                description: "Desenvolvido por especialistas em educação para um aprendizado ideal"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
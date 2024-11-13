import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=80',
    caption: 'Matemática Divertida',
    description: 'Aprenda matemática através de jogos interativos'
  },
  {
    url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&auto=format&fit=crop&q=80',
    caption: 'Ciências na Prática',
    description: 'Experimentos e descobertas emocionantes'
  },
  {
    url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1600&auto=format&fit=crop&q=80',
    caption: 'Arte & Criatividade',
    description: 'Desperte o artista que há em você'
  },
  {
    url: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=1600&auto=format&fit=crop&q=80',
    caption: 'Leitura & Histórias',
    description: 'Aventuras incríveis através dos livros'
  },
  {
    url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1600&auto=format&fit=crop&q=80',
    caption: 'Música & Movimento',
    description: 'Aprenda se divertindo com música e dança'
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-[#141414]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="h-full w-full object-cover brightness-75"
            />
            <div className="absolute inset-0 netflix-gradient">
              <div className="absolute bottom-16 left-16 right-16 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <h3 className="text-5xl font-bold text-white mb-4">
                    {images[currentIndex].caption}
                  </h3>
                  <p className="text-xl text-gray-200">
                    {images[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrevious}
          className="group rounded-full bg-black/30 p-3 backdrop-blur-sm transition-all hover:bg-black/60"
        >
          <ChevronLeft className="h-8 w-8 text-white opacity-75 transition-all group-hover:opacity-100" />
        </button>
        <button
          onClick={handleNext}
          className="group rounded-full bg-black/30 p-3 backdrop-blur-sm transition-all hover:bg-black/60"
        >
          <ChevronRight className="h-8 w-8 text-white opacity-75 transition-all group-hover:opacity-100" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
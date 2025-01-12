import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          loading="lazy"
        />
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}
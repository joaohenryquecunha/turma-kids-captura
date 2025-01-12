interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "Mãe",
    content: "Minha filha adora a Turma Kids! O aprendizado se tornou muito mais divertido e envolvente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Prof. Carlos Santos",
    role: "Educador",
    content: "Uma plataforma incrível que complementa perfeitamente o ensino tradicional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Mariana Costa",
    role: "Psicopedagoga",
    content: "Os recursos são muito bem desenvolvidos e adequados para cada faixa etária.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Pedro Oliveira",
    role: "Pai",
    content: "Meu filho melhorou muito na escola depois que começamos a usar a plataforma. Os PDFs são excelentes!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Julia Santos",
    role: "Mãe",
    content: "As histórias são incríveis! Minha filha pede para ler todos os dias. Melhor investimento que fiz.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
  },
  {
    name: "Ricardo Mendes",
    role: "Pai",
    content: "Material de altíssima qualidade. Meus filhos adoram e aprendem muito com as atividades.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  }
];
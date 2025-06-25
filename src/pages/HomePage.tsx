import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Image, Map, Users, FileText, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const years = Array.from({ length: 11 }, (_, i) => 1964 + i);
  
  useEffect(() => {
    yearRefs.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-8');
        }, 100 * index);
      }
    });
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Background years */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {years.map((year, index) => (
            <div
              key={year}
              ref={el => yearRefs.current[index] = el}
              className="absolute text-[120px] md:text-[180px] lg:text-[240px] font-serif font-black text-white/5 opacity-0 translate-y-8 transition-all duration-700"
              style={{
                left: `${Math.random() * 70}%`,
                top: `${Math.random() * 70}%`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {year}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 slide-up">
            Cuba <span className="text-accent">1964-1974</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 slide-up" style={{animationDelay: '0.2s'}}>
            Explorando una década de historia, innovación y las notables contribuciones del Instituto Superior Politécnico José Antonio Echeverría.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 slide-up" style={{animationDelay: '0.4s'}}>
            <Link to="/timeline" className="btn btn-primary">
              <span>Explorar Línea de Tiempo</span>
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white hover:text-neutral-900">
              <span>Sobre el Proyecto</span>
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Historical Context Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl mb-4">Contexto Histórico</h2>
              <p className="text-lg mb-6">
                El período de 1964 a 1974 fue transformador para Cuba, marcado por un rápido desarrollo en educación, ciencia y tecnología. El Instituto Superior Politécnico José Antonio Echeverría (CUJAE) jugó un papel fundamental en esta transformación.
              </p>
              <p className="text-lg mb-6">
                Durante esta década, la CUJAE se convirtió en un centro de innovación, formando ingenieros y científicos que contribuyeron significativamente a la infraestructura, desarrollo industrial y avance tecnológico de la nación.
              </p>
              <Link to="/about" className="btn btn-primary">
                Conoce Más Sobre Esta Era
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-tl-lg"></div>
              <img 
                src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg" 
                alt="Foto histórica representando el desarrollo educativo cubano" 
                className="relative z-10 rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-4xl mb-6">Comienza Tu Viaje Histórico</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Sumérgete en esta década crucial de la historia cubana a través de nuestra línea de tiempo interactiva, contenido multimedia y recursos completos.
          </p>
          <Link to="/timeline" className="btn bg-white text-primary hover:bg-neutral-100">
            <span>Explorar la Línea de Tiempo</span>
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
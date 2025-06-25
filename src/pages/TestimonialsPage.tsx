import React, { useState, useEffect, useRef } from 'react';
import { Quote, Search, User, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import testimonialsData from '../data/testimonialsData';

const TestimonialsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData.find(t => t.featured) || testimonialsData[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const featuredRef = useRef<HTMLDivElement>(null);
  
  // Get unique years for filter
  const years = Array.from(new Set(testimonialsData.map(item => item.year))).sort();
  
  // Filter testimonials based on search and year
  const filteredTestimonials = testimonialsData.filter(item => {
    const matchesSearch = 
      searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === null || item.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });
  
  // Handle testimonial selection
  const selectTestimonial = (testimonial: typeof activeTestimonial) => {
    setActiveTestimonial(testimonial);
    setIsExpanded(false);
    
    // Scroll to featured section
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Get next and previous testimonials
  const getAdjacentTestimonials = () => {
    if (!activeTestimonial) return { prev: null, next: null };
    
    const currentIndex = testimonialsData.findIndex(t => t.id === activeTestimonial.id);
    
    const prev = currentIndex > 0 ? testimonialsData[currentIndex - 1] : null;
    const next = currentIndex < testimonialsData.length - 1 ? testimonialsData[currentIndex + 1] : null;
    
    return { prev, next };
  };
  
  const { prev, next } = getAdjacentTestimonials();

  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent text-neutral-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Testimonios Históricos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce las experiencias de personas que vivieron y contribuyeron a la historia de la CUJAE durante este periodo crucial.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section ref={featuredRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={activeTestimonial?.image} 
                    alt={activeTestimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-lg">{activeTestimonial?.year}</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="testimonial-card border-accent">
                <Quote size={32} className="text-accent mb-4" />
                <p className="text-xl font-serif italic mb-6">
                  {isExpanded ? activeTestimonial?.fullText : activeTestimonial?.quote}
                </p>
                
                {activeTestimonial?.fullText !== activeTestimonial?.quote && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-accent hover:underline inline-flex items-center mb-6"
                  >
                    <span>{isExpanded ? 'Mostrar menos' : 'Leer completo'}</span>
                    {!isExpanded && <ArrowRight size={16} className="ml-1" />}
                  </button>
                )}
                
                <div className="border-t border-neutral-200 pt-4">
                  <h3 className="font-bold text-lg">{activeTestimonial?.name}</h3>
                  <p className="text-neutral-600">{activeTestimonial?.role}</p>
                </div>
              </div>
              
              {/* Navigation for next/prev testimonials */}
              <div className="flex justify-between mt-6">
                <button 
                  onClick={() => prev && selectTestimonial(prev)}
                  className={`p-2 rounded-md flex items-center ${prev ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-300 cursor-not-allowed'}`}
                  disabled={!prev}
                >
                  <ArrowLeft size={20} className="mr-1" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>
                
                <button 
                  onClick={() => next && selectTestimonial(next)}
                  className={`p-2 rounded-md flex items-center ${next ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-300 cursor-not-allowed'}`}
                  disabled={!next}
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ArrowRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative md:w-1/3">
              <input
                type="text"
                placeholder="Buscar en testimonios..."
                className="search-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>
            
            <div className="flex items-center">
              <Calendar size={18} className="text-neutral-500 mr-2" />
              <span className="text-sm font-medium mr-2">Año:</span>
              <select 
                className="rounded-md border-neutral-300 focus:border-accent focus:ring focus:ring-accent/20"
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Todos</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Todos los Testimonios</h2>
          
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card border-l-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${activeTestimonial?.id === testimonial.id ? 'ring-2 ring-accent' : ''}`}
                  onClick={() => selectTestimonial(testimonial)}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <div className="flex items-center text-sm text-neutral-600">
                        <User size={14} className="mr-1" />
                        <span className="mr-3">{testimonial.role}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{testimonial.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="italic line-clamp-3 text-neutral-700 mb-3">"{testimonial.quote}"</p>
                  
                  <button className="text-accent hover:underline text-sm inline-flex items-center">
                    <span>Ver completo</span>
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-neutral-400 text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl mb-2">No se encontraron testimonios</h3>
              <p className="text-neutral-600">
                Intenta ajustar los filtros o la búsqueda para encontrar lo que estás buscando.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedYear(null);
                }}
                className="mt-4 btn btn-outline"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Share Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4">¿Tienes una historia que compartir?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Si fuiste parte de la CUJAE durante este periodo histórico, nos encantaría conocer tu experiencia y preservarla como parte de esta memoria colectiva.
          </p>
          <a href="#" className="btn btn-accent">
            Comparte tu testimonio
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
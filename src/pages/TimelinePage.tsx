import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, Search } from 'lucide-react';
import timelineData from '../data/timelineData';

// Define category types for filtering
type Category = 'all' | 'historical' | 'academic' | 'research' | 'cultural';

const TimelinePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Years in our timeline range
  const years = Array.from({ length: 11 }, (_, i) => 1964 + i);
  
  // Filter timeline data based on search and category
  const filteredData = timelineData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Línea de tiempo interactiva</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore los principales acontecimientos, hitos y contribuciones de la CUJAE entre 1964 y 1974, una década transformadora en la historia de Cuba.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex items-center">
              <Filter size={20} className="text-neutral-500 mr-2" />
              <span className="text-neutral-700 font-medium mr-4">Filtrar por:</span>
              <div className="flex flex-wrap">
                {[
                  {id: 'all', label: 'Todo'},
                  {id: 'historical', label: 'Histórico'},
                  {id: 'academic', label: 'Académico'},
                  {id: 'research', label: 'Investigación'},
                  {id: 'cultural', label: 'Cultural'}
                ].map(category => (
                  <button
                    key={category.id}
                    className={`filter-chip ${selectedCategory === category.id ? 'filter-chip-active' : 'filter-chip-inactive'}`}
                    onClick={() => setSelectedCategory(category.id as Category)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder="Buscar..."
                className="search-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="bg-white border-t border-b border-neutral-200 py-4 sticky top-[116px] z-20">
        <div className="container mx-auto">
          <div className="timeline-scroll flex space-x-4 py-2 overflow-x-auto px-4">
            {years.map(year => (
              <a
                key={year}
                href={`#year-${year}`}
                className="flex-shrink-0 px-4 py-2 rounded-full bg-neutral-100 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {year}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredData.length > 0 ? (
            <div>
              {years.map(year => {
                const yearEvents = filteredData.filter(event => event.year === year);
                if (yearEvents.length === 0) return null;
                
                return (
                  <div key={year} id={`year-${year}`} className="mb-16 scroll-mt-40">
                    <div className="flex items-center mb-8">
                      <div className="year-marker">{year}</div>
                      <h2 className="font-serif font-bold text-3xl ml-4">{year}</h2>
                    </div>
                    
                    <div className="space-y-8 pl-6">
                      {yearEvents.map((event, index) => (
                        <div key={index} className="timeline-item fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="timeline-dot"></div>
                          <div className="card p-6">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 
                              ${event.category === 'Histórico' ? 'bg-primary/10 text-primary' : 
                                event.category === 'Académico' ? 'bg-primary/10 text-primary' : 
                                event.category === 'Investigación' ? 'bg-primary/10 text-primary' : 
                                'bg-primary/10 text-primary'}`}>
                              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                            </span>
                            <h3 className="font-serif text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-neutral-600 mb-4">{event.description}</p>
                            <Link 
                              to={`/timeline/${year}?event=${encodeURIComponent(event.title)}`}
                              className="inline-flex items-center text-primary hover:underline"
                            >
                              <span>Leer más</span>
                              <ChevronRight size={16} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-neutral-400 text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl mb-2">No results found</h3>
              <p className="text-neutral-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 btn btn-outline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
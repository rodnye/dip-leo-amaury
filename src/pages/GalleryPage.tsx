import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Calendar, Tag, Download, ZoomIn, ZoomOut, X } from 'lucide-react';
import galleryData from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const itemParam = searchParams.get('item');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState(galleryData.find(item => item.id === itemParam) || null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Get unique years for filter
  const years = Array.from(new Set(galleryData.map(item => item.year))).sort();
  
  // Get unique types for filter
  const types = ['photo', 'document', 'infographic'];
  
  // Filter gallery items
  const filteredItems = galleryData.filter(item => {
    const matchesSearch = 
      searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    const matchesYear = selectedYear === null || item.year === selectedYear;
    
    return matchesSearch && matchesType && matchesYear;
  });
  
  useEffect(() => {
    if (itemParam) {
      const item = galleryData.find(item => item.id === itemParam);
      if (item) {
        setSelectedItem(item);
        setIsLightboxOpen(true);
      }
    }
  }, [itemParam]);
  
  // Close lightbox function
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsZoomed(false);
    setSelectedItem(null);
  };
  
  // Toggle zoom function
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Galería Histórica</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora fotografías, documentos e infografías que ilustran la rica historia de la CUJAE y su impacto en Cuba entre 1964 y 1974.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative md:w-1/3">
              <input
                type="text"
                placeholder="Buscar en la galería..."
                className="search-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center">
                <Filter size={18} className="text-neutral-500 mr-2" />
                <span className="text-sm font-medium mr-2">Tipo:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary/20"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">Todos</option>
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'photo' ? 'Fotografías' : 
                        type === 'document' ? 'Documentos' : 'Infografías'}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center">
                <Calendar size={18} className="text-neutral-500 mr-2" />
                <span className="text-sm font-medium mr-2">Año:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-secondary focus:ring focus:ring-secondary/20"
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsLightboxOpen(true);
                  }}
                >
                  <div className="h-48 overflow-hidden bg-neutral-200 relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {item.year}
                    </div>
                    <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium
                      ${item.type === 'photo' ? 'bg-primary/90 text-white' : 
                        item.type === 'document' ? 'bg-secondary/90 text-white' : 
                        'bg-accent/90 text-neutral-900'}`}>
                      {item.type === 'photo' ? 'Fotografía' : 
                        item.type === 'document' ? 'Documento' : 'Infografía'}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Fuente: {item.source}</span>
                      <span className="text-secondary text-sm">Ver detalles</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-neutral-400 text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl mb-2">No se encontraron resultados</h3>
              <p className="text-neutral-600">
                Intenta ajustar los filtros o la búsqueda para encontrar lo que estás buscando.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedYear(null);
                }}
                className="mt-4 btn btn-secondary"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col">
            {/* Lightbox Header */}
            <div className="bg-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <div>
                  <h3 className="font-serif font-bold text-xl">{selectedItem.title}</h3>
                  <p className="text-neutral-600 text-sm">{selectedItem.year} | {selectedItem.source}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleZoom}
                    className="p-2 rounded-full hover:bg-neutral-100"
                    aria-label={isZoomed ? "Reducir zoom" : "Ampliar zoom"}
                  >
                    {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                  </button>
                  <button 
                    onClick={closeLightbox}
                    className="p-2 rounded-full hover:bg-neutral-100"
                    aria-label="Cerrar"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Lightbox Content */}
            <div className="flex-grow overflow-auto bg-neutral-900 flex items-center justify-center">
              <div 
                className={`transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={toggleZoom}
              >
                <img 
                  src={selectedItem.fullImage}
                  alt={selectedItem.title}
                  className="max-h-[calc(100vh-8rem)] w-auto"
                />
              </div>
            </div>
            
            {/* Lightbox Footer */}
            <div className="bg-white p-4">
              <div className="container mx-auto">
                <p className="text-neutral-700 mb-3">{selectedItem.description}</p>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                    {selectedItem.tags && selectedItem.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={selectedItem.fullImage} 
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn btn-secondary text-sm py-2"
                  >
                    <Download size={16} className="mr-2" />
                    Descargar imagen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
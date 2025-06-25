import React, { useState } from 'react';
import { Search, Filter, Download, FileText, Book, File, ExternalLink, BookOpen } from 'lucide-react';

interface Resource {
  id: string;
  type: 'document' | 'paper' | 'guide';
  title: string;
  author: string;
  year: number;
  description: string;
  fileFormat: 'PDF' | 'DOCX' | 'TXT';
  fileSize: string;
  downloadUrl: string;
  category: 'historical' | 'academic' | 'research';
}

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample resources data
  const resources: Resource[] = [
    {
      id: 'doc-001',
      type: 'document',
      title: 'Decreto de Fundación de la CUJAE',
      author: 'Ministerio de Educación Superior',
      year: 1964,
      description: 'Documento oficial que establece la creación del Instituto Superior Politécnico José Antonio Echeverría. Incluye los fundamentos legales y objetivos iniciales de la institución.',
      fileFormat: 'PDF',
      fileSize: '2.4 MB',
      downloadUrl: '#',
      category: 'historical'
    },
    {
      id: 'paper-001',
      type: 'paper',
      title: 'Desarrollo de la Ingeniería Cubana 1964-1974',
      author: 'Dr. Carlos Rodríguez',
      year: 1985,
      description: 'Estudio histórico sobre el desarrollo de la ingeniería en Cuba durante la primera década de la CUJAE. Analiza los principales logros y desafíos enfrentados.',
      fileFormat: 'PDF',
      fileSize: '3.7 MB',
      downloadUrl: '#',
      category: 'historical'
    },
    {
      id: 'guide-001',
      type: 'guide',
      title: 'La CUJAE y su Impacto en la Educación Superior: Guía Didáctica',
      author: 'Departamento de Historia de la Ciencia',
      year: 2010,
      description: 'Material educativo que explora la influencia de la CUJAE en el sistema de educación superior cubano. Incluye actividades y recursos para docentes.',
      fileFormat: 'PDF',
      fileSize: '5.1 MB',
      downloadUrl: '#',
      category: 'academic'
    },
    {
      id: 'paper-002',
      type: 'paper',
      title: 'Innovaciones Tecnológicas Desarrolladas en la CUJAE (1965-1970)',
      author: 'Ing. Alejandro Morales',
      year: 1992,
      description: 'Investigación académica sobre las principales innovaciones tecnológicas desarrolladas en los laboratorios de la CUJAE durante sus primeros años.',
      fileFormat: 'PDF',
      fileSize: '4.2 MB',
      downloadUrl: '#',
      category: 'research'
    },
    {
      id: 'doc-002',
      type: 'document',
      title: 'Memorias del Primer Simposio Internacional de Ingeniería Tropical',
      author: 'Comité Organizador CUJAE',
      year: 1969,
      description: 'Compilación de ponencias y conclusiones del primer simposio internacional organizado por la CUJAE, un evento pionero en su campo.',
      fileFormat: 'PDF',
      fileSize: '8.3 MB',
      downloadUrl: '#',
      category: 'academic'
    },
    {
      id: 'guide-002',
      type: 'guide',
      title: 'El Campus de la CUJAE: Arquitectura y Modernidad',
      author: 'Facultad de Arquitectura',
      year: 2005,
      description: 'Guía arquitectónica del campus de la CUJAE, analizando su diseño modernista y la filosofía detrás de su planificación espacial.',
      fileFormat: 'PDF',
      fileSize: '6.7 MB',
      downloadUrl: '#',
      category: 'historical'
    },
    {
      id: 'paper-003',
      type: 'paper',
      title: 'Contribuciones de la CUJAE a la Industrialización Cubana',
      author: 'Dra. Luisa Martínez',
      year: 2000,
      description: 'Análisis histórico de cómo las investigaciones y los profesionales formados en la CUJAE contribuyeron al proceso de industrialización de Cuba.',
      fileFormat: 'PDF',
      fileSize: '3.9 MB',
      downloadUrl: '#',
      category: 'research'
    },
    {
      id: 'doc-003',
      type: 'document',
      title: 'Plan de Estudios Original de Ingeniería Civil (1964)',
      author: 'Departamento de Ingeniería Civil',
      year: 1964,
      description: 'Documento histórico que muestra el primer plan de estudios implementado para la carrera de Ingeniería Civil en la CUJAE.',
      fileFormat: 'PDF',
      fileSize: '1.8 MB',
      downloadUrl: '#',
      category: 'academic'
    },
    {
      id: 'guide-003',
      type: 'guide',
      title: 'Línea de Tiempo Interactiva: Historia de la CUJAE',
      author: 'Departamento de Historia',
      year: 2015,
      description: 'Recurso educativo multimedia que presenta cronológicamente los hitos más importantes en la historia de la institución.',
      fileFormat: 'PDF',
      fileSize: '9.2 MB',
      downloadUrl: '#',
      category: 'historical'
    },
    {
      id: 'paper-004',
      type: 'paper',
      title: 'La Investigación en Energía Solar: Pioneros de la CUJAE',
      author: 'Dr. Roberto García',
      year: 1998,
      description: 'Estudio sobre los primeros proyectos de investigación en energía solar desarrollados en la CUJAE a partir de 1967.',
      fileFormat: 'PDF',
      fileSize: '3.3 MB',
      downloadUrl: '#',
      category: 'research'
    }
  ];
  
  // Filter resources
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });
  
  // Get icon based on resource type
  const getResourceIcon = (type: string, className: string = '') => {
    switch(type) {
      case 'document':
        return <FileText className={className} />;
      case 'paper':
        return <BookOpen className={className} />;
      case 'guide':
        return <Book className={className} />;
      default:
        return <File className={className} />;
    }
  };
  
  // Get color based on resource category
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'historical':
        return 'bg-primary/10 text-primary';
      case 'academic':
        return 'bg-secondary/10 text-secondary';
      case 'research':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Recursos Educativos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Accede a documentos históricos, investigaciones académicas y materiales educativos sobre la CUJAE y su impacto en la historia de Cuba.
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
                placeholder="Buscar recursos..."
                className="search-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Filter size={18} className="text-neutral-500 mr-2" />
                <span className="text-sm font-medium mr-2">Tipo:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="document">Documentos</option>
                  <option value="paper">Investigaciones</option>
                  <option value="guide">Guías</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <Filter size={18} className="text-neutral-500 mr-2" />
                <span className="text-sm font-medium mr-2">Categoría:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-primary focus:ring focus:ring-primary/20"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">Todas</option>
                  <option value="historical">Histórica</option>
                  <option value="academic">Académica</option>
                  <option value="research">Investigación</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md">
              {filteredResources.map((resource, index) => (
                <div 
                  key={resource.id} 
                  className={`resource-item p-6 ${index !== filteredResources.length - 1 ? 'border-b border-neutral-200' : ''}`}
                >
                  <div className="flex-shrink-0 w-10 mr-4">
                    {getResourceIcon(resource.type, 'text-neutral-700')}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h3 className="font-serif font-bold text-lg">{resource.title}</h3>
                        <p className="text-neutral-600 text-sm">{resource.author}, {resource.year}</p>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                        {resource.category === 'historical' ? 'Histórico' : 
                          resource.category === 'academic' ? 'Académico' : 'Investigación'}
                      </span>
                    </div>
                    <p className="text-neutral-700 mb-4">{resource.description}</p>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="text-sm text-neutral-500">
                        <span className="mr-3">{resource.fileFormat}</span>
                        <span>{resource.fileSize}</span>
                      </div>
                      <div className="flex space-x-2">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-neutral-700 hover:text-primary"
                          aria-label="Ver detalles"
                        >
                          <ExternalLink size={18} />
                          <span className="ml-1">Ver</span>
                        </a>
                        <a 
                          href={resource.downloadUrl} 
                          className="btn btn-outline text-sm py-1"
                        >
                          <Download size={16} className="mr-1" />
                          Descargar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <div className="text-neutral-400 text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl mb-2">No se encontraron recursos</h3>
              <p className="text-neutral-600">
                Intenta ajustar los filtros o la búsqueda para encontrar lo que estás buscando.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedCategory('all');
                }}
                className="mt-4 btn btn-outline"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Reference Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Fuentes y Referencias</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <p className="mb-6">
              Todos los documentos y recursos educativos presentados en esta sección han sido recopilados de las siguientes fuentes oficiales y archivos históricos:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <BookOpen size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Archivo Histórico de la CUJAE</span> - Repositorio oficial de documentos históricos de la institución.
                </span>
              </li>
              <li className="flex items-start">
                <BookOpen size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Biblioteca Nacional José Martí</span> - Sección de Historia de la Educación Superior.
                </span>
              </li>
              <li className="flex items-start">
                <BookOpen size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Ministerio de Educación Superior de Cuba</span> - Archivos históricos del período 1960-1980.
                </span>
              </li>
              <li className="flex items-start">
                <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Revista Cubana de Educación Superior</span> - Publicaciones académicas sobre la historia de las instituciones educativas.
                </span>
              </li>
              <li className="flex items-start">
                <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Facultades de la CUJAE</span> - Archivos departamentales y memorias históricas.
                </span>
              </li>
            </ul>
            
            <p className="mt-6 text-neutral-600 text-sm">
              Todos los documentos están disponibles para uso educativo y de investigación. Para utilizar estos materiales con fines de publicación, por favor contacte con las respectivas fuentes originales para obtener los permisos correspondientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
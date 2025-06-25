import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Download, BookOpen } from 'lucide-react';
import timelineData from '../data/timelineData';
import galleryData from '../data/galleryData';

interface RelatedContent {
  type: 'image' | 'document' | 'testimonial';
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const YearDetailPage: React.FC = () => {
  const { year } = useParams<{ year: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const eventParam = searchParams.get('event');
  
  const [relatedContent, setRelatedContent] = useState<RelatedContent[]>([]);
  
  const numericYear = year ? parseInt(year) : null;
  
  // Find the event based on URL parameters
  const event = numericYear ? 
    timelineData.find(e => e.year === numericYear && e.title === eventParam) : 
    null;
  
  // Get events from the same year
  const eventsFromSameYear = numericYear ? 
    timelineData.filter(e => e.year === numericYear && e.title !== eventParam) : 
    [];
  
  // Get previous and next years
  const prevYear = numericYear && numericYear > 1964 ? numericYear - 1 : null;
  const nextYear = numericYear && numericYear < 1974 ? numericYear + 1 : null;

  useEffect(() => {
    // Find related content from gallery data
    if (numericYear) {
      const yearGalleryItems = galleryData.filter(item => 
        item.year === numericYear || 
        (item.tags && item.tags.includes(event?.category || ''))
      );
      
      // Convert gallery items to related content format (limited to 3)
      const newRelatedContent: RelatedContent[] = yearGalleryItems.slice(0, 3).map(item => ({
        type: item.type === 'photo' ? 'image' : 'document',
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
        link: `/gallery?item=${encodeURIComponent(item.id)}`
      }));
      
      setRelatedContent(newRelatedContent);
    }
  }, [numericYear, event]);

  // If year or event not found, show error state
  if (!numericYear || !event) {
    return (
      <div className="min-h-screen pt-16 flex flex-col items-center justify-center bg-neutral-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Event Not Found</h1>
          <p className="text-neutral-600 mb-6">
            We couldn't find the historical event you're looking for. It may have been removed or the URL might be incorrect.
          </p>
          <Link to="/timeline" className="btn btn-primary">
            <ArrowLeft size={18} className="mr-2" />
            Regresar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Year Navigation */}
      <div className="sticky top-16 z-30 bg-neutral-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            
            <div className="text-lg font-serif font-bold">{numericYear}</div>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link 
            to="/timeline" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Regresar</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 
              ${event.category === 'historical' ? 'bg-primary/10 text-primary' : 
                event.category === 'academic' ? 'bg-secondary/10 text-secondary' : 
                event.category === 'research' ? 'bg-accent/10 text-accent' : 
                'bg-neutral-100 text-neutral-700'}`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
            
            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6">{event.title}</h1>
            
            {/* Detailed content */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-lg text-neutral-700">{event.description}</p>
                
                {/* This would be replaced with real content from an API or CMS */}
                <p>
                  Este acontecimiento histórico marcó un momento crucial en el desarrollo de la CUJAE y su contribución al avance tecnológico y educativo de Cuba. Durante este período, la institución fortaleció su papel como centro de formación de ingenieros y científicos comprometidos con el desarrollo nacional.
                </p>
                
                <h2>Contexto Histórico</h2>
                <p>
                  En el contexto de los desafíos económicos y políticos que enfrentaba Cuba en esta época, la CUJAE emergió como un pilar fundamental en la estrategia nacional para desarrollar capacidades científicas y tecnológicas autóctonas. Los esfuerzos se centraron en formar profesionales capaces de resolver los problemas específicos del país y contribuir a su desarrollo sostenible.
                </p>
                
                <h2>Impacto y Legado</h2>
                <p>
                  El legado de este acontecimiento sigue vigente en la actualidad, habiendo sentado las bases para numerosos avances en la ingeniería y las ciencias aplicadas en Cuba. Los métodos y enfoques desarrollados durante este período continúan influyendo en la educación superior cubana y en la forma en que se abordan los desafíos tecnológicos nacionales.
                </p>
                
                <blockquote>
                  "La formación de ingenieros con conciencia social y capacidad técnica fue el objetivo principal de la CUJAE, creando una generación de profesionales que transformaría la infraestructura y capacidad tecnológica de Cuba."
                </blockquote>
              </div>
              
              {/* Event image */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg`} 
                  alt={event.title}
                  className="w-full h-auto"
                />
                <div className="bg-neutral-100 p-3 text-sm text-neutral-600">
                  Imagen representativa de las actividades académicas en la CUJAE durante este período histórico.
                </div>
              </div>
            </div>
            
            {/* References and Sources */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-serif text-xl font-bold mb-4">Referencias y Fuentes</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <BookOpen size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Rodríguez, A. (1998).</span> Historia de la educación técnica en Cuba. Editorial Científico-Técnica, La Habana.
                  </span>
                </li>
                <li className="flex items-start">
                  <BookOpen size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Pérez, L. (2005).</span> La CUJAE y su impacto en el desarrollo tecnológico de Cuba. Revista Cubana de Educación Superior, 25(2), 45-62.
                  </span>
                </li>
                <li className="flex items-start">
                  <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                  <span>
                    <a href="#" className="text-primary hover:underline">Archivo Histórico Nacional de Cuba</a>: Documentos sobre la fundación y desarrollo de instituciones educativas, 1959-1980.
                  </span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-neutral-200">

              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Year Context */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="font-serif text-xl font-bold mb-4">Contexto Histórico: {numericYear}</h2>
              <p className="text-neutral-700 mb-4">
                {numericYear} fue un año de importantes transformaciones en Cuba, caracterizado por avances en la educación superior y el desarrollo de capacidades científicas nacionales.
              </p>
              <Link 
                to={`/timeline/${numericYear}`}
                className="text-primary hover:underline inline-flex items-center"
              >
                <span>Ver todos los eventos de {numericYear}</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Other Events from Same Year */}
            {eventsFromSameYear.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="font-serif text-xl font-bold mb-4">Otros acontecimientos de {numericYear}</h2>
                <div className="space-y-4">
                  {eventsFromSameYear.map((otherEvent, index) => (
                    <div key={index} className="pb-4 border-b border-neutral-100 last:border-0">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-1
                        ${otherEvent.category === 'Histórico' ? 'bg-primary/10 text-primary' : 
                          otherEvent.category === 'Académico' ? 'bg-secondary/10 text-secondary' : 
                          otherEvent.category === 'Investigación' ? 'bg-accent/10 text-accent' : 
                          'bg-neutral-100 text-neutral-700'}`}>
                        {otherEvent.category.charAt(0).toUpperCase() + otherEvent.category.slice(1)}
                      </span>
                      <h3 className="font-medium mb-1">{otherEvent.title}</h3>
                      <p className="text-sm text-neutral-600 mb-2">{otherEvent.description.substring(0, 100)}...</p>
                      <Link 
                        to={`/timeline/${numericYear}?event=${encodeURIComponent(otherEvent.title)}`}
                        className="text-primary hover:underline text-sm inline-flex items-center"
                      >
                        <span>Leer más</span>
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearDetailPage;
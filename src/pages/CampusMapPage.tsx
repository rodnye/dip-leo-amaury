import React, { useState } from 'react';
import { X, Info, ChevronRight } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  year: number;
  image: string;
}

const CampusMapPage: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  
  // Sample hotspots data (in a real app, this would come from a data file or API)
  const hotspots: Hotspot[] = [
    {
      id: 'building-rectorado',
      x: 25,
      y: 35,
      title: 'Edificio del Rectorado',
      description: 'Sede administrativa principal de la CUJAE, inaugurada en 1964 como parte del complejo original del campus. Este edificio albergaba las oficinas de dirección de la universidad y espacios para reuniones académicas importantes.',
      year: 1964,
      image: 'https://images.pexels.com/photos/158571/architecture-about-building-modern-158571.jpeg'
    },
    {
      id: 'lab-structures',
      x: 45,
      y: 60,
      title: 'Laboratorio de Estructuras',
      description: 'Establecido en 1965, fue el primer laboratorio especializado en investigación estructural, fundamental para el desarrollo de técnicas constructivas adaptadas a las condiciones cubanas.',
      year: 1965,
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg'
    },
    {
      id: 'faculty-electrical',
      x: 72,
      y: 42,
      title: 'Facultad de Ingeniería Eléctrica',
      description: 'Establecida como entidad independiente en 1966, se convirtió en un centro de referencia para la formación de especialistas en electricidad, electrónica y automatización.',
      year: 1966,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg'
    },
    {
      id: 'central-library',
      x: 52,
      y: 22,
      title: 'Biblioteca Científica Central',
      description: 'Inaugurada en 1969, se convirtió en uno de los repositorios más importantes de literatura técnica en el Caribe, fundamental para la investigación y docencia.',
      year: 1969,
      image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg'
    },
    {
      id: 'computer-lab',
      x: 84,
      y: 75,
      title: 'Laboratorios de Computación',
      description: 'Establecidos en 1971, marcaron el inicio de la era informática en la educación superior técnica cubana, revolucionando las metodologías de enseñanza e investigación.',
      year: 1971,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      id: 'biotech-research',
      x: 15,
      y: 68,
      title: 'Centro de Investigación Biotecnológica',
      description: 'Iniciado en 1973, este centro pionero estableció las bases para el posterior desarrollo de la biotecnología en Cuba, que llegaría a ser un sector estratégico para el país.',
      year: 1973,
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg'
    }
  ];

  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Mapa Histórico del Campus</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explora los lugares emblemáticos del campus de la CUJAE y descubre su importancia histórica durante el periodo 1964-1974.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="p-4 bg-neutral-200 rounded-lg mb-6">
            <div className="flex items-start">
              <Info size={20} className="text-neutral-700 mr-2 flex-shrink-0 mt-1" />
              <p className="text-sm text-neutral-700">
                Haz clic en los puntos marcados en el mapa para obtener información sobre lugares históricos significativos del campus de la CUJAE.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              {/* Campus Map Image */}
              <div className="relative w-full aspect-[4/3] bg-neutral-300 overflow-hidden">
                {/* This would be a real campus map image in a production application */}
                <div className="absolute inset-0 w-full h-full bg-neutral-200 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg" 
                    alt="Mapa del Campus CUJAE"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                </div>
                
                {/* Hotspots */}
                {hotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    className="map-hotspot text-white"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onClick={() => setSelectedHotspot(hotspot)}
                    aria-label={hotspot.title}
                  >
                    <span className="sr-only">{hotspot.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-neutral-900/80 text-white">
                <p className="text-center text-sm md:text-base">
                  Mapa interactivo del campus de la CUJAE destacando ubicaciones históricas significativas (1964-1974)
                </p>
              </div>
            </div>
            
            {/* Selected Hotspot Information */}
            {selectedHotspot && (
              <div className="p-6 border-t border-neutral-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-serif font-bold text-2xl">{selectedHotspot.title}</h2>
                    <p className="text-neutral-600">Establecido en {selectedHotspot.year}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedHotspot(null)}
                    className="p-1 rounded-full hover:bg-neutral-100"
                    aria-label="Cerrar"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-neutral-700 mb-4">{selectedHotspot.description}</p>
                    <a href="#" className="text-primary hover:underline inline-flex items-center">
                      <span>Más información histórica</span>
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={selectedHotspot.image} 
                      alt={selectedHotspot.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Connection */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl mb-6">Explora la historia completa</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Para conocer más sobre estos lugares emblemáticos y su contexto histórico, visita nuestra línea de tiempo interactiva con todos los acontecimientos relevantes.
          </p>
          <a href="/timeline" className="btn btn-primary">
            Ver línea de tiempo
          </a>
        </div>
      </section>
    </div>
  );
};

export default CampusMapPage;
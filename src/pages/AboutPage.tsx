import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Clock, Users, Map, Image, FileText, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Sobre Este Proyecto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce más sobre la iniciativa para preservar y difundir la historia de la CUJAE y su impacto en el desarrollo tecnológico y educativo de Cuba.
          </p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl mb-6">Preservando la Historia</h2>
              <p className="text-lg mb-4">
                Este proyecto nació con el objetivo de documentar, preservar y difundir la historia de la CUJAE durante sus primeros diez años de existencia (1964-1974), un período formativo crucial tanto para la institución como para el desarrollo técnico y científico de Cuba.
              </p>
              <p className="text-lg mb-4">
                A través de una extensa investigación en archivos históricos, testimonios orales y documentación oficial, hemos recopilado materiales que permiten reconstruir la trayectoria de esta importante institución educativa y su contribución al país.
              </p>
              <p className="text-lg">
                La plataforma está diseñada para servir como recurso educativo y de investigación, accesible tanto para académicos como para el público general interesado en la historia de la educación superior y el desarrollo tecnológico en Cuba.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-lg"></div>
              <img 
                src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg" 
                alt="Investigación histórica"
                className="relative z-10 rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-4xl mb-12 text-center">Características del Proyecto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <Clock size={32} className="text-primary mb-4" />
              <h3 className="font-serif text-xl mb-2">Línea de Tiempo Interactiva</h3>
              <p className="text-neutral-600 mb-4">
                Exploración cronológica de eventos históricos, logros académicos e hitos importantes en el desarrollo de la CUJAE entre 1964 y 1974.
              </p>
              <Link to="/timeline" className="text-primary hover:underline inline-flex items-center">
                <span>Explorar línea de tiempo</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-4xl mb-8 text-center">Metodología de Investigación</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Este proyecto se ha desarrollado siguiendo rigurosos estándares académicos y metodológicos para garantizar la precisión histórica y la integridad de la información presentada.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Fuentes Primarias</h3>
                <p>
                  Se han consultado documentos oficiales, actas institucionales, publicaciones periódicas de la época, correspondencia administrativa y otros materiales de archivo que ofrecen información directa sobre los acontecimientos.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Historia Oral</h3>
                <p>
                  Se han realizado entrevistas a profesores, estudiantes, administrativos y otras personas vinculadas a la CUJAE durante el período estudiado, siguiendo protocolos de historia oral para preservar sus testimonios.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Análisis Contextual</h3>
                <p>
                  Cada evento y desarrollo se ha analizado en su contexto histórico, considerando las circunstancias políticas, económicas, sociales y educativas de Cuba y el mundo en aquel momento.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Verificación Cruzada</h3>
                <p>
                  La información ha sido verificada mediante la comparación de múltiples fuentes para garantizar su precisión y abordar posibles discrepancias o perspectivas diferentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-4xl mb-8 text-center">Integrantes</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Este proyecto lo hemos desarrollado en conjunto los siguientes alumnos:
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Amaury Dieguez Perez</h3>
                <p>
                  Encargado de buscar la información y de verificar su veracidad.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Jhonatan Salgado Torres</h3>
                <p>
                  Encargado de entrevistar a varios de los fundadores de la CUJAE para comprobar detalles más a fondo de la investigación.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Daniel Medina Acosta</h3>
                <p>
                  Encargado de la supervisión constante de la calidad y aplicación correcta de las reglas de oro y patrones correctos de diseño de interfaces durante la creación del sitio web.
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-2">Leonardo David Guirado García</h3>
                <p>
                  Encargado del diseño y correcto funcionamiento del sitio web además de la correcta adhesión de los hechos históicos al sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-4xl mb-6">Contacto</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            ¿Tienes alguna pregunta o deseas contribuir con información o material histórico para este proyecto? Nos encantaría saber de ti.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:contacto@historiacujae.edu.cu" 
              className="inline-flex items-center btn bg-white text-primary hover:bg-neutral-100"
            >
              <Mail size={20} className="mr-2" />
              contacto@historiacujae.edu.cu
            </a>
          </div>
          <p className="mt-6 text-white/80">
            También puedes seguirnos en redes sociales o visitar nuestro espacio físico en el Archivo Histórico de la CUJAE.
          </p>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-4xl mb-8 text-center">Agradecimientos</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-center">
              Este proyecto ha sido posible gracias al apoyo y colaboración de las siguientes instituciones y personas:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Instituto Superior Politécnico José Antonio Echeverría (CUJAE)</span> - Por abrir sus archivos históricos y brindar apoyo institucional.
                </span>
              </li>
              <li className="flex items-start">
                <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Archivo Nacional de Cuba</span> - Por facilitar acceso a documentación histórica relevante.
                </span>
              </li>
              <li className="flex items-start">
                <ExternalLink size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Ministerio de Educación Superior</span> - Por su colaboración en la verificación de información oficial.
                </span>
              </li>
              <li className="flex items-start">
                <Users size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Antiguos profesores y estudiantes de la CUJAE</span> - Por compartir sus invaluables testimonios y documentos personales.
                </span>
              </li>
              <li className="flex items-start">
                <Users size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-medium">Familias de figuras destacadas</span> - Por contribuir con fotografías, correspondencia y otros materiales personales.
                </span>
              </li>
            </ul>
            
            <p className="mt-8 text-center text-neutral-600">
              Extendemos nuestro profundo agradecimiento a todas las personas que han contribuido de alguna manera a la realización de este proyecto de preservación histórica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
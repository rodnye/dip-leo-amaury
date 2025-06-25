import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-serif font-bold text-2xl mb-4">
              CUJAE<span className="text-accent">Historia</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Explorando la rica historia de Cuba desde 1964-1974, con especial
              énfasis en las contribuciones del Instituto Superior Politécnico
              José Antonio Echeverría.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 border-b border-neutral-700 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 border-b border-neutral-700 pb-2">
              Recursos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-white transition-colors">
                  Sobre el Proyecto
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center">
                  <span>Referencias</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>

            {/* Sección del QR */}
            <div className="mt-6 flex justify-left">
              <img
                src="/src/qr-code.png"
                alt="Código QR del Proyecto"
                className="w-32 h-32"
              />
            </div>

          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 border-b border-neutral-700 pb-2">
              Contacto
            </h4>
            <p className="text-neutral-300 mb-2">
              Para consultas sobre este proyecto histórico:
            </p>
            <a
              href="mailto:contact@cujaehistory.edu"
              className="inline-flex items-center text-accent hover:underline mb-4">
              <Mail size={16} className="mr-2" />
              contact@cujaehistory.edu
            </a>

            <div className="mt-4">
              <p className="text-neutral-400 text-sm">
                Este proyecto está dedicado a preservar el legado histórico de
                la CUJAE y su impacto en la sociedad cubana.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-neutral-400 text-sm">
          <p className="flex justify-center items-center">
            <span>© {currentYear} Proyecto Histórico CUJAE. Hecho con</span>
            <Heart size={14} className="mx-1 text-primary" />
            <span>para fines educativos.</span>
          </p>
          <p className="mt-2">
            Todo el contenido histórico ha sido curado de archivos públicos y
            recursos educativos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

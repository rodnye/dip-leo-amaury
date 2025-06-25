interface GalleryItem {
  id: string;
  type: 'photo' | 'document' | 'infographic';
  title: string;
  description: string;
  year: number;
  source: string;
  thumbnail: string;
  fullImage: string;
  tags?: string[];
}

const galleryData: GalleryItem[] = [
  // Photos 1964
  {
    id: 'photo-1964-foundation',
    type: 'photo',
    title: 'Ceremonia de fundación de la CUJAE',
    description: 'Fotografía histórica de la ceremonia oficial de fundación del Instituto Superior Politécnico José Antonio Echeverría el 2 de diciembre de 1964.',
    year: 1964,
    source: 'Archivo Histórico de la CUJAE',
    thumbnail: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
    fullImage: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
    tags: ['historical', 'academic']
  },
  {
    id: 'photo-1964-campus',
    type: 'photo',
    title: 'Primeras edificaciones del campus',
    description: 'Vista de las primeras edificaciones del campus de la CUJAE durante su construcción en 1964.',
    year: 1964,
    source: 'Archivo Nacional de Cuba',
    thumbnail: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg',
    fullImage: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg',
    tags: ['historical']
  },
  
  // Documents 1964
  {
    id: 'doc-1964-decree',
    type: 'document',
    title: 'Decreto de fundación',
    description: 'Documento oficial que establece la creación del Instituto Superior Politécnico José Antonio Echeverría.',
    year: 1964,
    source: 'Gaceta Oficial de la República de Cuba',
    thumbnail: 'https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg',
    fullImage: 'https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg',
    tags: ['historical', 'academic']
  },
  
  // Photos 1965
  {
    id: 'photo-1965-lab',
    type: 'photo',
    title: 'Primer laboratorio de estructuras',
    description: 'Fotografía del primer laboratorio de investigación estructural establecido en la CUJAE en 1965.',
    year: 1965,
    source: 'Archivo Histórico de la Facultad de Ingeniería Civil',
    thumbnail: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    fullImage: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    tags: ['research', 'academic']
  },
  {
    id: 'photo-1965-exchange',
    type: 'photo',
    title: 'Intercambio académico con la URSS',
    description: 'Primera delegación de profesores soviéticos visitando la CUJAE como parte del programa de intercambio académico.',
    year: 1965,
    source: 'Archivo de Relaciones Internacionales CUJAE',
    thumbnail: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg',
    fullImage: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg',
    tags: ['academic', 'historical']
  },
  
  // Documents 1966
  {
    id: 'doc-1966-prototype',
    type: 'document',
    title: 'Planos del prototipo agrícola',
    description: 'Planos técnicos del primer prototipo de máquina agrícola desarrollado por ingenieros y estudiantes de la CUJAE.',
    year: 1966,
    source: 'Archivo Técnico de la Facultad de Ingeniería Mecánica',
    thumbnail: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg',
    fullImage: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg',
    tags: ['research']
  },
  
  // Photos 1967
  {
    id: 'photo-1967-graduation',
    type: 'photo',
    title: 'Primera generación de graduados',
    description: 'Fotografía histórica de la ceremonia de graduación de la primera generación de ingenieros formados íntegramente en la CUJAE.',
    year: 1967,
    source: 'Archivo Histórico Universitario',
    thumbnail: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    fullImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    tags: ['academic', 'historical']
  },
  
  // Infographics 1968
  {
    id: 'info-1968-zafra',
    type: 'infographic',
    title: 'CUJAE en la zafra de los diez millones',
    description: 'Infografía que muestra las contribuciones técnicas de la CUJAE durante la zafra de los diez millones.',
    year: 1968,
    source: 'Departamento de Historia CUJAE',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    fullImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    tags: ['historical', 'research']
  },
  
  // Photos 1969
  {
    id: 'photo-1969-symposium',
    type: 'photo',
    title: 'Primer Simposio Internacional',
    description: 'Inauguración del primer Simposio Internacional de Ingeniería Tropical organizado por la CUJAE.',
    year: 1969,
    source: 'Archivo de Eventos Académicos',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    fullImage: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    tags: ['academic', 'research']
  },
  {
    id: 'photo-1969-library',
    type: 'photo',
    title: 'Biblioteca Científica Central',
    description: 'Fotografía de la inauguración de la Biblioteca Científica Central de la CUJAE en 1969.',
    year: 1969,
    source: 'Archivo Histórico de la CUJAE',
    thumbnail: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
    fullImage: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg',
    tags: ['academic', 'historical']
  },
  
  // Documents 1970
  {
    id: 'doc-1970-automation',
    type: 'document',
    title: 'Esquemas del sistema automatizado',
    description: 'Documentación técnica del primer sistema automatizado de control industrial desarrollado por investigadores de la CUJAE.',
    year: 1970,
    source: 'Facultad de Ingeniería Eléctrica',
    thumbnail: 'https://images.pexels.com/photos/4099099/pexels-photo-4099099.jpeg',
    fullImage: 'https://images.pexels.com/photos/4099099/pexels-photo-4099099.jpeg',
    tags: ['research']
  },
  
  // Photos 1971
  {
    id: 'photo-1971-computers',
    type: 'photo',
    title: 'Primeros laboratorios de computación',
    description: 'Fotografía histórica de los primeros laboratorios de computación establecidos en la CUJAE en 1971.',
    year: 1971,
    source: 'Archivo de la Facultad de Informática',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    fullImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    tags: ['historical', 'academic']
  },
  
  // Documents 1972
  {
    id: 'doc-1972-seismic',
    type: 'document',
    title: 'Investigación antisísmica',
    description: 'Publicación científica sobre las técnicas constructivas antisísmicas desarrolladas por investigadores de la CUJAE.',
    year: 1972,
    source: 'Revista Cubana de Ingeniería',
    thumbnail: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg',
    fullImage: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg',
    tags: ['research', 'academic']
  },
  
  // Photos 1973
  {
    id: 'photo-1973-biotech',
    type: 'photo',
    title: 'Laboratorio de biotecnología',
    description: 'Fotografía del inicio de las investigaciones en biotecnología aplicada en la CUJAE en 1973.',
    year: 1973,
    source: 'Archivo de la Facultad de Ingeniería Química',
    thumbnail: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
    fullImage: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
    tags: ['research']
  },
  
  // Photos 1974
  {
    id: 'photo-1974-anniversary',
    type: 'photo',
    title: 'Celebración del décimo aniversario',
    description: 'Fotografía de la ceremonia central de celebración del décimo aniversario de la CUJAE en 1974.',
    year: 1974,
    source: 'Archivo Histórico de la CUJAE',
    thumbnail: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg',
    fullImage: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg',
    tags: ['historical']
  },
  {
    id: 'photo-1974-congress',
    type: 'photo',
    title: 'Primer Congreso Nacional',
    description: 'Inauguración del primer Congreso Nacional de Ingeniería y Arquitectura organizado por la CUJAE en 1974.',
    year: 1974,
    source: 'Archivo de Eventos Académicos',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    fullImage: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    tags: ['academic', 'research']
  }
];

export default galleryData;
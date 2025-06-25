interface Testimonial {
  id: string;
  name: string;
  role: string;
  year: number;
  quote: string;
  fullText: string;
  image: string;
  featured?: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Dr. Carlos Rodríguez',
    role: 'Profesor de Ingeniería Civil (1964-1980)',
    year: 1964,
    quote: 'Fundamos la CUJAE con una visión clara: formar ingenieros que pudieran resolver los problemas específicos de nuestro país.',
    fullText: 'Fundamos la CUJAE con una visión clara: formar ingenieros que pudieran resolver los problemas específicos de nuestro país. En aquellos primeros años, enfrentamos numerosos desafíos, desde la falta de equipamiento hasta la necesidad de crear programas de estudio adaptados a nuestra realidad. Sin embargo, el entusiasmo y el compromiso tanto de profesores como de estudiantes nos permitieron superar estas dificultades. Recuerdo cómo trabajábamos hasta altas horas de la noche, diseñando laboratorios y planificando clases. Era un momento histórico para la educación técnica en Cuba, y todos éramos conscientes de estar participando en algo transcendental que cambiaría el futuro de la ingeniería en nuestro país.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    featured: true
  },
  {
    id: 'test-002',
    name: 'Ing. Elena Fernández',
    role: 'Estudiante de la primera generación',
    year: 1965,
    quote: 'Éramos pocos estudiantes mujeres en aquella época, pero nos sentíamos parte integral de un proyecto revolucionario en la educación técnica.',
    fullText: 'Éramos pocas estudiantes mujeres en aquella época, pero nos sentíamos parte integral de un proyecto revolucionario en la educación técnica. Recuerdo el primer día que entré al campus, aún en construcción, con una mezcla de nerviosismo y emoción. Los profesores nos transmitían no solo conocimientos técnicos, sino también la responsabilidad que teníamos como futuros ingenieros de contribuir al desarrollo de Cuba. Las clases eran intensas, y frecuentemente nos quedábamos hasta la noche en los laboratorios realizando prácticas. A pesar de las limitaciones materiales, había un espíritu de innovación y colaboración que hacía que aprendiéramos a resolver problemas con creatividad, una habilidad que me ha servido a lo largo de toda mi carrera profesional.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  },
  {
    id: 'test-003',
    name: 'Dr. Alejandro Morales',
    role: 'Investigador en Energía Solar',
    year: 1967,
    quote: 'Cuando iniciamos las investigaciones en energía solar en 1967, muchos consideraban que era demasiado prematuro para Cuba, pero la CUJAE siempre apostó por mirar hacia el futuro.',
    fullText: 'Cuando iniciamos las investigaciones en energía solar en 1967, muchos consideraban que era demasiado prematuro para Cuba, pero la CUJAE siempre apostó por mirar hacia el futuro. Comenzamos con equipos rudimentarios, muchos de ellos fabricados por nosotros mismos en los talleres de la universidad. Lo que nos faltaba en recursos lo compensábamos con ingenio y determinación. Recuerdo las largas discusiones teóricas que teníamos, combinando principios físicos con consideraciones prácticas sobre cómo adaptar la tecnología solar a nuestro contexto tropical. Esos primeros estudios, que parecían casi experimentales en aquel momento, sentaron las bases para desarrollos que décadas después serían fundamentales para la política energética del país.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    featured: true
  },
  {
    id: 'test-004',
    name: 'Arq. Mariana Suárez',
    role: 'Estudiante de Arquitectura (1966-1971)',
    year: 1968,
    quote: 'La participación en la zafra de los diez millones transformó nuestra visión de la arquitectura. Aprendimos a diseñar no solo con criterios estéticos, sino pensando en cómo nuestras creaciones servían a necesidades concretas.',
    fullText: 'La participación en la zafra de los diez millones transformó nuestra visión de la arquitectura. Aprendimos a diseñar no solo con criterios estéticos, sino pensando en cómo nuestras creaciones servían a necesidades concretas. Durante aquellos meses, un grupo de estudiantes y profesores de arquitectura nos trasladamos a las zonas azucareras para colaborar en el diseño y construcción de instalaciones temporales y en la mejora de infraestructuras existentes. Vivimos de cerca las condiciones reales de trabajo y las necesidades de los trabajadores, lo que nos dio una perspectiva invaluable sobre la función social de nuestra profesión. Esta experiencia marcó mi carrera profesional, orientándola hacia una arquitectura más funcional, sostenible y consciente de su contexto social.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
  },
  {
    id: 'test-005',
    name: 'Ing. Roberto Valdés',
    role: 'Especialista en Sistemas Automatizados',
    year: 1970,
    quote: 'Desarrollar el primer sistema automatizado de control industrial cubano fue un desafío enorme. Teníamos que combinar teorías avanzadas con tecnología limitada, pero esa restricción nos hizo más creativos.',
    fullText: 'Desarrollar el primer sistema automatizado de control industrial cubano fue un desafío enorme. Teníamos que combinar teorías avanzadas con tecnología limitada, pero esa restricción nos hizo más creativos. Trabajábamos con componentes electrónicos básicos, adaptando diseños y creando soluciones originales para problemas específicos de nuestra industria. El equipo que formamos era multidisciplinario: ingenieros eléctricos, mecánicos y hasta químicos, todos colaborando estrechamente. Recuerdo la emoción cuando implementamos el sistema por primera vez en una fábrica y funcionó correctamente. Fue una demostración de que la CUJAE estaba formando profesionales capaces de crear tecnología propia, adaptada a nuestras necesidades y posibilidades.',
    image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg'
  },
  {
    id: 'test-006',
    name: 'Dra. Luisa Martínez',
    role: 'Pionera en Ingeniería Biomédica',
    year: 1973,
    quote: 'Establecer el programa de Ingeniería Biomédica fue una visión de futuro. Estábamos creando un campo nuevo en Cuba, en la intersección de la ingeniería y la medicina.',
    fullText: 'Establecer el programa de Ingeniería Biomédica fue una visión de futuro. Estábamos creando un campo nuevo en Cuba, en la intersección de la ingeniería y la medicina. El proceso fue complejo, requiriendo la colaboración estrecha entre la CUJAE y facultades de medicina. Tuvimos que diseñar un currículo innovador que equilibrara fundamentos de ingeniería con conocimientos médicos y biológicos. Los primeros laboratorios los montamos con equipos donados por hospitales, modificados para fines didácticos. Lo más gratificante fue ver cómo, en pocos años, nuestros graduados comenzaron a contribuir significativamente al desarrollo de equipos médicos y soluciones tecnológicas para el sistema de salud cubano, demostrando el valor de esta disciplina emergente.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    featured: true
  },
  {
    id: 'test-007',
    name: 'Dr. Javier Sánchez',
    role: 'Decano de la Facultad de Eléctrica (1971-1977)',
    year: 1971,
    quote: 'La llegada de las primeras computadoras a la CUJAE fue un evento que transformó nuestra visión de la enseñanza. Abrió posibilidades que antes solo podíamos imaginar.',
    fullText: 'La llegada de las primeras computadoras a la CUJAE fue un evento que transformó nuestra visión de la enseñanza. Abrió posibilidades que antes solo podíamos imaginar. Recuerdo la expectación que generó entre estudiantes y profesores. Tuvimos que habilitar un espacio especial con control de temperatura y reorganizar horarios para maximizar el uso de estos equipos, que eran escasos y valiosos. Organizamos cursos intensivos para profesores de todas las facultades, reconociendo que la computación sería transversal a todas las disciplinas técnicas. Fue impresionante ver cómo, en poco tiempo, surgieron aplicaciones originales: desde cálculos estructurales en ingeniería civil hasta simulaciones para procesos químicos. Esos primeros pasos en informática sentaron las bases para lo que luego sería una fortaleza de la educación técnica cubana.',
    image: 'https://images.pexels.com/photos/5668766/pexels-photo-5668766.jpeg'
  },
  {
    id: 'test-008',
    name: 'Ing. Miguel Torres',
    role: 'Estudiante (1970-1975)',
    year: 1974,
    quote: 'El Congreso de 1974 fue un momento de orgullo para todos nosotros. Era la confirmación de que la CUJAE se había consolidado como una institución de referencia en solo diez años.',
    fullText: 'El Congreso de 1974 fue un momento de orgullo para todos nosotros. Era la confirmación de que la CUJAE se había consolidado como una institución de referencia en solo diez años. Como estudiantes, tuvimos la oportunidad de participar activamente en la organización y presentación de trabajos. Fue una experiencia formativa poder interactuar con profesionales destacados y ver cómo nuestros profesores eran reconocidos por sus contribuciones. El congreso también nos permitió conocer los avances en diferentes campos de la ingeniería y la arquitectura en otras partes del país y el mundo. Recuerdo especialmente las sesiones sobre desarrollo tecnológico autóctono, que nos inspiraron a muchos a orientar nuestras carreras hacia la innovación y la investigación aplicada a las necesidades específicas de Cuba.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
  }
];

export default testimonialsData;
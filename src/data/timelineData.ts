interface TimelineEvent {
  year: number;
  category: 'Histórico' | 'Académico' | 'Investigación' | 'cultural';
  title: string;
  description: string;
  image?: string;
}

const timelineData: TimelineEvent[] = [
  // 1964
  {
    year: 1964,
    category: 'Histórico',
    title: 'Fundación del Instituto Superior Politécnico José Antonio Echeverría (CUJAE)',
    description: 'El 2 de diciembre de 1964 se establece oficialmente el Instituto Superior Politécnico José Antonio Echeverría como centro especializado en la formación de ingenieros y arquitectos, continuando la tradición de la Facultad de Tecnología de la Universidad de La Habana.',
    image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg'
  },
  {
    year: 1964,
    category: 'Académico',
    title: 'Implementación del primer plan de estudios de ingeniería',
    description: 'Se desarrolla e implementa el primer plan de estudios específicamente diseñado para formar ingenieros con una orientación hacia las necesidades tecnológicas de Cuba, integrando teoría con práctica aplicada.',
  },
  {
    year: 1964,
    category: 'cultural',
    title: 'Primera Exposición de Arte Técnico',
    description: 'La CUJAE organiza la primera exposición que une arte y tecnología, mostrando cómo la expresión artística puede complementar y enriquecer la formación técnica de los ingenieros.',
  },

  // 1965
  {
    year: 1965,
    category: 'Investigación',
    title: 'Creación del primer laboratorio de investigación estructural',
    description: 'Se establece el primer laboratorio dedicado a la investigación de estructuras y materiales, permitiendo avances significativos en el campo de la ingeniería civil y la arquitectura adaptada a las condiciones tropicales.',
  },
  {
    year: 1965,
    category: 'Académico',
    title: 'Primer intercambio académico con universidades soviéticas',
    description: 'Comienza el programa de intercambio académico con instituciones de educación superior de la Unión Soviética, permitiendo a estudiantes y profesores cubanos acceder a tecnologías y metodologías avanzadas.',
  },
  {
    year: 1965,
    category: 'Histórico',
    title: 'Inauguración del campus principal',
    description: 'Se inaugura oficialmente el campus principal de la CUJAE, diseñado con una arquitectura modernista que reflejaba los ideales de progreso y desarrollo tecnológico del país.',
  },
  
  // 1966
  {
    year: 1966,
    category: 'Investigación',
    title: 'Desarrollo del primer prototipo de máquina agrícola',
    description: 'Ingenieros y estudiantes de la CUJAE diseñan y construyen el primer prototipo de máquina adaptada específicamente a las necesidades de la agricultura cubana, marcando el inicio de una tradición de innovación aplicada.',
  },
  {
    year: 1966,
    category: 'Académico',
    title: 'Establecimiento de la Facultad de Ingeniería Eléctrica',
    description: 'Se crea la Facultad de Ingeniería Eléctrica como entidad independiente, reconociendo la creciente importancia de esta disciplina para el desarrollo industrial y energético del país.',
  },
  {
    year: 1966,
    category: 'cultural',
    title: 'Primer Festival cultural de Ingeniería',
    description: 'Se organiza el primer festival cultural que celebra la intersección entre la ingeniería y las artes, con exhibiciones, conferencias y performances que exploran esta relación.',
  },

  // 1967
  {
    year: 1967,
    category: 'Histórico',
    title: 'Primera graduación de ingenieros formados íntegramente en la CUJAE',
    description: 'Se realiza la ceremonia de graduación de la primera generación de ingenieros formados completamente bajo los planes de estudio de la CUJAE, un hito importante en la historia de la educación superior en Cuba.',
  },
  {
    year: 1967,
    category: 'Investigación',
    title: 'Inicio del Programa de Investigación en Energía Solar',
    description: 'Comienza el primer programa formal de investigación en energía solar, anticipándose a la importancia que tendría este campo en el futuro y buscando soluciones energéticas sostenibles para Cuba.',
  },
  {
    year: 1967,
    category: 'Académico',
    title: 'Implementación del sistema de prácticas profesionales',
    description: 'Se establece un sistema estructurado de prácticas profesionales que permite a los estudiantes aplicar sus conocimientos en entornos laborales reales, fortaleciendo el vínculo entre academia e industria.',
  },

  // 1968
  {
    year: 1968,
    category: 'Investigación',
    title: 'Creación del Centro de Investigación en Materiales de Construcción',
    description: 'Se funda un centro especializado en la investigación de materiales de construcción adaptados a las condiciones climáticas y recursos disponibles en Cuba, contribuyendo significativamente al sector de la construcción.',
  },
  {
    year: 1968,
    category: 'Histórico',
    title: 'Participación en la zafra de los diez millones',
    description: 'Estudiantes y profesores de la CUJAE participan activamente en la zafra de los diez millones, aportando soluciones técnicas para mejorar la eficiencia en la producción azucarera.',
  },
  {
    year: 1968,
    category: 'Académico',
    title: 'Reforma curricular con enfoque en problemas nacionales',
    description: 'Se implementa una reforma curricular que orienta la formación de ingenieros hacia la resolución de problemas específicos del contexto cubano, fortaleciendo el compromiso social de la educación técnica.',
  },

  // 1969
  {
    year: 1969,
    category: 'Investigación',
    title: 'Primer Simposio Internacional de Ingeniería Tropical',
    description: 'La CUJAE organiza y acoge el primer simposio internacional dedicado a la ingeniería en climas tropicales, posicionándose como un referente regional en este campo especializado.',
  },
  {
    year: 1969,
    category: 'Histórico',
    title: 'Establecimiento de la Biblioteca Científica Central',
    description: 'Se inaugura la Biblioteca Científica Central, un centro de documentación especializado que se convertiría en uno de los más importantes repositorios de literatura técnica en el Caribe.',
  },
  {
    year: 1969,
    category: 'Académico',
    title: 'Creación del programa de postgrado en Ingeniería Civil',
    description: 'Se establece el primer programa de postgrado en Ingeniería Civil, elevando el nivel académico y la especialización en un área clave para el desarrollo de infraestructuras nacionales.',
  },

  // 1970
  {
    year: 1970,
    category: 'Investigación',
    title: 'Desarrollo del primer sistema automatizado de control industrial',
    description: 'Investigadores de la CUJAE desarrollan el primer sistema automatizado de control para procesos industriales, adaptado a las necesidades y recursos disponibles en Cuba.',
  },
  {
    year: 1970,
    category: 'Histórico',
    title: 'Participación en la Exposición Nacional de Logros Económicos',
    description: 'La CUJAE presenta sus principales logros en investigación e innovación en la Exposición Nacional, demostrando el impacto de la institución en el desarrollo económico del país.',
  },
  {
    year: 1970,
    category: 'cultural',
    title: 'Inauguración del Museo de Historia de la Ciencia y la Tecnología',
    description: 'Se inaugura un museo dedicado a preservar y difundir la historia de la ciencia y la tecnología en Cuba, con especial énfasis en los logros de la ingeniería nacional.',
  },

  // 1971
  {
    year: 1971,
    category: 'Académico',
    title: 'Implementación del Plan de Estudios Integrado',
    description: 'Se introduce un innovador plan de estudios que integra diferentes disciplinas de la ingeniería, promoviendo un enfoque holístico y multidisciplinario en la formación técnica.',
  },
  {
    year: 1971,
    category: 'Investigación',
    title: 'Primer proyecto de investigación en ingeniería hidráulica para zonas costeras',
    description: 'Comienza un ambicioso proyecto de investigación enfocado en soluciones hidráulicas para la protección y desarrollo sostenible de las zonas costeras de Cuba.',
  },
  {
    year: 1971,
    category: 'Histórico',
    title: 'Establecimiento de laboratorios de computación',
    description: 'Se establecen los primeros laboratorios de computación en la CUJAE, iniciando la era de la informática en la educación superior técnica cubana.',
  },

  // 1972
  {
    year: 1972,
    category: 'Investigación',
    title: 'Desarrollo de técnicas constructivas antisísmicas',
    description: 'Investigadores de la CUJAE desarrollan innovadoras técnicas constructivas antisísmicas adaptadas a las condiciones geológicas del Caribe, contribuyendo significativamente a la seguridad estructural en la región.',
  },
  {
    year: 1972,
    category: 'Académico',
    title: 'Primer programa de formación continua para profesionales',
    description: 'Se implementa el primer programa estructurado de formación continua para ingenieros en ejercicio, permitiéndoles actualizar sus conocimientos y adaptarse a los avances tecnológicos.',
  },
  {
    year: 1972,
    category: 'Histórico',
    title: 'Creación del Centro de Documentación Científica',
    description: 'Se establece un centro especializado en la recopilación, organización y difusión de documentación científica y técnica, vital para el desarrollo de la investigación en ingeniería.',
  },

  // 1973
  {
    year: 1973,
    category: 'Investigación',
    title: 'Inicio de investigaciones en biotecnología aplicada',
    description: 'La CUJAE expande su campo de investigación hacia la biotecnología, estableciendo las bases para futuros desarrollos en esta área que sería estratégica para Cuba en décadas posteriores.',
  },
  {
    year: 1973,
    category: 'Académico',
    title: 'Establecimiento del programa de Ingeniería Biomédica',
    description: 'Se crea el innovador programa de Ingeniería Biomédica, uno de los primeros en Latinoamérica, que combina principios de ingeniería con ciencias médicas y biológicas.',
  },
  {
    year: 1973,
    category: 'cultural',
    title: 'Primera Jornada de Historia de la Ingeniería Cubana',
    description: 'Se organiza la primera jornada dedicada a estudiar y valorar la historia de la ingeniería en Cuba, reconociendo la importancia de preservar este patrimonio cultural y científico.',
  },

  // 1974
  {
    year: 1974,
    category: 'Histórico',
    title: 'Décimo aniversario de la CUJAE',
    description: 'La institución celebra su décimo aniversario con una serie de eventos académicos y culturales que destacan los logros alcanzados y proyectan el futuro desarrollo de la ingeniería cubana.',
  },
  {
    year: 1974,
    category: 'Investigación',
    title: 'Primer Congreso Nacional de Ingeniería y Arquitectura',
    description: 'La CUJAE organiza el primer congreso nacional que reúne a profesionales de la ingeniería y la arquitectura para discutir los avances y desafíos en estas disciplinas fundamentales para el desarrollo del país.',
  },
  {
    year: 1974,
    category: 'Académico',
    title: 'Creación del sistema de educación a distancia',
    description: 'Se establece un innovador sistema de educación a distancia que permite ampliar el acceso a la formación técnica superior a estudiantes de diferentes regiones del país.',
  }
];

export default timelineData;
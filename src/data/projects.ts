import { Project, ArchitectBio } from '../types';

export const ARCHITECT_BIO: ArchitectBio = {
  name: "Adrià Buch",
  role: "Programador & Arqueólogo",
  currentPosition: "AdTech Developer",
  company: "Grupo Godó / IABrandStudio",
  education: "Graduado en Historia",
  university: "Universitat de Barcelona (UB)",
  bioSummary: "Fusionando la precisión del AdTech con las narrativas profundas de la historia humana. Explorando el nexo donde la inteligencia artificial se encuentra con el patrimonio arqueológico.",
  bioFull: [
    "Co-fundador de IABrandStudio y AdTech Developer en Grupo Godó. Con una sólida formación académica en Historia por la Universitat de Barcelona y experiencia práctica como arqueólogo en Cataluña.",
    "Su trabajo une dos mundos aparentemente opuestos: el desarrollo tecnológico de vanguardia y la preservación minuciosa de la memoria histórica. A través de la Inteligencia Artificial y la reconstrucción 3D, Adrià revitaliza yacimientos arqueológicos y archivos degradados, convirtiéndolos en experiencias accesibles y de nivel museístico."
  ],
  dualProfileCore: {
    tech: "Integración profunda de AdTech, entrenamiento de modelos de IA personalizados y programación arquitectónica en entornos editoriales de alto tráfico.",
    strategy: "Dirección creativa centrada en IA, liderando equipos multidisciplinares en IABrandStudio para ofrecer experiencias digitales de nivel museístico."
  },
  academicFoundation: [
    {
      title: "Universitat de Barcelona",
      description: "Licenciado en Historia por la UB, especializado en la preservación de la memoria histórica y el análisis de fuentes documentales de la antigüedad."
    },
    {
      title: "Investigación de Campo",
      description: "Arqueólogo activo en diversos yacimientos históricos de Cataluña, desenterrando e interpretando las capas de nuestro pasado colectivo."
    },
    {
      title: "Tecnología del Patrimonio",
      description: "Sintetizando la metodología tradicional con la captura moderna de datos para crear archivos digitales inmutables con algoritmos de IA."
    }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "thermopolium",
    title: "Thermopolium del Gallo",
    subtitle: "Arqueología Urbana y Gastronomía Pompeyana",
    category: "Restauración IA",
    chronology: "Siglo I d.C. (Destruido en el 79 d.C.)",
    location: "Regio V, Parque Arqueológico de Pompeya",
    description: "¿Cómo era salir a comer hace casi 2000 años? 🥖🍷 Desliza en el comparador para viajar en el tiempo a través de la historia y la Inteligencia Artificial.",
    imageCurrent: "/images/thermopilum_actual.jpg",
    imageReconstructed: "/images/Roman_thermopolium_reconstruction.jpeg",
    videoUrl: "/images/thermopolium_video.mp4",
    story: {
      headline: "¿Cómo era salir a comer hace casi 2000 años? 🥖🍷",
      guideText: "Desliza para viajar en el tiempo a través de la historia y la Inteligencia Artificial:",
      storyPoints: [
        {
          emoji: "🎨",
          title: "El mostrador original",
          text: "Conserva un fresco espectacular de una Nereida (ninfa marina) sobre una criatura del mar. En la recreación pueden ver el color amarillo vibrante que lució en su época de esplendor."
        },
        {
          emoji: "🍲",
          title: "Los recipientes (dolia)",
          text: "Las cavidades circulares en la piedra albergaban tinajas de barro para mantener guisos y bebidas calientes para los obreros y transeúntes."
        },
        {
          emoji: "🏚️",
          title: "Un negocio humilde golpeado por la tierra",
          text: "Los parches en el suelo y las modificaciones en los accesos revelan que el local sufrió daños por terremotos previos. Las reparaciones provisionales muestran que era un negocio con recursos limitados que siguió funcionando hasta el final."
        },
        {
          emoji: "🌋",
          title: "El momento del colapso",
          text: "Cuando el Vesubio erupcionó, las cenizas y materiales incandescentes llenaron lentamente las estancias, colapsando las estanterías y sellando la vida del local en sus últimos instantes."
        },
        {
          emoji: "🪞",
          title: "Influencia egipcia en el día a día",
          text: "Las excavaciones hallaron objetos de estilo egipcio. Esto demuestra que la fascinación por la cultura faraónica en el siglo I d. C. no era solo un capricho de la élite, sino una moda presente hasta en las cocinas más populares."
        }
      ],
      conclusion: "La IA y la arqueología se unen para recordarnos que, detrás de la piedra, había familias, economía real y rutinas interrumpidas.",
      callToAction: "¿Qué te parece el resultado del vídeo y el cambio visual?"
    },
    highlights: [
      { label: "RESTAURACIÓN FRESCOS", value: "100%", icon: "palette" },
      { label: "RECIPIENTES DOLIA", value: "9 identificados", icon: "local_dining" },
      { label: "UBICACIÓN", value: "Pompeya Regio V", icon: "location_on" }
    ],
    statusBadge: "ESTADO ACTUAL: REGIO V",
    featured: true
  },
  {
    id: "cellecs",
    title: "El Poblado Ibérico de Céllecs",
    subtitle: "Reconstrucción Arqueológica Digital en el Vallès Oriental",
    category: "Reconstrucción 3D",
    chronology: "Esplendor entre los siglos IV y II a.C.",
    location: "Serralada de Marina, Barcelona",
    structures: "Muralla de piedra seca y habitaciones rectangulares adosadas.",
    description: "Reconstrucción tridimensional fotorrealista generada por IA del asentamiento ibérico de Céllecs. El proyecto simula la vida cotidiana y la estructura defensiva de la tribu de los layetanos.",
    fullAnalysis: "A través del procesamiento fotogramétrico del área ruinosa en la Serralada de Marina y el cruce con datos cerámicos del poblamiento layetano, los algoritmos de Inteligencia Artificial reconstruyeron la mampostería de piedra seca, la techumbre de ramas y arcilla, así como el entramado urbano original. Se identificaron zonas de almacenamiento con dolia y un espacio ritual central.",
    imageCurrent: "/images/cellecs_actual.jpg",
    imageReconstructed: "/images/cellecs_reconstructed.jpg",
    highlights: [
      { label: "FIDELIDAD FOTOGRAMÉTRICA", value: "100%", icon: "straighten" },
      { label: "CRONOLOGÍA ESTIMADA", value: "350 a.C.", icon: "history" },
      { label: "MÉTODOS", value: "Fotogrametría + Generative NeRF", icon: "memory" }
    ],
    statusBadge: "RENDERIZADO DE ALTA FIDELIDAD",
    featured: true
  },
  {
    id: "restauracion-19",
    title: "Restauración de Archivos del Siglo XIX",
    subtitle: "Digitalización Avanzada y Eliminación de Degradación en Gelatina",
    category: "Restauración IA",
    chronology: "1885 - 1910",
    location: "Archivo Histórico Fotográfico de Barcelona",
    description: "Recuperación de la memoria visual mediante redes neuronales especializadas en negativos degradados de placa de cristal y papel a la albúmina.",
    fullAnalysis: "Modelos difusos entrenados específicamente con emulsiones fotográficas decimonónicas logran eliminar arañazos, manchas de plata y desvanecimiento oxidativo sin perder el grano óptico original.",
    imageCurrent: "/images/restauracion_actual.jpg",
    imageReconstructed: "/images/restauracion_reconstructed.jpg",
    highlights: [
      { label: "RESOLUCIÓN RECUPERADA", value: "4K Native", icon: "high_quality" },
      { label: "TIEMPO PROCESO", value: "1.4s / placa", icon: "timer" }
    ],
    dateReport: "REPORT 2024"
  }
];

import type { Language } from '@/i18n/translations'

type Highlight = {
  title: string
  description: string
}

type RouteMapItem = {
  route: string
  detail: string
}

type PortioPageContent = {
  hero: {
    label: string
    title: string
    description: string
    body: string
    primaryActionLabel: string
    secondaryActionLabel: string
    purposeLabel: string
    purposeDescription: string
    approachLabel: string
    approachDescription: string
  }
  business: {
    sectionLabel: string
    sectionTitle: string
    sectionDescription: string
    productHighlights: Highlight[]
    functionalFlow: string[]
    valueLabel: string
    operationLabel: string
    operationTitle: string
    operationDescription: string
    impactLabel: string
    impactTitle: string
    impactParagraphs: string[]
  }
  technical: {
    sectionLabel: string
    sectionTitle: string
    sectionDescription: string
    architectureFlow: string[]
    frontendStack: string[]
    backendStack: string[]
    routeMap: RouteMapItem[]
    architectureLabel: string
    architectureTitle: string
    architectureDescription: string
    architectureDiagramLabel: string
    frontendLabel: string
    frontendTitle: string
    frontendDescription: string
    backendLabel: string
    backendTitle: string
    backendDescription: string
    routeMapLabel: string
    routeMapTitle: string
    routeMapDescription: string
  }
}

const frontendStack = [
  'React',
  'TypeScript',
  'Vite',
  'TanStack Router',
  'Zustand',
  'Recharts',
  'i18next',
  'AWS Amplify',
  'Tailwind CSS',
]

export function getPortioPageContent(language: Language): PortioPageContent {
  const isSpanish = language === 'es'

  return {
    hero: {
      label: isSpanish ? 'Proyecto healthtech' : 'Healthtech project',
      title: 'Portio',
      description: isSpanish
        ? 'Portio es una aplicacion healthtech para seguimiento nutricional que combina registro de comidas, visualizacion de progreso, perfil fisico del usuario y recomendaciones asistidas por IA dentro de un flujo claro y orientado a decision.'
        : 'Portio is a healthtech application for nutritional follow-up that combines meal logging, progress visualization, user physical profile, and AI-assisted recommendations within a clear decision-oriented flow.',
      body: isSpanish
        ? 'El proyecto une producto y arquitectura: ayuda a registrar habitos, detectar patrones, ordenar el progreso del paciente y transformar esa informacion en recomendaciones accionables que un nutricionista puede revisar para tomar mejores decisiones.'
        : 'The project combines product and architecture: it helps record habits, detect patterns, organize patient progress, and turn that information into actionable recommendations that a nutritionist can review to make better decisions.',
      primaryActionLabel: isSpanish ? 'Ver aplicacion' : 'View application',
      secondaryActionLabel: isSpanish ? 'Volver al inicio' : 'Back to home',
      purposeLabel: isSpanish ? 'Proposito' : 'Purpose',
      purposeDescription: isSpanish
        ? 'Ayudar a las personas a perder peso y mejorar su calidad de vida mediante seguimiento diario, mejores recomendaciones y mejor informacion para el trabajo del nutricionista.'
        : 'Help people lose weight and improve their quality of life through daily follow-up, better recommendations, and better information for the nutritionist.',
      approachLabel: isSpanish ? 'Enfoque' : 'Approach',
      approachDescription: isSpanish
        ? 'Una sola entrada de portfolio que muestra producto, experiencia de usuario y base tecnica en AWS.'
        : 'A single portfolio entry that shows product thinking, user experience, and technical implementation on AWS.',
    },
    business: {
      sectionLabel: isSpanish ? 'Seccion negocio' : 'Business section',
      sectionTitle: isSpanish ? 'Portio para el negocio' : 'Portio for the business',
      sectionDescription: isSpanish
        ? 'Esta parte explica que resuelve la aplicacion, como aporta valor al seguimiento nutricional y de que forma mejora la relacion entre paciente, informacion diaria y criterio profesional.'
        : 'This section explains what the application solves, how it adds value to nutritional follow-up, and how it improves the relationship between the patient, daily information, and professional judgment.',
      productHighlights: isSpanish
        ? [
            {
              title: 'Registro nutricional continuo',
              description:
                'La propuesta central es convertir el registro de comidas en un historial util, con contexto, frecuencia y porciones en lugar de entradas aisladas.',
            },
            {
              title: 'Recomendaciones asistidas por IA',
              description:
                'La aplicacion usa el historial alimenticio, objetivos y patrones del usuario para generar sugerencias accionables y planes mas relevantes.',
            },
            {
              title: 'Seguimiento con criterio profesional',
              description:
                'Portio funciona como apoyo del nutricionista: centraliza la informacion del paciente, ordena el seguimiento diario y facilita mejores ajustes profesionales, pero no reemplaza la evaluacion clinica.',
            },
          ]
        : [
            {
              title: 'Continuous nutrition logging',
              description:
                'The core idea is to turn meal tracking into a useful history with context, frequency, and portions instead of isolated entries.',
            },
            {
              title: 'AI-assisted recommendations',
              description:
                'The application uses food history, goals, and user patterns to generate actionable suggestions and more relevant plans.',
            },
            {
              title: 'Professional-grade follow-up',
              description:
                'Portio supports the nutritionist by centralizing patient information, organizing day-to-day follow-up, and enabling better professional adjustments without replacing clinical judgment.',
            },
          ],
      functionalFlow: isSpanish
        ? [
            'El usuario registra comidas, horarios, porciones y contexto de cada ingesta.',
            'La plataforma organiza ese historial y muestra progreso, patrones y desbalances.',
            'Con esos datos, el sistema genera recomendaciones y planes ajustados al perfil.',
            'El nutricionista revisa toda la informacion consolidada para entender la evolucion real.',
            'Con esa evidencia puede ajustar indicaciones, prioridades y seguimiento con mejor criterio.',
            'El proceso convierte datos diarios en decisiones nutricionales mejor fundamentadas.',
          ]
        : [
            'The user logs meals, schedules, portions, and context for each intake.',
            'The platform organizes that history and reveals progress, patterns, and imbalances.',
            'With that data, the system generates recommendations and plans tailored to the profile.',
            'The nutritionist reviews the consolidated information to understand real progress.',
            'With that evidence, the professional can refine guidance, priorities, and follow-up.',
            'The process turns daily data into better-informed nutritional decisions.',
          ],
      valueLabel: isSpanish ? 'Valor' : 'Value',
      operationLabel: isSpanish ? 'Operacion' : 'Operations',
      operationTitle: isSpanish ? 'Como funciona la app' : 'How the app works',
      operationDescription: isSpanish
        ? 'El flujo del producto se entiende mejor como una secuencia de seguimiento: la persona registra sus comidas, la plataforma ordena ese historial, detecta patrones y genera sugerencias, y el nutricionista accede a esa informacion para evaluar el caso con mas contexto y definir la mejor decision para cada paciente.'
        : 'The product flow works best as a follow-up sequence: the person logs meals, the platform organizes that history, detects patterns, and generates suggestions, while the nutritionist uses that information to evaluate the case with more context and define the best decision for each patient.',
      impactLabel: isSpanish ? 'Impacto' : 'Impact',
      impactTitle: isSpanish ? 'Que habilita Portio' : 'What Portio enables',
      impactParagraphs: isSpanish
        ? [
            'Portio transforma datos diarios en informacion util para seguimiento nutricional, evitando que el control del paciente dependa de registros dispersos o memoria parcial.',
            'La app permite ver habitos, frecuencia, porciones y evolucion en un solo lugar, lo que mejora la calidad del seguimiento y hace mas clara la conversacion entre usuario y profesional.',
            'Para el negocio, esto posiciona a Portio como una herramienta de apoyo real al proceso nutricional y no solo como una interfaz para cargar comidas.',
          ]
        : [
            'Portio turns daily data into useful information for nutritional follow-up, avoiding patient monitoring that depends on scattered records or partial memory.',
            'The app makes habits, frequency, portions, and progress visible in one place, improving follow-up quality and making the conversation between user and professional clearer.',
            'From a business perspective, this positions Portio as a real support tool for the nutritional process rather than just an interface for entering meals.',
          ],
    },
    technical: {
      sectionLabel: isSpanish ? 'Seccion tecnica' : 'Technical section',
      sectionTitle: isSpanish ? 'Portio desde la ingenieria' : 'Portio from an engineering perspective',
      sectionDescription: isSpanish
        ? 'Esta parte resume la base tecnica del proyecto: stack de interfaz, servicios cloud, arquitectura serverless y rutas funcionales visibles en la aplicacion productiva.'
        : 'This section summarizes the technical foundation of the project: interface stack, cloud services, serverless architecture, and functional routes visible in the production application.',
      architectureFlow: isSpanish
        ? ['Usuario', 'Frontend web de Portio', 'Autenticacion', 'API serverless', 'Logica nutricional', 'Persistencia e IA', 'Nutricionista']
        : ['User', 'Portio web frontend', 'Authentication', 'Serverless API', 'Nutrition logic', 'Persistence and AI', 'Nutritionist'],
      frontendStack,
      backendStack: isSpanish
        ? [
            'Python',
            'AWS SAM',
            'AWS Lambda',
            'Amazon API Gateway',
            'Amazon DynamoDB',
            'Amazon Cognito',
            'Amazon S3',
            'Arquitectura orientada a dominio',
            'Integracion con IA',
          ]
        : [
            'Python',
            'AWS SAM',
            'AWS Lambda',
            'Amazon API Gateway',
            'Amazon DynamoDB',
            'Amazon Cognito',
            'Amazon S3',
            'Domain-oriented architecture',
            'AI integration',
          ],
      routeMap: isSpanish
        ? [
            { route: '/', detail: 'Landing con foco en nutricion, IA y acompanamiento profesional.' },
            { route: '/dashboard', detail: 'Resumen operativo del seguimiento del usuario.' },
            { route: '/meals', detail: 'Consulta del historial de comidas y navegacion del registro.' },
            { route: '/meals/new', detail: 'Carga de nuevas comidas dentro del flujo principal.' },
            { route: '/user', detail: 'Perfil fisico, objetivos y contexto del usuario.' },
            { route: '/plans', detail: 'Planes nutricionales, recomendaciones e insumos sugeridos.' },
            { route: '/login', detail: 'Acceso autenticado al sistema.' },
          ]
        : [
            { route: '/', detail: 'Landing page focused on nutrition, AI, and professional support.' },
            { route: '/dashboard', detail: 'Operational summary of user follow-up.' },
            { route: '/meals', detail: 'Meal history view and record navigation.' },
            { route: '/meals/new', detail: 'New meal entry inside the main workflow.' },
            { route: '/user', detail: 'Physical profile, goals, and user context.' },
            { route: '/plans', detail: 'Nutrition plans, recommendations, and suggested inputs.' },
            { route: '/login', detail: 'Authenticated access to the system.' },
          ],
      architectureLabel: isSpanish ? 'Arquitectura' : 'Architecture',
      architectureTitle: isSpanish ? 'Base tecnica de la solucion' : 'Technical foundation of the solution',
      architectureDescription: isSpanish
        ? 'Portio conecta una experiencia de producto con autenticacion, backend serverless, persistencia e integraciones que respaldan el seguimiento nutricional y el enriquecimiento de informacion con IA.'
        : 'Portio connects a product experience with authentication, a serverless backend, persistence, and integrations that support nutritional follow-up and AI-enriched information.',
      architectureDiagramLabel: isSpanish ? 'Diagrama de arquitectura' : 'Architecture diagram',
      frontendLabel: 'Frontend',
      frontendTitle: isSpanish ? 'Experiencia y cliente' : 'Experience and client',
      frontendDescription: isSpanish
        ? 'La interfaz esta construida para registrar comidas, revisar progreso y operar la plataforma con una experiencia fluida, apoyada por un stack moderno del lado del cliente.'
        : 'The interface is built to log meals, review progress, and operate the platform through a smooth experience supported by a modern client-side stack.',
      backendLabel: 'Backend',
      backendTitle: isSpanish ? 'Servicios y cloud' : 'Services and cloud',
      backendDescription: isSpanish
        ? 'El backend esta montado sobre una base serverless en AWS, con servicios administrados para autenticacion, API, persistencia, almacenamiento y una estructura pensada para evolucionar el dominio.'
        : 'The backend runs on a serverless foundation in AWS, with managed services for authentication, API access, persistence, storage, and a structure designed to evolve the domain.',
      routeMapLabel: isSpanish ? 'Mapa funcional' : 'Functional map',
      routeMapTitle: isSpanish ? 'Rutas detectadas' : 'Detected routes',
      routeMapDescription: isSpanish
        ? 'El bundle productivo expone una aplicacion con rutas concretas, lo que confirma que el proyecto ya cubre mas que una demo visual y tiene flujos operativos definidos.'
        : 'The production bundle exposes a concrete application with explicit routes, confirming that the project goes beyond a visual demo and already contains defined operational flows.',
    },
  }
}

export const translations = {
  es: {
    portfolio: 'Portafolio y diario técnico',
    focus: 'Enfoque',
    approach: 'Enfoque',
    backend: 'Backend, contenedores, automatización y aprendizaje aplicado.',
    practice: 'Práctica técnica, documentación clara y soluciones orientadas a implementación.',
    capabilities: 'Capacidades',
    projects: 'Proyectos destacados',
    projectDescription:
      'Una selección de ejercicios y trabajos técnicos que reflejan mi forma de construir, documentar y resolver problemas.',
    howIWork: 'Cómo trabajo',
    howWorkDescription:
      'Me interesa construir software claro, mantenible y cercano a escenarios reales. Uso este sitio para mostrar proyectos, documentar aprendizajes y convertir práctica técnica en evidencia visible.',
    notes: 'Notas y documentación técnica',
    notesDescription:
      'También uso este espacio como laboratorio técnico para organizar apuntes, ejercicios y documentación práctica sobre las tecnologías que estudio y aplico.',
    certifications: 'Credenciales y badges',
    certificationsDescription:
      'También documento mi progreso profesional a través de certificaciones y badges. Uso Credly para centralizar credenciales verificables y dejar visible la evolución de mi perfil técnico.',
    professionalSignal: 'Señal profesional',
    formationVisible: 'Formación visible, trabajo verificable',
    formationDescription:
      'El objetivo no es solo listar tecnologías, sino mostrar evidencia. Por eso el sitio ahora conecta proyectos, notas técnicas y credenciales en un mismo recorrido: lo que estudio, lo que construyo y lo que puedo demostrar.',
    nextStep: 'Siguiente paso',
    continueConversation: 'Sigamos la conversación',
    continueConversationDescription:
      'Si quieres ver más detalle sobre mi experiencia, mis proyectos o mi forma de trabajar, puedes revisar mi perfil, explorar mis repositorios o descargar mi CV.',
    viewProjects: 'Ver proyectos',
    downloadCV: 'Descargar CV',
    viewProfile: 'Ver perfil',
    seeDetail: 'Ver detalle',
    goToGitHub: 'Ir a GitHub',
    credlyProfile: 'Ver perfil en Credly',
  },
  en: {
    portfolio: 'Portfolio and technical journal',
    focus: 'Focus',
    approach: 'Approach',
    backend: 'Backend, containers, automation and applied learning.',
    practice: 'Technical practice, clear documentation and implementation-oriented solutions.',
    capabilities: 'Capabilities',
    projects: 'Featured projects',
    projectDescription:
      'A selection of exercises and technical work that reflects how I build, document, and solve problems.',
    howIWork: 'How I work',
    howWorkDescription:
      'I am interested in building clear, maintainable software close to real scenarios. I use this site to showcase projects, document learnings and convert technical practice into visible evidence.',
    notes: 'Notes and technical documentation',
    notesDescription:
      'I also use this space as a technical lab to organize notes, exercises and practical documentation on the technologies I study and apply.',
    certifications: 'Credentials and badges',
    certificationsDescription:
      'I also document my professional progress through certifications and badges. I use Credly to centralize verifiable credentials and make the evolution of my technical profile visible.',
    professionalSignal: 'Professional signal',
    formationVisible: 'Visible learning, verifiable work',
    formationDescription:
      'The goal is not just to list technologies, but to show evidence. That is why the site now connects projects, technical notes, and credentials in the same journey: what I study, what I build, and what I can demonstrate.',
    nextStep: 'Next step',
    continueConversation: "Let's keep the conversation going",
    continueConversationDescription:
      'If you want to see more details about my experience, my projects or my way of working, you can check my profile, explore my repositories or download my CV.',
    viewProjects: 'View projects',
    downloadCV: 'Download CV',
    viewProfile: 'View profile',
    seeDetail: 'See detail',
    goToGitHub: 'Go to GitHub',
    credlyProfile: 'View Credly profile',
  },
}

export type Language = 'es' | 'en'
export type TranslationKey = keyof (typeof translations)['es']

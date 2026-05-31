import type { Language } from '@/i18n/translations'

type PublicationMetadata = {
  order: number
  badge: string
  title: string
  excerpt: string
  description: string
  readingTime: string
  image: string
  topics: string[]
}

export const pythonPublicationMetadata: Record<Language, Record<string, PublicationMetadata>> = {
  es: {
    'certificacion-inicial-python': {
      order: 1,
      badge: 'Publicacion 01',
      title: 'Como obtener una certificacion inicial de Python',
      excerpt: 'Una guia larga con todo el contenido base que necesitas estudiar para preparar una certificacion inicial como PCEP.',
      description:
        'Esta publicacion concentra los fundamentos que normalmente necesitas dominar para una certificacion inicial de Python: conceptos base del lenguaje, operadores, colecciones, funciones, mutabilidad y manejo de errores.',
      readingTime: '18 min',
      image: '/python.webp',
      topics: ['PCEP', 'Fundamentos', 'Operadores', 'Colecciones', 'Funciones'],
    },
    venv: {
      order: 2,
      badge: 'Publicacion 02',
      title: 'Como crear un entorno virtual con venv y por que es tan importante',
      excerpt:
        'Una guia practica para aislar dependencias, evitar conflictos entre proyectos y trabajar de forma mas profesional con Python desde el inicio.',
      description:
        'venv es una de las primeras practicas que deberias adoptar al trabajar con Python. No es solo una comodidad: es la base para aislar dependencias, evitar conflictos y trabajar de forma mantenible.',
      readingTime: '8 min',
      image: '/python.webp',
      topics: ['venv', 'Entornos virtuales', 'pip', 'Buenas practicas'],
    },
    'pip-y-dependencias': {
      order: 3,
      badge: 'Publicacion 03',
      title: 'Como instalar paquetes con pip y manejar dependencias sin desorden',
      excerpt: 'Una guia inicial para instalar librerias, fijar versiones y mantener proyectos de Python mas reproducibles.',
      description:
        'Despues de entender venv, el siguiente paso natural es aprender a trabajar con pip y requirements.txt de una forma limpia y predecible.',
      readingTime: '7 min',
      image: '/python.webp',
      topics: ['pip', 'requirements.txt', 'Dependencias', 'Flujo de trabajo'],
    },
  },
  en: {
    'certificacion-inicial-python': {
      order: 1,
      badge: 'Publication 01',
      title: 'How to prepare for an entry-level Python certification',
      excerpt: 'A long-form guide with the core content you need to study for an entry-level certification such as PCEP.',
      description:
        'This publication brings together the fundamentals you usually need to master for an entry-level Python certification: core language concepts, operators, collections, functions, mutability, and error handling.',
      readingTime: '18 min',
      image: '/python.webp',
      topics: ['PCEP', 'Fundamentals', 'Operators', 'Collections', 'Functions'],
    },
    venv: {
      order: 2,
      badge: 'Publication 02',
      title: 'How to create a virtual environment with venv and why it matters',
      excerpt:
        'A practical guide to isolate dependencies, avoid conflicts between projects, and work more professionally with Python from the start.',
      description:
        '`venv` is one of the first practices you should adopt when working with Python. It is not just a convenience: it is the basis for isolating dependencies, avoiding conflicts, and working in a maintainable way.',
      readingTime: '8 min',
      image: '/python.webp',
      topics: ['venv', 'Virtual environments', 'pip', 'Best practices'],
    },
    'pip-y-dependencias': {
      order: 3,
      badge: 'Publication 03',
      title: 'How to install packages with pip and manage dependencies without chaos',
      excerpt: 'An introductory guide to installing libraries, pinning versions, and keeping Python projects more reproducible.',
      description:
        'After understanding `venv`, the next natural step is learning how to work with `pip` and `requirements.txt` in a clean and predictable way.',
      readingTime: '7 min',
      image: '/python.webp',
      topics: ['pip', 'requirements.txt', 'Dependencies', 'Workflow'],
    },
  },
}

import type { Language } from '@/i18n/translations'
import type { PythonPublication, PythonPublicationSection } from '@/modules/python/domain/python-publication'

type LocalizedSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  note?: string
  codeCaption?: string
}

type LocalizedPublication = {
  badge: string
  title: string
  excerpt: string
  description: string
  topics: string[]
  sections: Record<string, LocalizedSection>
}

const englishPythonPublications: Record<string, LocalizedPublication> = {
  'certificacion-inicial-python': {
    badge: 'Publication 01',
    title: 'How to prepare for an entry-level Python certification',
    excerpt:
      'A long-form guide with the core content you need to study for an entry-level certification such as PCEP.',
    description:
      'This publication brings together the fundamentals you usually need to master for an entry-level Python certification: core language concepts, operators, collections, functions, mutability, and error handling.',
    topics: ['PCEP', 'Fundamentals', 'Operators', 'Collections', 'Functions'],
    sections: {
      fundamentos: {
        title: 'Programming fundamentals',
        paragraphs: [
          'Before studying structures, functions, or collections, it is useful to understand what makes an instruction valid within a language. Python is approachable, but it is still a formal system with precise rules.',
          'Separating lexicon, syntax, and semantics helps you read errors with better judgment and understand why an instruction can be well written yet still poorly framed.',
        ],
        bullets: [
          'Lexicon: the set of words and symbols made available by the language.',
          'Syntax: the rules that determine whether a sequence is correctly formed.',
          'Semantics: the meaning of the instruction and its coherence with the problem it is trying to solve.',
        ],
        note:
          'A large share of beginner Python mistakes becomes easier to understand when you separate syntax problems from logic problems.',
      },
      interprete: {
        title: 'The interpreter',
        bullets: [
          'It reads the source code from top to bottom and from left to right.',
          'It checks lexical and syntactic validity as well as semantic coherence.',
          'It runs the program and reports errors when the flow breaks.',
        ],
      },
      'python-como-lenguaje': {
        title: 'Python as a language',
        paragraphs: [
          'Python is a high-level, interpreted, general-purpose programming language with dynamic semantics and syntax designed for readability.',
          'Its name comes from Monty Python’s Flying Circus and it was created by Guido van Rossum. Its popularity comes from an unusual combination: low entry barrier and professional usefulness.',
        ],
        bullets: [
          'Easy and intuitive.',
          'Open source.',
          'Readable and close to English.',
          'Suitable for everyday tasks and real projects.',
        ],
      },
      implementaciones: {
        title: 'Versions and implementations',
        bullets: [
          'CPython: the canonical implementation maintained by the Python Software Foundation.',
          'Cython: allows Python code with minor adjustments to be translated toward C.',
          'Jython: an implementation built on top of Java.',
          'PyPy: focused on performance, with different behavior in some compatibility areas.',
        ],
      },
      'literales-y-numeros': {
        title: 'Literals, numbers, and operators',
        paragraphs: [
          'A literal is a value written directly in the code. For an entry-level certification, it is essential to recognize integers, floats, octal values, hexadecimal values, and scientific notation.',
          'You also need to understand the real behavior of division, modulo, exponentiation, and operator precedence.',
        ],
        bullets: [
          'Positive integers do not need a `+` sign, although using it is valid.',
          'Floats can be written as `0.5` or `.5`.',
          'Python prefers shorter representations when displaying a number.',
          '`**` has high precedence and right-to-left associativity.',
          '`/` always returns a float.',
          '`//` performs floor division.',
          '`%` returns the remainder.',
        ],
        codeCaption: 'Basic numeric representations',
      },
      operaciones: {
        title: 'Operations you should recognize',
      },
      'variables-y-estilo': {
        title: 'Variables and style',
        paragraphs: [
          'Python does not impose strict limits on name length and allows a wide set of characters, but a clear variable is always better than a variable that is merely valid.',
        ],
        bullets: [
          'They must start with a letter or underscore.',
          'They must not contain spaces.',
          'The name should communicate intent.',
          'Variables and functions should use lowercase words separated by underscores.',
          'Readability comes first: style is not decoration, it is maintainability.',
        ],
      },
      'flujo-y-logica': {
        title: 'Control flow and logic',
        paragraphs: [
          'Both `while` and `for` loops can use an `else` clause, which runs when the loop finishes without hitting `break`.',
          'It is also worth mastering basic logic tables to understand `and`, `or`, and `not`.',
        ],
        bullets: [
          'Conjunction: `1 and 1 = 1`; any other case results in `0`.',
          'Disjunction: `0 or 0 = 0`; any other case results in `1`.',
        ],
      },
      'bits-y-binario': {
        title: 'Bits, shifts, and negatives',
        paragraphs: [
          'Bitwise operators and binary shifts are also common topics in an entry-level certification.',
        ],
        bullets: [
          '`&`: bit-level conjunction.',
          '`|`: bit-level disjunction.',
          '`~`: bitwise negation.',
          '`^`: xor.',
          '`<<` shifts left and `>>` shifts right.',
        ],
        note:
          'Python represents negative numbers using two’s complement. Conceptually, the process is: convert to binary, invert bits, and add one.',
      },
      colecciones: {
        title: 'Collections and mutability',
        paragraphs: [
          'The most important structures for an entry-level certification are lists, tuples, and dictionaries. It is also critical to understand the difference between mutable and immutable data.',
        ],
        bullets: [
          'Lists: `append` adds to the end, `insert` adds at a specific position, and slicing lets you copy or extract parts.',
          'Tuples: immutable sequences, and a single-item tuple needs a trailing comma: `(1,)`.',
          'Dictionaries: `popitem` removes and returns the last pair in modern versions; since Python 3.7, they preserve insertion order.',
          'Mutable data can be changed in place. Immutable data cannot be altered that way.',
        ],
      },
      'funciones-y-excepciones': {
        title: 'Functions and exceptions',
        paragraphs: [
          'In the core Python portion, you should understand scope, the use of `global`, recursion, and error handling.',
        ],
        bullets: [
          'An outer variable can be read inside a function if there is no local variable with the same name.',
          '`global` extends the scope so you can read and modify a variable defined outside the function.',
          'The default maximum recursion depth is usually 1000.',
          'Exception arguments are stored in `args` as a tuple.',
        ],
      },
    },
  },
  venv: {
    badge: 'Publication 02',
    title: 'How to create a virtual environment with venv and why it matters',
    excerpt:
      'A practical guide to isolate dependencies, avoid conflicts between projects, and work more professionally with Python from the start.',
    description:
      '`venv` is one of the first practices you should adopt when working with Python. It is not just a convenience: it is the basis for isolating dependencies, avoiding conflicts, and working in a maintainable way.',
    topics: ['venv', 'Virtual environments', 'pip', 'Best practices'],
    sections: {
      'por-que-importa': {
        title: 'Why it matters',
        bullets: [
          'It isolates dependencies per project.',
          'It avoids version conflicts between different jobs.',
          'It lets you install packages without polluting the global Python environment.',
          'It makes it easier to reproduce an environment on another machine or across a team.',
        ],
      },
      'que-es': {
        title: 'What a virtual environment is',
        paragraphs: [
          'A virtual environment is an isolated folder that contains a local Python installation and its packages for a specific project.',
          'If you work without `venv`, every package you install goes into the global environment. That may feel convenient at first, but it becomes fragile when you have different projects or need to reproduce the same environment on another machine.',
        ],
      },
      creacion: {
        title: 'How to create it step by step',
        paragraphs: [
          'Python includes `venv` in the standard library, so in most cases you do not need to install anything extra.',
        ],
      },
      activacion: {
        title: 'How to activate it',
        bullets: [
          'macOS or Linux: `source .venv/bin/activate`',
          'Windows: `.venv\\\\Scripts\\\\activate`',
        ],
      },
      'buenas-practicas': {
        title: 'Best practices',
        bullets: [
          'Use a folder such as `.venv` or `venv` inside the project.',
          'Do not commit the virtual environment to the repository.',
          'Store dependencies in `requirements.txt` when the project needs it.',
          'Activate the environment before installing or running project packages.',
        ],
      },
      'errores-comunes': {
        title: 'Common mistakes',
        bullets: [
          'Installing packages globally for every project.',
          'Forgetting to activate the environment before installing dependencies.',
          'Pushing the virtual environment folder to the repository.',
          'Assuming `venv` is optional even when you work with multiple Python projects.',
        ],
      },
    },
  },
  'pip-y-dependencias': {
    badge: 'Publication 03',
    title: 'How to install packages with pip and manage dependencies without chaos',
    excerpt: 'An introductory guide to installing libraries, pinning versions, and keeping Python projects more reproducible.',
    description:
      'After understanding `venv`, the next natural step is learning how to work with `pip` and `requirements.txt` in a clean and predictable way.',
    topics: ['pip', 'requirements.txt', 'Dependencies', 'Workflow'],
    sections: {
      'que-hace-pip': {
        title: 'What pip does',
        paragraphs: [
          '`pip` is the most common package manager in Python. It lets you install, update, and remove the libraries your project needs.',
        ],
      },
      'instalacion-basica': {
        title: 'Basic installation',
        bullets: [
          'Always install packages inside an active virtual environment.',
          'Check which package you are installing and why you need it.',
        ],
      },
      'verificar-y-listar': {
        title: 'How to verify the environment',
      },
      requirements: {
        title: 'Saving dependencies',
        paragraphs: [
          'When a project already has a defined set of libraries, it is worth exporting them so the environment can be recreated on another machine or at a later time.',
        ],
      },
      orden: {
        title: 'Why this matters',
        bullets: [
          'It prevents you from installing packages that you later forget to document.',
          'It makes the project easier to share.',
          'It reduces differences between your machine and someone else’s.',
        ],
      },
    },
  },
}

function localizeSection(section: PythonPublicationSection, translated?: LocalizedSection): PythonPublicationSection {
  if (!translated) {
    return section
  }

  return {
    ...section,
    title: translated.title,
    paragraphs: translated.paragraphs ?? section.paragraphs,
    bullets: translated.bullets ?? section.bullets,
    note: translated.note ?? section.note,
    code: section.code
      ? {
          ...section.code,
          caption: translated.codeCaption ?? section.code.caption,
        }
      : undefined,
  }
}

export function localizePythonPublication(publication: PythonPublication, language: Language): PythonPublication {
  if (language === 'es') {
    return publication
  }

  const translated = englishPythonPublications[publication.slug]

  if (!translated) {
    return publication
  }

  return {
    ...publication,
    badge: translated.badge,
    title: translated.title,
    excerpt: translated.excerpt,
    description: translated.description,
    topics: translated.topics,
    sections: publication.sections.map((section) => localizeSection(section, translated.sections[section.id])),
  }
}

export function localizePythonPublications(publications: PythonPublication[], language: Language) {
  return publications.map((publication) => localizePythonPublication(publication, language))
}

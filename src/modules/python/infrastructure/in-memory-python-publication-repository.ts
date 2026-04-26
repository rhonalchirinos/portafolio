import type { PythonPublication } from '@/modules/python/domain/python-publication'
import type { PythonPublicationRepository } from '@/modules/python/domain/python-publication-repository'

const publications: PythonPublication[] = [
  {
    slug: 'certificacion-inicial-python',
    order: 1,
    badge: 'Publicacion 01',
    title: 'Como obtener una certificacion inicial de Python',
    excerpt:
      'Una guia larga con todo el contenido base que necesitas estudiar para preparar una certificacion inicial como PCEP.',
    description:
      'Esta publicacion concentra los fundamentos que normalmente necesitas dominar para una certificacion inicial de Python: conceptos base del lenguaje, operadores, colecciones, funciones, mutabilidad y manejo de errores.',
    readingTime: '18 min',
    image: '/python.webp',
    topics: ['PCEP', 'Fundamentos', 'Operadores', 'Colecciones', 'Funciones'],
    sections: [
      {
        id: 'fundamentos',
        title: 'Fundamentos de programacion',
        paragraphs: [
          'Antes de estudiar estructuras, funciones o colecciones, conviene entender que hace que una instruccion sea valida dentro de un lenguaje. Python es amigable, pero sigue siendo un sistema formal con reglas precisas.',
          'Separar lexico, sintaxis y semantica ayuda a leer errores con mas criterio y a entender por que una instruccion puede estar bien escrita, pero aun asi estar mal planteada.',
        ],
        bullets: [
          'Lexico: conjunto de palabras y simbolos que el lenguaje pone a disposicion.',
          'Sintaxis: reglas que determinan si una secuencia esta correctamente construida.',
          'Semantica: significado de la instruccion y coherencia con el problema que intenta resolver.',
        ],
        note:
          'Una gran parte de los errores iniciales en Python se entienden mejor si separas problemas de sintaxis de problemas de logica.',
      },
      {
        id: 'interprete',
        title: 'El interprete',
        bullets: [
          'Lee el codigo fuente de arriba hacia abajo y de izquierda a derecha.',
          'Verifica validez lexico-sintactica y coherencia semantica.',
          'Ejecuta el programa y comunica errores cuando el flujo se rompe.',
        ],
      },
      {
        id: 'python-como-lenguaje',
        title: 'Python como lenguaje',
        paragraphs: [
          'Python es un lenguaje de programacion de alto nivel, interpretado, de proposito general, con semantica dinamica y una sintaxis orientada a la legibilidad.',
          'Su nombre proviene de Monty Python’s Flying Circus y fue creado por Guido van Rossum. Su popularidad viene de una combinacion poco comun: facilidad de entrada y utilidad profesional.',
        ],
        bullets: [
          'Facil e intuitivo.',
          'Codigo abierto.',
          'Legible y cercano al ingles.',
          'Adecuado para tareas cotidianas y proyectos reales.',
        ],
      },
      {
        id: 'implementaciones',
        title: 'Versiones e implementaciones',
        bullets: [
          'CPython: implementacion canonica mantenida por la Python Software Foundation.',
          'Cython: permite traducir codigo Python con ajustes menores hacia C.',
          'Jython: implementacion construida sobre Java.',
          'PyPy: enfocada en rendimiento y con un comportamiento distinto en algunas compatibilidades.',
        ],
      },
      {
        id: 'literales-y-numeros',
        title: 'Literales, numeros y operadores',
        paragraphs: [
          'Un literal es un valor escrito directamente en el codigo. En una certificacion inicial es fundamental reconocer enteros, flotantes, octales, hexadecimales y notacion cientifica.',
          'Tambien necesitas entender el comportamiento real de division, modulo, exponenciacion y precedencia.',
        ],
        code: {
          language: 'python',
          caption: 'Representaciones numericas basicas',
          content: `users = 11_111_111\noctal_value = 0o123\nhex_value = 0x123\nspeed_of_light = 3E8\nelectron_mass = 1E-22`,
        },
        bullets: [
          'Los enteros positivos no necesitan signo +, aunque es valido usarlo.',
          'Los flotantes pueden escribirse como 0.5 o .5.',
          'Python prefiere representaciones cortas cuando muestra un numero.',
          '`**` tiene alta prioridad y asociatividad de derecha a izquierda.',
          '`/` siempre devuelve flotante.',
          '`//` hace floor division.',
          '`%` devuelve el residuo.',
        ],
      },
      {
        id: 'operaciones',
        title: 'Operaciones que debes reconocer',
        code: {
          language: 'python',
          content: `print(6 / 4)        # 1.5\nprint(6 // 4)       # 1\nprint(-6 // 4)      # -2\nprint(6 % 4)        # 2\nprint(2 ** 3 ** 2)  # 512`,
        },
      },
      {
        id: 'variables-y-estilo',
        title: 'Variables y estilo',
        paragraphs: [
          'Python no impone restricciones fuertes sobre la longitud de los nombres y permite un amplio conjunto de caracteres, pero una variable clara siempre vale mas que una variable solo valida.',
        ],
        bullets: [
          'Deben comenzar con una letra o guion bajo.',
          'No deben usar espacios.',
          'El nombre debe comunicar intencion.',
          'Variables y funciones en minusculas con palabras separadas por guion bajo.',
          'La legibilidad es prioridad: el estilo no es decoracion, es mantenibilidad.',
        ],
        code: {
          language: 'python',
          content: `total_price = 10\nuser_name = "Rhonal"\ncounter += 2 * j\nrepeated = "James" * 3`,
        },
      },
      {
        id: 'flujo-y-logica',
        title: 'Control de flujo y logica',
        paragraphs: [
          'Los ciclos while y for pueden usar una clausula else, que se ejecuta cuando el bucle termina sin haber pasado por break.',
          'Tambien conviene dominar las tablas basicas de logica para entender and, or y not.',
        ],
        bullets: [
          'Conjuncion: 1 and 1 = 1; cualquier otro caso da 0.',
          'Disyuncion: 0 or 0 = 0; cualquier otro caso da 1.',
        ],
      },
      {
        id: 'bits-y-binario',
        title: 'Bits, desplazamientos y negativos',
        paragraphs: [
          'En una certificacion inicial tambien es comun ver operadores bit a bit y desplazamientos binarios.',
        ],
        bullets: [
          '&: conjuncion a nivel de bits.',
          '|: disyuncion a nivel de bits.',
          '~: negacion bit a bit.',
          '^: xor.',
          '<< desplaza a la izquierda y >> desplaza a la derecha.',
        ],
        code: {
          language: 'python',
          content: `i = 15\nj = 20\n\nbit_and = i & j\nbit_or = i | j\nbit_xor = i ^ j\nbit_not = ~i\n\nprint(17 >> 1)  # 8\nprint(17 << 2)  # 68`,
        },
        note:
          'Python representa negativos usando complemento a dos. El proceso conceptual es: pasar a binario, invertir bits y sumar uno.',
      },
      {
        id: 'colecciones',
        title: 'Colecciones y mutabilidad',
        paragraphs: [
          'Las estructuras mas importantes para una certificacion inicial son listas, tuplas y diccionarios. Tambien es clave entender la diferencia entre datos mutables e inmutables.',
        ],
        bullets: [
          'Listas: append agrega al final, insert agrega en una posicion especifica y el slicing permite copiar o extraer partes.',
          'Tuplas: son secuencias inmutables y una tupla de un elemento necesita coma: (1,).',
          'Diccionarios: popitem elimina y retorna el ultimo par en versiones modernas; desde Python 3.7 conservan orden de insercion.',
          'Un dato mutable puede modificarse in situ. Un dato inmutable no puede alterarse de esa manera.',
        ],
        code: {
          language: 'python',
          content: `arr = [10, 8, 6, 4, 2]\nprint(arr[1:3])   # [8, 6]\n\ncopy_arr = arr[:]\nsingle_tuple = (1,)\nuser = {"name": "Rhonal", "role": "developer"}`,
        },
      },
      {
        id: 'funciones-y-excepciones',
        title: 'Funciones y excepciones',
        paragraphs: [
          'En la parte base de Python debes entender alcance, uso de global, recursividad y manejo de errores.',
        ],
        bullets: [
          'Una variable externa puede leerse dentro de una funcion si no hay otra local con el mismo nombre.',
          '`global` extiende el alcance para leer y modificar una variable definida fuera de la funcion.',
          'La profundidad maxima de recursion suele ser 1000 por defecto.',
          'Los argumentos de una excepcion quedan en args y se almacenan como tupla.',
        ],
        code: {
          language: 'python',
          content: `def my_function():\n    global var\n    var = 2\n    print(var)\n\nvar = 1\nmy_function()\nprint(var)\n\ntry:\n    1 / 0\nexcept ZeroDivisionError as e:\n    print(e.args)`,
        },
      },
    ],
  },
  {
    slug: 'venv',
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
    sections: [
      {
        id: 'por-que-importa',
        title: 'Por que importa',
        bullets: [
          'Aisla dependencias por proyecto.',
          'Evita conflictos de versiones entre trabajos distintos.',
          'Te permite instalar paquetes sin contaminar el Python global.',
          'Hace mas facil reproducir un entorno en otra maquina o dentro de un equipo.',
        ],
      },
      {
        id: 'que-es',
        title: 'Que es un entorno virtual',
        paragraphs: [
          'Un entorno virtual es una carpeta aislada que contiene una instalacion local de Python y sus paquetes para un proyecto especifico.',
          'Si trabajas sin venv, cada paquete que instales va al entorno global. Eso parece comodo al principio, pero se vuelve fragil cuando tienes proyectos distintos o necesitas reproducir el mismo entorno en otra maquina.',
        ],
      },
      {
        id: 'creacion',
        title: 'Como crearlo paso a paso',
        paragraphs: [
          'Python incluye venv en la libreria estandar, asi que no necesitas instalar nada adicional en la mayoria de los casos.',
        ],
        code: {
          language: 'bash',
          content: `python -m venv .venv`,
        },
      },
      {
        id: 'activacion',
        title: 'Como activarlo',
        bullets: [
          'macOS o Linux: source .venv/bin/activate',
          'Windows: .venv\\Scripts\\activate',
        ],
      },
      {
        id: 'buenas-practicas',
        title: 'Buenas practicas',
        bullets: [
          'Usa una carpeta como .venv o venv dentro del proyecto.',
          'No subas el entorno virtual al repositorio.',
          'Guarda dependencias en requirements.txt cuando el proyecto lo necesite.',
          'Activa el entorno antes de instalar o ejecutar paquetes del proyecto.',
        ],
        code: {
          language: 'bash',
          content: `pip install requests\npip freeze > requirements.txt`,
        },
      },
      {
        id: 'errores-comunes',
        title: 'Errores comunes',
        bullets: [
          'Instalar paquetes globalmente para todos los proyectos.',
          'Olvidar activar el entorno antes de instalar dependencias.',
          'Subir la carpeta del entorno virtual al repositorio.',
          'Pensar que venv es opcional incluso cuando trabajas con varios proyectos de Python.',
        ],
      },
    ],
  },
  {
    slug: 'pip-y-dependencias',
    order: 3,
    badge: 'Publicacion 03',
    title: 'Como instalar paquetes con pip y manejar dependencias sin desorden',
    excerpt:
      'Una guia inicial para instalar librerias, fijar versiones y mantener proyectos de Python mas reproducibles.',
    description:
      'Despues de entender venv, el siguiente paso natural es aprender a trabajar con pip y requirements.txt de una forma limpia y predecible.',
    readingTime: '7 min',
    image: '/python.webp',
    topics: ['pip', 'requirements.txt', 'Dependencias', 'Flujo de trabajo'],
    sections: [
      {
        id: 'que-hace-pip',
        title: 'Que hace pip',
        paragraphs: [
          'pip es el gestor de paquetes mas comun en Python. Te permite instalar, actualizar y remover librerias que tu proyecto necesita.',
        ],
      },
      {
        id: 'instalacion-basica',
        title: 'Instalacion basica',
        code: {
          language: 'bash',
          content: `pip install requests\npip install flask`,
        },
        bullets: [
          'Instala siempre dentro de un entorno virtual activo.',
          'Revisa que paquete estas instalando y para que lo necesitas.',
        ],
      },
      {
        id: 'verificar-y-listar',
        title: 'Como verificar el entorno',
        code: {
          language: 'bash',
          content: `pip list\npip show requests`,
        },
      },
      {
        id: 'requirements',
        title: 'Guardar dependencias',
        paragraphs: [
          'Cuando un proyecto ya tiene un conjunto de librerias definido, conviene exportarlas para poder recrear el entorno en otra maquina o en otro momento.',
        ],
        code: {
          language: 'bash',
          content: `pip freeze > requirements.txt\npip install -r requirements.txt`,
        },
      },
      {
        id: 'orden',
        title: 'Por que esto importa',
        bullets: [
          'Evita instalar paquetes que luego olvidas documentar.',
          'Hace mas facil compartir el proyecto.',
          'Reduce diferencias entre tu maquina y la de otra persona.',
        ],
      },
    ],
  },
]

export class InMemoryPythonPublicationRepository implements PythonPublicationRepository {
  findAll() {
    return [...publications].sort((left, right) => left.order - right.order)
  }

  findBySlug(slug: string) {
    return publications.find((publication) => publication.slug === slug) ?? null
  }
}

export const pythonPublicationRepository = new InMemoryPythonPublicationRepository()

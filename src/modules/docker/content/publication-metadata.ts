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

export const dockerPublicationMetadata: Record<Language, Record<string, PublicationMetadata>> = {
  es: {
    'api-ligera-en-docker': {
      order: 1,
      badge: 'Publicacion 01',
      title: 'API ligera en Docker',
      excerpt: 'Construccion de una API menor a 20 MB usando multi-stage build, Alpine y un flujo claro de empaquetado.',
      description:
        'Una introduccion practica a la construccion de una imagen Docker ligera para una API separando build y runtime y manteniendo pequeno el contenedor final.',
      readingTime: '7 min',
      image: '/docker.webp',
      topics: ['Docker', 'API', 'Go', 'Alpine'],
    },
    'volumenes-para-bases-de-datos': {
      order: 2,
      badge: 'Publicacion 02',
      title: 'Volumenes para bases de datos',
      excerpt: 'Persistencia de datos en contenedores con una comparacion practica entre motores relacionales y montaje de volumenes.',
      description:
        'Una introduccion practica a los volumenes Docker para servicios con estado, enfocada en persistir datos de base de datos fuera del ciclo de vida del contenedor.',
      readingTime: '6 min',
      image: '/docker.webp',
      topics: ['Docker', 'MySQL', 'Postgres', 'MariaDB', 'Volumes'],
    },
    'cluster-docker-swarm-de-3-nodos': {
      order: 3,
      badge: 'Publicacion 03',
      title: 'Cluster Docker Swarm de 3 nodos',
      excerpt: 'Configuracion de un cluster distribuido para entender nodos, coordinacion de servicios y operacion de workloads.',
      description:
        'Un recorrido introductorio por un cluster pequeno de Docker Swarm para entender managers, workers, redes overlay y servicios replicados.',
      readingTime: '8 min',
      image: '/docker.webp',
      topics: ['Docker Swarm', 'Cluster', 'Containers'],
    },
    'reverse-proxy-para-microservicios': {
      order: 4,
      badge: 'Publicacion 04',
      title: 'Reverse proxy para microservicios',
      excerpt: 'Enrutamiento de multiples servicios con NGINX, Docker Compose y Swarm para acercar la arquitectura a un escenario real.',
      description:
        'Una guia introductoria para enrutar multiples servicios detras de un reverse proxy en Docker Swarm con ubicacion explicita de servicios y estructura de stack.',
      readingTime: '9 min',
      image: '/docker.webp',
      topics: ['NGINX', 'Compose', 'Swarm', 'Microservices'],
    },
  },
  en: {
    'api-ligera-en-docker': {
      order: 1,
      badge: 'Publication 01',
      title: 'Lightweight API in Docker',
      excerpt: 'A compact API build under 20 MB using multi-stage builds, Alpine, and a clean packaging flow.',
      description:
        'A practical introduction to building a lightweight Docker image for an API by separating build and runtime stages and keeping the final container small.',
      readingTime: '7 min',
      image: '/docker.webp',
      topics: ['Docker', 'API', 'Go', 'Alpine'],
    },
    'volumenes-para-bases-de-datos': {
      order: 2,
      badge: 'Publication 02',
      title: 'Volumes for databases',
      excerpt: 'Data persistence in containers with a practical comparison across relational engines and volume mounting.',
      description:
        'A practical introduction to Docker volumes for stateful services, focused on persisting database data outside the container lifecycle.',
      readingTime: '6 min',
      image: '/docker.webp',
      topics: ['Docker', 'MySQL', 'Postgres', 'MariaDB', 'Volumes'],
    },
    'cluster-docker-swarm-de-3-nodos': {
      order: 3,
      badge: 'Publication 03',
      title: '3-node Docker Swarm cluster',
      excerpt: 'Distributed cluster setup to understand nodes, service coordination, and workload operations.',
      description:
        'An introductory walkthrough of a small Docker Swarm cluster to understand managers, workers, overlay networks, and replicated services.',
      readingTime: '8 min',
      image: '/docker.webp',
      topics: ['Docker Swarm', 'Cluster', 'Containers'],
    },
    'reverse-proxy-para-microservicios': {
      order: 4,
      badge: 'Publication 04',
      title: 'Reverse proxy for microservices',
      excerpt: 'Routing multiple services with NGINX, Docker Compose, and Swarm to move closer to a real architecture.',
      description:
        'An introductory guide to routing multiple services behind a reverse proxy in Docker Swarm with explicit service placement and stack structure.',
      readingTime: '9 min',
      image: '/docker.webp',
      topics: ['NGINX', 'Compose', 'Swarm', 'Microservices'],
    },
  },
}

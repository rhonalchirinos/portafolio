export type Tag = {
  name: string
  color: string
  bgColor: string
}

export type DockerExercise = {
  title?: string
  description?: string
  link?: string
  target?: '_blank' | '_self'
  devto?: string
  tags?: Tag[]
  github?: string
}

const tagDocker: Tag = {
  name: 'docker',
  color: '#fff',
  bgColor: '#000080',
}

const pythonTag: Tag = {
  name: 'python',
  color: 'white',
  bgColor: '#306998',
}

const volumeTag: Tag = {
  name: 'volume',
  color: 'white',
  bgColor: '#FF4500',
}

const postgresTag: Tag = {
  name: 'postgres',
  color: 'white',
  bgColor: '#336791',
}

const mariaDBTag: Tag = {
  name: 'mariaDB',
  color: 'white',
  bgColor: '#483D8B',
}

const mysqlTag: Tag = {
  name: 'MySQL',
  color: 'white',
  bgColor: '#FF8C00',
}

export const dockerExercises: DockerExercise[] = [
  {
    title: 'Build an API on a Docker image that is less than 20 MB',
    description: `
      In this exercise, we aim to build a lightweight Dockerized API that weighs less than 20 MB. 
      To achieve this, we will use a multi-stage build and Alpine Linux a minimal base image designed for small containers. 
      Our API will be written in Go.
    `,
    target: '_blank',
    devto: 'https://dev.to/rhonalchirinos/build-an-api-on-a-docker-image-that-is-less-than-20-mb-4ngb',
    tags: [
      tagDocker,
      {
        name: 'api',
        color: 'white',
        bgColor: '#4B0082',
      },
      {
        name: 'golang',
        color: 'white',
        bgColor: '#A0522D',
      },
      {
        name: 'alpine',
        color: 'white',
        bgColor: '#034C53',
      },
    ],
    github: 'https://github.com/rhonalchirinos/docker/tree/master/exec01',
  },
  {
    title: 'Configuration of volumes for MySQL, PostgreSQL and MariaDB in Docker containers',
    description: `
      In this exercise, we will learn how to configure volumes for MySQL, PostgreSQL, and MariaDB in Docker containers. 
      This is essential for data persistence and management in containerized databases.
    `,
    target: '_blank',
    devto: 'https://dev.to/rhonalchirinos/how-to-configure-docker-volumes-for-mysql-gi6',
    tags: [tagDocker, mysqlTag, postgresTag, mariaDBTag, volumeTag],
    github: 'https://github.com/rhonalchirinos/docker/tree/master/exec02',
  },
  {
    title: 'Display a Docker Swarm cluster with 3 nodes',
    description: `
      In this exercise, we will set up a Docker Swarm cluster with three nodes. 
      Docker Swarm is a native clustering and orchestration tool for Docker containers, allowing you to manage a cluster of Docker engines as a single virtual system.
    `,
    target: '_blank',
    devto: 'https://dev.to/rhonalchirinos/display-a-docker-swarm-cluster-with-3-nodes-1hb3',
    tags: [tagDocker, postgresTag],
    github: 'https://github.com/rhonalchirinos/docker/tree/exec03',
  },
  {
    title: 'Configure an inverse proxy with NGINX for 3 microservices using Docker Compose and Docker Swarm',
    description: `
      In this exercise, we will configure an inverse proxy with NGINX for 3 microservices using Docker Compose and Docker Swarm.
      HAPROXY is a web server that can be used as a reverse proxy, load balancer, and HTTP cache.
    `,
    target: '_blank',
    devto:
      'https://dev.to/rhonalchirinos/configure-an-inverse-proxy-with-nginx-for-3-microservices-using-docker-compose-and-docker-swarm-2c26',
    tags: [tagDocker, postgresTag],
  },
]

export const home: DockerExercise[] = [
  {
    title: 'Profile',
    description: 'My profile',
    link: '/profile',
    target: '_self',
    tags: [
      {
        name: 'profile',
        color: 'white',
        bgColor: '#4B0082',
      },
      {
        name: 'developer',
        color: 'white',
        bgColor: '#222831',
      },
    ],
    github: 'https://github.com/rhonalchirinos',
  },
  {
    title: 'PCEP™ – Certified Entry-Level Python Programmer',
    description: 'Notas de pyhthon para el examen PCEP™ – Certified Entry-Level Python Programmer.',
    link: '/python',
    target: '_self',
    tags: [pythonTag],
  },
  {
    title: 'Docker',
    description: 'My Docker notes',
    link: '/docker',
    target: '_self',
    tags: [
      tagDocker,
      {
        name: 'containers',
        color: 'white',
        bgColor: '#4B0082',
      },
      {
        name: 'devops',
        color: 'white',
        bgColor: '#A0522D',
      },
    ],
  },
  ...dockerExercises,
]

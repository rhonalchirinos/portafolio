/**
 *
 */
export type DockerExercise = {
  title?: string
  description?: string
  link?: string
  target?: '_blank' | '_self'
  devto?: string
  tags?: string[]
  github?: string
}

export const dockerExercises: DockerExercise[] = [
  {
    title: 'Build an API on a Docker image that is less than 20 MB',
    description: `
      In this exercise, we aim to build a lightweight Dockerized API that weighs less than 20 MB. 
      To achieve this, we will use a multi-stage build and Alpine Linux — a minimal base image designed for small containers. 
      Our API will be written in Go.
    `,
    target: '_blank',
    devto: 'https://dev.to/rhonalchirinos/build-an-api-on-a-docker-image-that-is-less-than-20-mb-4ngb',
    tags: ['docker', 'api', 'golang', 'alpine'],
    github: 'https://github.com/rhonalchirinos/docker/tree/master/exec01',
  },
  {
    title: 'Configuration of volumes for MySQL, PostgreSQL and MariaDB in Docker containers',
    description: `
      'In this exercise, we will learn how to configure volumes for MySQL, PostgreSQL, and MariaDB in Docker containers. 
      This is essential for data persistence and management in containerized databases.
    `,
    target: '_blank',
    devto: 'https://dev.to/rhonalchirinos/how-to-configure-docker-volumes-for-mysql-gi6',
    tags: ['docker', 'mysql', 'postgresql', 'mariadb', 'volumes'],
    github: 'https://github.com/rhonalchirinos/docker/tree/master/exec02',
  },
]

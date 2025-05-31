import Image from 'next/image'
import Link from 'next/link'

const exercises = [
  {
    title: 'Build an API on a Docker image that is less than 20 MB',
    description:
      'In this exercise, we aim to build a lightweight Dockerized API that weighs less than 20 MB. To achieve this, we will use a multi-stage build and Alpine Linux — a minimal base image designed for small containers. Our API will be written in Go.',
    link: 'https://dev.to/rhonalchirinos/build-an-api-on-a-docker-image-that-is-less-than-20-mb-4ngb',
  },
  {
    title: 'Configuration of volumes for MySQL, PostgreSQL and MariaDB in Docker containers',
    description:
      'In this exercise, we will learn how to configure volumes for MySQL, PostgreSQL, and MariaDB in Docker containers. This is essential for data persistence and management in containerized databases.',
    link: 'https://dev.to/rhonalchirinos/configuration-of-volumes-for-mysql-postgresql-and-mariadb-in-docker-containers-4f0l',
  },
]
export default function Docker() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center max-m">
        <Image
          src="/97_Docker_logo_logos-512.webp"
          className="w-32 h-32 mb-4"
          width={100}
          height={100}
          alt="Docker logo"
        />
        <h1 className="text-lg font-bold text-gray-800">Docker</h1>
      </div>

      <p className="pl-4 py-2 mt-16 text-sm font-medium text-white bg-yellow-500 rounded-md">
        Estas son mis notas de Docker, espero te puedan servir.
      </p>

      <div className="indent-10 px-4 mt-6 shadow p-2 rounded-md bg-gray-200">
        <p className="text-sm font-light text-justify text-gray-700">
          Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. It
          allows you to package an application with all of its dependencies into a standardized unit for software
          development.
        </p>
      </div>

      <div className="py-8">
        <h2 className="py-4 text-2xl font-bold">Exercises</h2>

        {exercises.map((exercise, index) => (
          <dl key={index} className="p-4 shadow rounded-md mt-3 bg-indigo-50">
            <div className="flex flex-col text-sm">
              <Link
                href={exercise.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <dt className="mb-1 text-md">
                  {index + 1} - {exercise.title}
                </dt>
              </Link>
              <p className="pt-2">{exercise.description}</p>
            </div>
          </dl>
        ))}
      </div>
    </div>
  )
}

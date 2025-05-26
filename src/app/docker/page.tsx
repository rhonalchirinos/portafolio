import Image from 'next/image'
import Link from 'next/link'

const exercises = [
  {
    title: 'Build an API on a Docker image that is less than 20 MB',
    description:
      'In this exercise, we aim to build a lightweight Dockerized API that weighs less than 20 MB. To achieve this, we will use a multi-stage build and Alpine Linux — a minimal base image designed for small containers. Our API will be written in Go.',
    link: 'https://dev.to/rhonalchirinos/build-an-api-on-a-docker-image-that-is-less-than-20-mb-4ngb',
  },
]

export default function Home() {
  return (
    <>
      <div className="relative isolate px-4 pt-6">
        <div className="flex flex-col items-center">
          <Image src="/97_Docker_logo_logos-512.webp" className="w-32 h-32 mb-4" width={100} height={100} alt={''} />

          <h1 className="text-lg font-bold text-gray-800">Docker</h1>
          <p className="text-center text-sm font-light text-gray-500 mt-2">
            Estas son mis notas de Docker, espero te puedan servir.
          </p>
        </div>

        <div className="text-justify ">
          <p className="my-4">
            Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.
            It allows you to package an application with all of its dependencies into a standardized unit for software
            development.
          </p>

          <h2 className="text-2xl font-bold mb-4">Exercises</h2>

          <div className="grid grid-cols-1 gap-4">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-gray-500 p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-white">
                  <Link href={exercise.link} className=" hover:underline" target="_blank" rel="noopener noreferrer">
                    {exercise.title}
                  </Link>
                </h3>
                <p className="text-white text-md">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

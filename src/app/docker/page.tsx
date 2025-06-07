import { dockerExercises } from '@/data/data'
import Link from 'next/link'
import { FaDocker } from 'react-icons/fa'

export default function Docker() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center max-m">
        <FaDocker className="text-8xl" />
        <br />
        <h1 className="text-4xl font-bold text-gray-800">DOCKER</h1>
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
        {dockerExercises.map((exercise, index) => (
          <dl key={index} className="p-4 shadow rounded-md mt-3 bg-indigo-50">
            <div className="flex flex-col text-sm">
              <Link
                href={exercise.link || exercise.devto || '#'}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <dt className="mb-1 text-md">
                  {index + 1} - {exercise.title}
                </dt>
              </Link>
              <p className="pt-2">{exercise.description}</p>
              <div className="flex flex-wrap mt-2">
                {exercise.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </dl>
        ))}
      </div>
    </div>
  )
}

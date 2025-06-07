import { dockerExercises } from '@/data/data'
import Link from 'next/link'
import { LiaGithub } from 'react-icons/lia'

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      <div className="bg-white rounded shadow my-4 p-4">
        <Link href="/profile" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-bold mb-2">Rhonal Chirinos</h3>
        </Link>
        <p>My profile</p>
      </div>

      <div className="bg-white rounded shadow my-4 p-4">
        <Link href="/python" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-bold mb-2">PCEP™ – Certified Entry-Level Python Programmer</h3>
        </Link>
        <p>Notas de pyhthon para el examen PCEP™ – Certified Entry-Level Python Programmer.</p>
      </div>

      <div className="bg-white rounded shadow my-4 p-4">
        <Link href="docker" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-bold bg-white mb-2">Docker</h3>
        </Link>
        <p>Docker Notes, Listado de Ejercicios </p>
      </div>

      {dockerExercises.map((exercise, index) => (
        <div key={index} className="bg-white rounded shadow my-4 p-4">
          <div className="flex flex-col text-sm">
            <div className="flex flex-row justify-between items-center">
              <Link
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
                href={exercise.link || exercise.devto || '#'}
                target={exercise.target || '_self'}
              >
                <h3 className="text-xl font-bold bg-white mb-2">{exercise.title}</h3>
              </Link>
            </div>
            <p className="pt-2">{exercise.description}</p>
            <div className="flex justify-between items-start mt-2">
              <div className="flex flex-wrap">
                {exercise.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {exercise.github && (
                <Link href={exercise.github} className="ml-4 mt-1" target="_blank" rel="noopener noreferrer">
                  <LiaGithub className="text-3xl" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

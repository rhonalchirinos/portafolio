import { FaAws } from 'react-icons/fa'

export default function Docker() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center max-m">
        <FaAws className="text-8xl" />
        <br />
        <h1 className="text-4xl font-bold text-gray-800">AWS</h1>
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
      </div>
    </div>
  )
}

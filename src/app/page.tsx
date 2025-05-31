import Link from 'next/link'

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
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
    </>
  )
}

import Link from 'next/link'

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      <div className="  bg-white p-4 rounded shadow m-4">
        <h3 className="text-xl font-bold mb-2">PCEP™ – Certified Entry-Level Python Programmer</h3>
        <Link href="/python" className="text-blue-500 hover:underline">
          Go to
        </Link>
      </div>

      <div className="   bg-white p-4 rounded shadow m-4">
        <h3 className="text-xl font-bold mb-2">Docker</h3>
        <p>Docker Notes</p>
      </div>
    </>
  )
}

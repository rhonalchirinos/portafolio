import Link from 'next/link'

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-4">Welcome to RHO</h1>

        <div className="flex ">
          <div className="w-32 flex ">
            <nav>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Python
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Docker
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Gaussian
                  </a>
                </li>
                <li className="mb-2">
                  <Link className="text-blue-500 hover:underline" href="/profile">
                    {' '}
                    My Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-5/6">
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
          </div>
        </div>
      </main>

      <footer className="bg-stone-950 p-4 text-center text-gray-50 items-center	flex justify-center h-16">
        <p className="text-sm font-bold">Copyright © 2025 RHO | Powered by Rhonal Chirinos</p>
      </footer>
    </>
  )
}

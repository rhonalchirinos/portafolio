import { FaGithub, FaLinkedin } from 'react-icons/fa'

/**
 *
 * @returns
 */
export default function Profile() {
  return (
    <>
      <div className="flex pt-48">
        <div className="w-5/6 items-center flex flex-col">
          <div className="mr-6"></div>
          <h1 className="font-roboto-blod mb-2 text-4xl text-gray-900">Rhonal Chirinos</h1>
          <h2 className="text-gray-600 text-2xl">👨🏽‍💻 Software Developer</h2>
          <div className="my-2 text-blue-700 font-bold text-sm">
            <a href="/rhonalchirinos.pdf">Descarga mi curriculum aquí</a>
          </div>
        </div>
        <div className="w-1/6 items-center flex flex-col">
          <a href="https://github.com/rhonalchirinos/rhonalchirinos.github.io" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl text-gray-800" />
          </a>
          <br />
          <a className="pt-4" href="https://www.linkedin.com/in/rhonal/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-4xl text-gray-800" />
          </a>
        </div>
      </div>
    </>
  )
}

import { FaGithub, FaLinkedin } from 'react-icons/fa'

/**
 *
 * @returns
 */
export default function Profile() {
  return (
    <>
      <div className="flex pt-48">
        <div className="w-11/12 items-center flex flex-col">
          <div className="mr-6"></div>
          <h1 className="font-blod mb-2 text-3xl text-gray-700">Rhonal Chirinos</h1>
          <h2 className="text-gray-600 text-xl">👨🏽‍💻 Software Developer</h2>
          <div className="my-2 text-blue-700 font-bold text-sm">
            <a href="/rhonalchirinos.pdf">Download my resume here</a>
          </div>
        </div>
        <div className="w-1/12 items-center flex flex-col">
          <a href="https://github.com/rhonalchirinos" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-gray-800" />
          </a>
          <br />
          <a className="pt-4" href="https://www.linkedin.com/in/rhonal/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-3xl text-gray-800" />
          </a>
        </div>
      </div>
    </>
  )
}

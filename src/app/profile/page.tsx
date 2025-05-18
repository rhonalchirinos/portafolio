import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Portfolio from './../Components/Portfolio'

import Skills from '../Components/Skill'

/**
 *
 * @returns
 */
export default function Profile() {
  return (
    <>
      <div className="flex flex-col-2 justify-between border-gray-400 bg-white ">
        <div className="mr-4">
          <p className="text-sm text-gray-600">👨🏽‍💻 Software Developer</p>
          <h1 className="font-roboto-blod mb-2 text-3xl  text-gray-900">Rhonal Chirinos</h1>
          <div className="my-2 text-blue-700 font-bold text-sm">
            <a href="/rhonalchirinos.pdf">Descarga mi curriculum aquí</a>
          </div>
          <p className="text-base text-gray-700">
            He trabajado en múltiples industrias, contribuyendo tanto en el diseño como en la implementación de sistemas
            robustos y escalables. Mis habilidades incluyen desde la integración de APIs y el desarrollo de plugins
            hasta la gestión de infraestructuras de sistemas heredados y modernos. Me apasiona encontrar soluciones
            eficientes a problemas complejos, mejorar la infraestructura de software y contribuir al crecimiento
            tecnológico de las empresas.
          </p>
        </div>
        <div className="">
          <a href="https://github.com/rhonalchirinos/rhonalchirinos.github.io" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl text-gray-800" />
          </a>
          <br />
          <a className="pt-4" href="https://www.linkedin.com/in/rhonal/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-4xl text-gray-800" />
          </a>
        </div>
      </div>
      <Skills />
      <Portfolio />
    </>
  )
}

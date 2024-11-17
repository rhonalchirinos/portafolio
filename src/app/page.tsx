import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Portfolio from './Components/Portfolio'
import Skill from './Components/Skill'
import Circle, { generateCirclePositions } from './Components/Circle'

/**
 *
 * @returns
 */
export default function Home() {
    const positions = generateCirclePositions(50)

    const circles = positions.map((pos, index) => (
        <Circle key={index} duration={Math.random() * 100} top={pos.top} left={pos.left} />
    ))

    return (
        <div className="h-screen bg-gray-50">
            <div className="absolute w-full bg-stone-950 h-full">{circles}</div>

            <header className="bg-animated-gradient h-screen">
                <div className="flex h-full flex-1 items-center justify-center">
                    <div className="z-50 max-w-lg ">
                        <div className="flex-col-2  flex justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                            <div className="pt-12 w-32">
                                <a
                                    href="https://github.com/rhonalchirinos/rhonalchirinos.github.io"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub className="text-4xl text-gray-800" />
                                </a>
                                <br />
                                <a
                                    className="pt-4"
                                    href="https://www.linkedin.com/in/rhonal/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin className="text-4xl text-gray-800" />
                                </a>
                            </div>
                            <div className="m-8">
                                <p className="flex items-center text-sm text-gray-600">👨🏽‍💻 Software Developer</p>
                                <h1 className="font-roboto-blod mb-2 text-3xl  text-gray-900">Rhonal Chirinos</h1>
                                <p className="text-justify text-base text-gray-700">
                                    He trabajado en múltiples industrias, contribuyendo tanto en el diseño como en la
                                    implementación de sistemas robustos y escalables. Mis habilidades incluyen desde la
                                    integración de APIs y el desarrollo de plugins hasta la gestión de infraestructuras
                                    de sistemas heredados y modernos. Me apasiona encontrar soluciones eficientes a
                                    problemas complejos, mejorar la infraestructura de software y contribuir al
                                    crecimiento tecnológico de las empresas.
                                </p>

                                <div className="mt-6 text-blue-700 font-bold text-sm">
                                    <a href="/rhonalchirinos.pdf">Descarga mi curriculum aquí</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <main className="p-4">
                    <Skill />
                    <Portfolio />
                </main>
            </div>

            <footer className="bg-stone-950 p-4 text-center text-gray-50 items-center	flex justify-center h-16">
                <p className="text-sm font-bold">Copyright © 2024 RHO | Powered by Rhonal Chirinos</p>
            </footer>
        </div>
    )
}

import Image from 'next/image'

import { MdOutlineElectricBolt } from 'react-icons/md'
import { DiDocker } from 'react-icons/di'
import { TbCoffee } from 'react-icons/tb'
import {
  FaParachuteBox,
  FaLinkedin,
  FaGithub,
  FaPhp,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaAws,
  FaTasks,
  FaReact,
} from 'react-icons/fa'

const Skills = () => {
  const skills = [
    {
      name: 'PHP',
      icon: <FaPhp />,
      description: 'Advanced expertise in PHP with frameworks like Laravel and Symfony.',
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare />,
      description: 'Proficient in JavaScript, with experience in Node.js, NestJS, and TypeScript.',
    },
    { name: 'Python', icon: <FaPython />, description: 'Skilled in Python, with experience in Django and Flask.' },
    { name: 'Databases', icon: <FaDatabase />, description: 'Proficient in PostgreSQL, MySQL, and MongoDB.' },
    {
      name: 'DevOps',
      icon: <DiDocker />,
      description: 'Experience with Docker, Git/GitFlow, and CI/CD pipelines.',
    },
    {
      name: 'Cloud Platforms',
      icon: <FaAws />,
      description: 'Familiar with AWS and Google Cloud for scalable applications.',
    },
    {
      name: 'Task Queues',
      icon: <FaTasks />,
      description: 'Worked with Horizon, BullMQ, and Celery for background tasks.',
    },
    {
      name: 'Frontend',
      icon: <FaReact />,
      description: 'Knowledge of React.js, Vue.js, and Nuxt.js for modern UI development.',
    },
  ]

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <div className="text-4xl mr-4">{skill.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 *
 * @returns
 */
export default function Page() {
  return (
    <div className="bg-gray-100">
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between mb-36">
            <Image src="/profile/html-tag.svg" alt="Image" width={60} height={40} />
            <a
              href="/rhonalchirinos.pdf"
              className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
            >
              Get my CV
            </a>
          </nav>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Image src="/profile/dev-Photoroom.webp" alt="Image" width={250} height={250} />
            </div>

            <h3 className="font-medium text-gray-600 text-4xl md:text-6xl uppercase mb-8 ">Rhonal Chirinos</h3>
            <h1 className="font-normal text-gray-900 text-2xl md:text-4xl leading-none mb-8">
              Senior Backend Developer
            </h1>
            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              Apasionado por crear soluciones de software robustas que simplifican la vida.
            </p>
            <a
              href="https://www.linkedin.com/in/rhonal/"
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              Hire me
            </a>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <MdOutlineElectricBolt size={24} />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">High experience</h4>

              <p className="font-normal text-gray-500 text-md">
                Backend developer with 12+ years of experience in scalable systems, API integrations, and legacy
                modernization using PHP, Python, and Node.js.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <FaParachuteBox size={24} />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">Useful sandboxes</h4>

              <ul className="font-normal text-gray-500 text-md">
                <li>NestJS Microservices: Microservices with RabbitMQ.</li>
                <li>Laravel + Redis: Background jobs with Horizon.</li>
                <li>Django REST API: E-commerce API setup.</li>
              </ul>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <TbCoffee size={24} />
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">Success side projects</h4>

              <ul className="font-normal text-gray-500 text-md">
                <li>Padel Go: Tournament management app. View</li>
                <li>Backstage: Event management platform. View</li>
                <li>Delosi Integrations: Delivery platform syncs. View</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-2">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br />
                as a professional.
              </p>
            </div>

            <div className="space-y-24 mx-5">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div className="w-60%">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    <a
                      href="https://app.padelgo.ai"
                      className="text-blue-500 underline hover:text-blue-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      App Padel Go
                    </a>
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Este proyecto es una aplicación para la gestión de torneos de pádel, que permite la inscripción de
                    participantes, la administración de partidos, la visualización de tablas de resultados y rankings
                    tanto profesionales como amateurs. La aplicación está orientada a facilitar la organización y
                    participación en torneos de pádel de manera eficiente y centralizada. Mi contribución incluyó la
                    creación de los servicios de la API y la coordinación del proceso de despliegue en Google Cloud Run,
                    asegurando que todo funcionara de manera óptima en el entorno de producción
                    <br />
                    Tecnologías: NestJS, Nuxt.js, Next.js, PostgreSQL, BullMQ.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Backstage Platform</h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Plataforma para la gestión de eventos a gran escala, facilitando planificación, venta de entradas, y
                    comunicación con asistentes. Optimicé el flujo de ventas mediante ingeniería inversa.
                    <br />
                    Tecnologías: Python, Django, Google Cloud, Celery, Pretix.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Delivery Integrations (Delosi Group)
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Implementé la integración de más de 400 restaurantes con plataformas como Rappi, PedidosYa, y DiDi.
                    Incluyó sincronización de menús, gestión de pedidos, y facturación.
                    <br />
                    PHP, Laravel, Vue.js, Horizon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center px-6">
            <Skills />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Below is a summary of the places I studied
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Working with Rhonal was a game-changer for our business. His ability to deliver scalable and reliable
                backend solutions under tight deadlines is unparalleled. He’s a true problem solver who consistently
                exceeds expectations.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                <span className="font-medium text-gray-300 text-sm">- CTO at Antartida</span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Rhonal expertise in backend development brought a new level of efficiency to our operations. His
                solutions not only streamlined our processes but also prepared us for future growth. Highly recommend
                her for any challenging project!
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                <span className="font-medium text-gray-300 text-sm">- CTO at Conexa</span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p className="font-normal text-gray-500 text-md mb-4">
                Rhoni led the development of our tournament management platform with incredible precision and
                dedication. The project was complex, but her technical leadership and attention to detail ensured its
                success.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                <span className="font-medium text-gray-300 text-sm">- Project Manager at Padel Go</span>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://github.com/rhonalchirinos"
                className="w-32 h-32 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <FaGithub className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/rhonal/"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <FaLinkedin
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                  size={24}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

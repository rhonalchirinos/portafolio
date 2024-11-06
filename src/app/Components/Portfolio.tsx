import { IconType } from 'react-icons'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDjango, DiGoogleCloudPlatform, DiLaravel, DiLinux, DiMysql, DiPhp } from 'react-icons/di'
import { FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io'

const icon = (IconComponent: IconType, text: string = '') => {
    const icon = <IconComponent className="inline text-2xl" />
    return (
        <div className="m-1 rounded-md bg-stone-950 p-1 font-bold text-white text-xs">
            {icon}
            {text !== '' && <span className="mt-1 ml-1">{text}</span>}
        </div>
    )
}

const madeAntarctica = () => {
    return (
        <p className="pt-4 text-xs font-bold">
            Realizado en
            <a
                href="https://www.antartida.ai"
                className="ml-1 text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noreferrer"
            >
                Antartida
            </a>
        </p>
    )
}

const madeConexa = () => {
    return (
        <p className="pt-4 text-xs font-bold">
            Realizado en
            <a
                href="https://www.antartida.ai"
                className="ml-1 text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noreferrer"
            >
                Conexa
            </a>
        </p>
    )
}

const Portfolio = () => {
    return (
        <>
            <div className="py-6">
                <h2 className="custom-heading">Portafolio</h2>
                <div className="mt-4 rounded-md border border-blue-100 p-3">
                    <h3 className="mb-4 text-lg font-bold">
                        <a
                            href="https://app.padelgo.ai"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            App Padel Go
                        </a>
                    </h3>
                    <p className="text-sm">
                        Este proyecto es una aplicación para la gestión de torneos de pádel, que permite la inscripción
                        de participantes, la administración de partidos, la visualización de tablas de resultados y
                        rankings tanto profesionales como amateurs. La aplicación está orientada a facilitar la
                        organización y participación en torneos de pádel de manera eficiente y centralizada.
                        <br />
                        Mi contribución incluyó la creación de los servicios de la API y la coordinación del proceso de
                        despliegue en Google Cloud Run, asegurando que todo funcionara de manera óptima en el entorno de
                        producción
                    </p>
                    <div className="mt-4 flex flex-wrap space-x-1 text-sm">
                        {icon(IoLogoJavascript, 'NestJS, BullMQ, Nuxt.js')}
                        {icon(BiLogoPostgresql, 'Postgres')}
                        {icon(DiGoogleCloudPlatform, 'Google Cloud')}
                    </div>
                    {madeAntarctica()}
                </div>

                <div className="mt-4 rounded-md border border-blue-100 p-3">
                    <h3 className="mb-4 text-lg font-bold">
                        <a
                            href="https://www.thebackstage.club/"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Backstage
                        </a>
                    </h3>
                    <p>
                        Backstage es una plataforma integral para la gestión de eventos a gran escala, que permite crear
                        organizaciones, planificar eventos, gestionar la venta de entradas y administrar usuarios y
                        clientes, facilitando la comunicación directa con los asistentes. Está diseñada para ofrecer una
                        solución completa y eficiente para la organización de eventos complejos.
                        <br />
                        En este proyecto, participé como desarrolladora backend, donde me encargué del desarrollo de
                        servicios fundamentales y del mantenimiento de la infraestructura. Utilicé tecnologías como
                        Python, Django, Pretix, PostgreSQL y Celery, lo que permitió garantizar una gestión eficiente y
                        escalable de las operaciones.
                    </p>
                    <div className="mt-4 flex flex-wrap space-x-1 text-sm">
                        {icon(IoLogoPython, 'Python')}
                        {icon(DiDjango, 'Django')}
                        {icon(BiLogoPostgresql, 'Postgres')}
                        {icon(DiGoogleCloudPlatform, 'Google Cloud')}
                    </div>
                    {madeAntarctica()}
                </div>

                <div className="mt-4 rounded-md border border-blue-100 p-3">
                    <h3 className="mb-4 text-lg font-bold">
                        Delosi - Rappi, Didi y Pedidos-ya
                        <br />
                    </h3>
                    <div className="inline-grid grid-cols-1 tex-sm mb-3">
                        <a
                            href="https://conexa.ai/project/didi"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Didi
                        </a>
                        <a
                            href="https://conexa.ai/project/pedidos-ya"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pedidos-ya
                        </a>
                        <a
                            href="https://conexa.ai/project/rappi"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Rappi
                        </a>
                    </div>
                    <p>
                        Delosi Rappi-Didi-Peya es un proyecto de integración de los servicios del Grupo Delosi en las
                        plataformas Rappi, Didi y Peya, permitiendo que más de 400 restaurantes de diferentes
                        franquicias puedan ofrecer sus servicios a través de estas plataformas. Esta integración incluyó
                        la gestión de menús y los horarios de apertura de las tiendas. Mi rol en este proyecto fue como
                        desarrolladora full stack y responsable del manejo de la infraestructura. Para lograrlo,
                        empleamos tecnologías como PHP, Laravel, Horizon, Vue.js y MySQL, asegurando una integración
                        fluida y una experiencia de usuario óptima.
                    </p>
                    <div className="mt-4 flex flex-wrap space-x-1 text-sm">
                        {icon(DiPhp, 'PHP')}
                        {icon(DiLaravel, 'Laravel, Horizon')}
                        {icon(FaVuejs, 'Vuejs')}
                        {icon(DiMysql, 'Mysql')}
                        {icon(DiLinux, 'Linux')}
                    </div>
                    {madeConexa()}
                </div>

                <div className="mt-4 rounded-md border border-blue-100 p-3">
                    <h3 className="mb-4 text-lg font-bold">
                        <a
                            href="https://conexa.ai/project/glovo"
                            className="text-blue-500 underline hover:text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Glovo-Telepizza
                        </a>
                    </h3>
                    <p>
                        Glovo-Telepizza fue otro proyecto de integración en el cual los servicios de Telepizza se
                        conectaron a la plataforma de Glovo, facilitando la venta y distribución de los productos a
                        través de esta aplicación. Esta integración incluyó la gestión de menús y horarios de operación
                        de las tiendas, garantizando que la información fuera consistente entre ambas plataformas. En
                        este proyecto, participé como desarrolladora full stack y también en la administración de la
                        infraestructura, utilizando tecnologías como PHP, Laravel, Horizon, Vue.js y MySQL, para
                        asegurar un funcionamiento eficiente y fiable.
                    </p>
                    <div className="mt-4 flex flex-wrap space-x-1 text-sm">
                        {icon(DiPhp, 'PHP')}
                        {icon(DiLaravel, 'Laravel, Horizon')}
                        {icon(FaVuejs, 'Vuejs')}
                        {icon(DiMysql, 'Mysql')}
                        {icon(DiLinux, 'Linux')}
                    </div>
                    {madeConexa()}
                </div>
            </div>
        </>
    )
}

export default Portfolio

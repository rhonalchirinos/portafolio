import { BiLogoPostgresql } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import { SiDjango, SiGooglecloud, SiMongodb } from 'react-icons/si'

import { FaAws, FaJs, FaLaravel, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import { DiPhp } from 'react-icons/di'

const Skills = () => {
    const technicalSkills = [
        { icon: DiPhp, title: 'PHP' },
        { icon: FaLaravel, title: 'Laravel' },
        { icon: DiPhp, title: 'Horizon' },
        { icon: DiPhp, title: 'Symfony' },
        { icon: FaJs, title: 'NodeJS' },
        { icon: FaJs, title: 'Java Script' },
        { icon: FaJs, title: 'NestJS' },
        { icon: FaJs, title: 'BullMq' },
        { icon: FaReact, title: 'React' },
        { icon: FaVuejs, title: 'Vue.js' },
        { icon: FaPython, title: 'Python' },
        { icon: SiDjango, title: 'Django' },
        { icon: FaPython, title: 'Flask' },
        { icon: SiGooglecloud, title: 'Google Cloud' },
        { icon: BiLogoPostgresql, title: 'Postgres' },
        { icon: GrMysql, title: 'Mysql' },
        { icon: SiMongodb, title: 'MongoDB' },
        { icon: FaAws, title: 'AWS' },
    ]

    const softSkills = [
        'Comunicación efectiva',
        'Trabajo en equipo',
        'Resolución de problemas',
        'Adaptabilidad',
        'Creatividad',
        'Gestión del tiempo',
        'Liderazgo',
        'Pensamiento crítico',
    ]

    return (
        <>
            <div className="py-6">
                <h2 className="custom-heading">Mis Habilidades Técnicas</h2>
                <ul className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
                    {technicalSkills.map((skill, index) => (
                        <li
                            key={index}
                            className="flex rounded-lg bg-stone-950 p-3 content-center	 font-bold text-gray-50 shadow text-center"
                        >
                            <skill.icon className="mr-1 text-2xl" />
                            <p className=" text-center text-sm">{skill.title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="py-6">
                <h2 className="custom-heading">Mis Habilidades Blandas</h2>
                <ul className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6">
                    {softSkills.map((skill, index) => (
                        <li
                            key={index}
                            className="rounded-lg bg-stone-950 p-2 text-center font-bold  text-gray-50 shadow text-sm"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Skills

import Link from 'next/link'
import Image from 'next/image'
import { Ubuntu_Condensed } from 'next/font/google'
import { FaPython, FaHome, FaDocker, FaAws, FaUser } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import { GiAtom } from 'react-icons/gi'

const menu = [
  { name: 'HOME', href: '/', icon: <FaHome /> },
  { name: 'PYTHON', href: '/python', icon: <FaPython /> },
  { name: 'DOCKER', href: '/docker', icon: <FaDocker /> },
  { name: 'KUBERNATE', href: '/kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', href: '/aws', icon: <FaAws /> },
  { name: 'GAUSS', href: '#', icon: <GiAtom /> },
  { name: 'PROFILE', href: '/profile', icon: <FaUser /> },
]
const font = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export default function Menu() {
  return (
    <div className="h-screen">
      <nav className={`${font.className} mt-16 hidden sm:block`}>
        <ul className="space-y-1">
          {menu.map((item) => (
            <li key={item.name} className="py-3">
              <Link
                className="text-xl py-1 text-white font-bold hover:bg-white hover:text-black rounded-l-md transition-colors duration-200 flex items-center gap-2 justify-center text-center"
                href={item.href}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center mt-10">
        <a href="#" className="flex justify-center">
          <Image src="/me.jpeg" className="size-8 rounded-full object-cover" alt={''} width={50} height={50} />
          <div>
            <p className="text-xs">
              <strong className="block font-bold text-xl px-2 text-white">RHONAL</strong>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

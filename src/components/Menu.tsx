import Link from 'next/link'
import { Ubuntu_Condensed } from 'next/font/google'
import { FaPython, FaHome, FaDocker } from 'react-icons/fa'

const menu = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Python', href: '/python', icon: <FaPython /> },
  { name: 'Docker', href: '/docker', icon: <FaDocker /> },
]

const font = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export default function Menu() {
  return (
    <nav className={`${font.className} hidden items-center lg:flex`}>
      <ul className="flex items-center gap-2">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-bold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-950"
              href={item.href}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

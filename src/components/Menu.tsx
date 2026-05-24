'use client'

import Link from 'next/link'
import { FaPython, FaHome, FaDocker, FaFolderOpen } from 'react-icons/fa'

import { useLanguage } from '@/components/LanguageToggle'

export default function Menu() {
  const { language } = useLanguage()

  const menu = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/', icon: <FaHome /> },
    { name: language === 'es' ? 'Proyectos' : 'Projects', href: '/#projects', icon: <FaFolderOpen /> },
    { name: 'Python', href: '/python', icon: <FaPython /> },
    { name: 'Docker', href: '/docker', icon: <FaDocker /> },
  ]

  return (
    <nav className="hidden items-center lg:flex">
      <ul className="flex items-center gap-2">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-base font-semibold text-[color:var(--header-text-soft)] transition-colors duration-200 hover:border-[color:var(--header-border)] hover:bg-[color:var(--header-chip)] hover:text-[color:var(--header-text)]"
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

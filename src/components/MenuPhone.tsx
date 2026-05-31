'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MdOutlineMenu } from 'react-icons/md'
import { FaDocker, FaFolderOpen, FaHome, FaPython } from 'react-icons/fa'
import { SiRust } from 'react-icons/si'
import { useLanguage } from '@/components/LanguageToggle'

export default function MenuPhone() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const items = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/', icon: <FaHome /> },
    { name: language === 'es' ? 'Proyectos' : 'Projects', href: '/#projects', icon: <FaFolderOpen /> },
    { name: 'Python', href: '/python', icon: <FaPython /> },
    { name: 'Rust', href: '/rust', icon: <SiRust /> },
    { name: 'Docker', href: '/docker', icon: <FaDocker /> },
  ]

  return (
    <>
      <div className="lg:hidden">
        <button
          className="rounded-full border border-[color:var(--header-border)] bg-[color:var(--header-chip)] p-2 text-[color:var(--header-chip-text)] shadow-lg transition duration-300 hover:opacity-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineMenu className="text-xl" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-[1.5rem] border border-[color:var(--header-border)] bg-[color:var(--header-surface)] p-4 shadow-2xl">
          <nav>
            <ul className="grid gap-2">
              {items.map((item) => (
                <li key={item.name}>
                  <Link
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--header-text-soft)] transition hover:bg-[color:var(--header-chip)] hover:text-[color:var(--header-text)]"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

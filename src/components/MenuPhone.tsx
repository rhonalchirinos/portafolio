'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MdClose, MdOutlineMenu } from 'react-icons/md'
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
          type="button"
          className="rounded-full border border-[color:var(--header-border)] bg-[color:var(--header-chip)] p-2 text-[color:var(--header-chip-text)] shadow-lg transition duration-300 hover:opacity-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={language === 'es' ? 'Abrir menu principal' : 'Open main menu'}
        >
          <MdOutlineMenu className="text-xl" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2.5rem))] lg:hidden">
          <div className="flex max-h-[70vh] flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--header-border)] bg-[color:var(--header-surface)] p-4 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between border-b border-[color:var(--header-border)] pb-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                {language === 'es' ? 'Navegacion' : 'Navigation'}
              </p>
              <button
                type="button"
                className="rounded-full border border-[color:var(--header-border)] bg-[color:var(--header-chip)] p-2 text-[color:var(--header-chip-text)] transition hover:opacity-90"
                onClick={() => setIsOpen(false)}
                aria-label={language === 'es' ? 'Cerrar menu' : 'Close menu'}
              >
                <MdClose className="text-lg" />
              </button>
            </div>
            <nav className="overflow-y-auto">
              <ul className="grid gap-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-[color:var(--header-text-soft)] transition hover:border-[color:var(--header-border)] hover:bg-[color:var(--header-chip)] hover:text-[color:var(--header-text)]"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

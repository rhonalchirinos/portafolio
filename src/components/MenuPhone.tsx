'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MdOutlineMenu } from 'react-icons/md'
import { FaAws, FaDocker, FaHome, FaPython } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'

const items = [
  { name: 'Home', href: '/', icon: <FaHome /> },
  { name: 'Python', href: '/python', icon: <FaPython /> },
  { name: 'Docker', href: '/docker', icon: <FaDocker /> },
  { name: 'Kubernetes', href: '/kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', href: '/aws', icon: <FaAws /> },
]

export default function MenuPhone() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden">
        <button
          className="rounded-full bg-indigo-950 p-2 text-white shadow-lg transition duration-300 hover:bg-indigo-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineMenu className="text-xl" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl">
          <nav>
            <ul className="grid gap-2">
              {items.map((item) => (
                <li key={item.name}>
                  <Link
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-indigo-950"
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

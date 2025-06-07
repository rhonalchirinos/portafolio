'use client'

import { useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import Menu from './Menu'

export default function MenuPhone() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className="fixed top-5 right-5 z-50">
        <button
          className="bg-indigo-950 text-white p-2 rounded-full shadow-lg hover:bg-indigo-800 transition duration-300 sm:hidden"
          onClick={() => setMenu(!menu)}
        >
          <MdOutlineMenu className="text-xl sm:hidden" />
        </button>
      </div>
      {menu && (
        <div
          className="md:w-44 w-44 lg:w-64 xl:w-64 2xl::w-64 bg-indigo-950 sm:block fixed h-screen left-0 top-0 z-50"
          onClick={() => setMenu(!menu)}
        >
          <Menu />
        </div>
      )}
    </>
  )
}

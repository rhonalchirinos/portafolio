import Link from 'next/link'
import Image from 'next/image'

const menu = [
  { name: 'HOME', href: '/' },
  { name: 'PYTHON', href: '/python' },
  { name: 'DOCKER', href: '/docker' },
  { name: 'KUBERNATE', href: '/kubernetes' },
  { name: 'AWS', href: '/aws' },
  { name: 'GAUSS', href: '#' },
  { name: 'PROFILE', href: '/profile' },
]

export default function Menu() {
  return (
    <div className="h-screen">
      <nav className="h-5/6 flex-col justify-between hidden sm:block ml-6">
        <ul className="mt-6 space-y-1">
          {menu.map((item) => (
            <li key={item.name} className={`py-3`}>
              <Link
                className="block   px-3 py-1 font-blod text-white hover:bg-white hover:text-black rounded-l-md transition-colors duration-200"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sticky inset-x-0 bottom-0 border-t">
        <a href="#" className="flex items-center gap-2 p-4 hover:bg-gray-50">
          <Image src="/me.jpeg" className="size-10 rounded-full object-cover" alt={''} width={50} height={50} />
          <div>
            <p className="text-xs">
              <strong className="block font-bold text-xl text-white">Rhonal Chirinos</strong>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

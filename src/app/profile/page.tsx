import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Profile() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-700">Profile</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Rhonal Chirinos</h1>
          <p className="mt-3 text-xl text-slate-600">Software Developer</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Desarrollo este sitio como una mezcla de portfolio tecnico y linea editorial personal para mostrar como
            aprendo, documento y convierto conceptos en implementaciones reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/rhonalchirinos.pdf"
              className="rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-900"
            >
              Descargar CV
            </Link>
            <Link
              href="/python"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Ver primera publicacion
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Contact and links</p>
          <div className="mt-6 space-y-4">
            <Link
              href="https://github.com/rhonalchirinos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
            >
              <FaGithub className="text-xl" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/rhonal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </Link>
            <Link
              href="https://www.credly.com/users/rhonalchirinos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
            >
              Credly
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

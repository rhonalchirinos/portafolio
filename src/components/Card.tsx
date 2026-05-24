import { DockerExercise } from '@/data/data'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { LiaGithub } from 'react-icons/lia'

export function Card(card: DockerExercise) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-full flex-col text-sm">
        <Link
          className="group"
          rel="noopener noreferrer"
          href={card.link || card.devto || '#'}
          target={card.target || '_self'}
        >
          <h3 className="text-2xl font-semibold text-slate-900 transition group-hover:text-sky-300">{card.title}</h3>
        </Link>
        <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {card.tags?.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="mono-badge rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-600"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <Link
            className="clear-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
            rel="noopener noreferrer"
            href={card.link || card.devto || '#'}
            target={card.target || '_self'}
          >
            Ver detalle
            <FaArrowRight className="text-xs" />
          </Link>
          {card.github && (
            <Link
              href={card.github}
              className="ghost-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaGithub className="text-xl" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

import { DockerExercise } from '@/data/data'
import Link from 'next/link'
import { LiaGithub } from 'react-icons/lia'

export function Card(card: DockerExercise) {
  return (
    <div className="bg-white rounded shadow my-4 p-4">
      <div className="flex flex-col text-sm">
        <div className="flex flex-row justify-between items-center">
          <Link
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
            href={card.link || card.devto || '#'}
            target={card.target || '_self'}
          >
            <h3 className="text-xl font-bold bg-white mb-2">{card.title}</h3>
          </Link>
        </div>
        <p className="pt-2">{card.description}</p>
        <div className="flex justify-between items-start mt-6">
          <div className="flex flex-wrap">
            {card.tags?.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`capitalize inline-block py-1 px-2 mr-2 mt-2 font-bold text-xs rounded-lg bg-opacity-20`}
                style={{ color: tag.color, backgroundColor: tag.bgColor }}
              >
                {tag.name}
              </span>
            ))}
          </div>
          {card.github && (
            <Link href={card.github} className="ml-4 mt-1" target="_blank" rel="noopener noreferrer">
              <LiaGithub className="text-4xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

import type { Language } from '@/i18n/translations'

type PublicationMetadata = {
  order: number
  badge: string
  readingTime: string
  image: string
  topics: string[]
}

export const rustPublicationMetadata: Record<Language, Record<string, PublicationMetadata>> = {
  es: {
    'what-is-ruest': {
      order: 1,
      badge: 'Publicacion 01',
      readingTime: '6 min',
      image: '/aws.webp',
      topics: ['Rust', 'Fundamentos', 'Memoria', 'Ownership'],
    },
    'my-first-app-in-rust': {
      order: 2,
      badge: 'Publicacion 02',
      readingTime: '8 min',
      image: '/aws.webp',
      topics: ['Cargo', 'CLI', 'Primer proyecto', 'Tipos'],
    },
    'rust-toolchain-for-beginners': {
      order: 3,
      badge: 'Publicacion 03',
      readingTime: '7 min',
      image: '/aws.webp',
      topics: ['rustup', 'cargo', 'clippy', 'rustfmt'],
    },
  },
  en: {
    'what-is-ruest': {
      order: 1,
      badge: 'Publication 01',
      readingTime: '6 min',
      image: '/aws.webp',
      topics: ['Rust', 'Fundamentals', 'Memory', 'Ownership'],
    },
    'my-first-app-in-rust': {
      order: 2,
      badge: 'Publication 02',
      readingTime: '8 min',
      image: '/aws.webp',
      topics: ['Cargo', 'CLI', 'First project', 'Types'],
    },
    'rust-toolchain-for-beginners': {
      order: 3,
      badge: 'Publication 03',
      readingTime: '7 min',
      image: '/aws.webp',
      topics: ['rustup', 'cargo', 'clippy', 'rustfmt'],
    },
  },
}

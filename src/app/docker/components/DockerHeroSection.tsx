import Image from 'next/image'
import { FaDocker } from 'react-icons/fa'

import { BaseSection } from '@/components/sections/BaseSection'
import type { Language } from '@/i18n/translations'

type DockerHeroSectionProps = {
  language: Language
}

const dockerHighlights = ['Containers', 'Images', 'Compose', 'Swarm', 'Volumes', 'NGINX', 'DevOps', 'Networking']

export function DockerHeroSection({ language }: DockerHeroSectionProps) {
  return (
    <BaseSection tone="hero" padding="lg">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--app-border-strong)] bg-[color:var(--app-surface-strong)] px-4 py-2 text-[color:var(--app-accent)] shadow-sm">
            <FaDocker className="text-xl" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">Docker</span>
          </div>

          <h1 className="section-title mt-6 text-4xl font-semibold md:text-5xl">Docker</h1>
          <p className="section-text mt-5 max-w-3xl text-lg leading-8">
            {language === 'es'
              ? 'Esta seccion funciona como un archivo tecnico sobre Docker. Reune ejercicios reales, notas operativas y publicaciones enfocadas en imagenes minimas, persistencia, redes, proxy y despliegue de servicios.'
              : 'This section works as a technical archive for Docker. It brings together real exercises, operational notes, and publications focused on minimal images, persistence, networking, proxying, and service deployment.'}
          </p>

          <div className="mt-6 max-w-3xl">
            <p className="section-muted text-xs font-semibold uppercase tracking-[0.22em]">
              {language === 'es' ? 'Temas y herramientas clave' : 'Key topics and tools'}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dockerHighlights.map((item) => (
                <span
                  key={item}
                  className="section-tag rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section-media-frame relative flex items-center justify-center overflow-hidden rounded-[1.75rem] p-4">
          <Image
            src="/docker.webp"
            alt={language === 'es' ? 'Seccion de Docker' : 'Docker section'}
            width={1200}
            height={800}
            className="h-4/5 w-4/5 rounded-[1.25rem] object-contain"
          />
        </div>
      </div>
    </BaseSection>
  )
}

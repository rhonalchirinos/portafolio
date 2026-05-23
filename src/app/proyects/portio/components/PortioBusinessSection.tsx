type Highlight = {
  title: string
  description: string
}

type PortioBusinessSectionProps = {
  productHighlights: Highlight[]
  functionalFlow: string[]
}

export function PortioBusinessSection({
  productHighlights,
  functionalFlow,
}: PortioBusinessSectionProps) {
  return (
    <section className="relative mt-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
          Seccion negocio
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[color:var(--portio-primary)]">Portio para el negocio</h2>
        <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
          Esta parte explica que resuelve la aplicacion, como aporta valor al seguimiento nutricional y de que forma
          mejora la relacion entre paciente, informacion diaria y criterio profesional.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {productHighlights.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
              Valor
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[color:var(--portio-primary)]">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface)] p-8 shadow-[0_14px_34px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-secondary)]">
            Operacion
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">Como funciona la app</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            El flujo del producto se entiende mejor como una secuencia de seguimiento: la persona registra sus comidas,
            la plataforma ordena ese historial, detecta patrones y genera sugerencias, y el nutricionista accede a esa
            informacion para evaluar el caso con mas contexto y definir la mejor decision para cada paciente.
          </p>
          <div className="mt-6 grid gap-3">
            {functionalFlow.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.25rem] border border-[color:var(--portio-primary)]/10 bg-[color:var(--portio-surface-soft)] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--portio-accent)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-[color:var(--portio-text)]">{item}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[color:var(--portio-light)] bg-[linear-gradient(135deg,var(--portio-light-soft),var(--portio-surface),var(--portio-hero-gradient-end))] p-8 shadow-[0_16px_36px_rgba(20,48,74,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--portio-accent)]">
            Impacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--portio-primary)]">Que habilita Portio</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--portio-text-muted)]">
            <p>
              Portio transforma datos diarios en informacion util para seguimiento nutricional, evitando que el
              control del paciente dependa de registros dispersos o memoria parcial.
            </p>
            <p>
              La app permite ver habitos, frecuencia, porciones y evolucion en un solo lugar, lo que mejora la calidad
              del seguimiento y hace mas clara la conversacion entre usuario y profesional.
            </p>
            <p>
              Para el negocio, esto posiciona a Portio como una herramienta de apoyo real al proceso nutricional y no
              solo como una interfaz para cargar comidas.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

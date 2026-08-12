import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

const values = [
  {
    title: 'Cercanía',
    description:
      'Te trato como se trata a un vecino: sin tecnicismos ni letra pequeña, siempre a tu lado en cada paso.',
  },
  {
    title: 'Transparencia',
    description:
      'Comisiones claras desde el primer día y cero costes ocultos, tanto en inmuebles como en energía.',
  },
  {
    title: 'Ahorro real',
    description:
      'Mi objetivo es que firmes lo mejor para ti, ya sea la casa perfecta o la tarifa de luz más económica.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-curi-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Hola, soy Olinda"
          subtitle="Un emprendimiento nacido de la convicción de que asesorar debe ser sinónimo de cuidar."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="self-center justify-self-center overflow-hidden rounded-2xl lg:max-w-sm">
              <img
                src="/olinda-portrait.jpg"
                alt="Retrato de Olinda"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
            <h3 className="font-serif text-2xl text-curi-charcoal md:text-3xl">
              De Madrid a toda España
            </h3>
            <p className="mt-4 leading-relaxed text-curi-charcoal/70">
              Llevo más de tres años ayudando a familias y empresas a tomar dos
              de las decisiones más importantes de su vida: dónde vivir y cuánto
              pagan por la energía que consumen. Empecé acompañando a amigos y
              conocidos en la búsqueda de su primera vivienda y, hoy, gestiono
              inmuebles en Madrid y contratos de electricidad por toda España.
            </p>
            <p className="mt-4 leading-relaxed text-curi-charcoal/70">
              Mi gran diferencia: la electricidad. Al ser una gestora
              independiente, negocio directamente con las comercializadoras y
              consigo tarifas más bajas para ti sin coste adicional. El mismo
              criterio honesto que aplico al buscar tu hogar lo aplico al
              buscar tu ahorro.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title}>
                  <p className="font-serif text-lg text-curi-gold">
                    {value.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-curi-charcoal/60">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

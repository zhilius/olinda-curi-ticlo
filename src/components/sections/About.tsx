import SectionHeading from '../SectionHeading'

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
    <section id="sobre-mi" className="scroll-mt-20 bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Hola, soy Olinda"
          subtitle="Un emprendimiento nacido de la convicción de que asesorar debe ser sinónimo de cuidar."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Retrato de Olinda Curi Ticlo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
              Del barrio a toda España
            </h3>
            <p className="mt-4 leading-relaxed text-stone-600">
              Llevo más de ocho años ayudando a familias y empresas a tomar dos
              de las decisiones más importantes de su vida: dónde vivir y cuánto
              pagan por la energía que consumen. Empecé acompañando a amigos y
              conocidos en la búsqueda de su primera vivienda y, hoy, gestiono
              inmuebles y contratos de electricidad por todo el país.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              Mi gran diferencia: la electricidad. Al ser una gestora
              independiente, negocio directamente con las comercializadoras y
              consigo tarifas más bajas para ti sin coste adicional. El mismo
              criterio honesto que aplico al buscar tu hogar lo aplico al
              buscar tu ahorro.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title}>
                  <p className="font-serif text-lg text-gold-dark">
                    {value.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

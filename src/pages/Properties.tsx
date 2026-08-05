import { useMemo, useState } from 'react'
import { properties } from '../data/properties'
import type { PropertyType } from '../data/properties'
import { whatsappLink } from '../data/contact'

type Filter = 'todos' | PropertyType

const filters: { value: Filter; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'piso', label: 'Pisos' },
  { value: 'casa', label: 'Casas' },
  { value: 'local', label: 'Locales' },
]

const priceFormat = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export default function Properties() {
  const [filter, setFilter] = useState<Filter>('todos')

  const visible = useMemo(
    () => (filter === 'todos' ? properties : properties.filter((p) => p.type === filter)),
    [filter],
  )

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Propiedades en venta
          </p>
          <h1 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">
            Encuentra el hogar que buscas
          </h1>
          <p className="mt-4 leading-relaxed text-stone-500">
            Una selección de inmuebles seleccionados en distintas ciudades de
            España. ¿No encuentras el tuyo? Pregúntame, tengo más cartera
            disponible.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                filter === f.value
                  ? 'bg-charcoal text-cream'
                  : 'border border-stone-300 text-stone-600 hover:border-gold hover:text-gold'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal">
                  {property.type}
                </span>
                {property.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
                    Destacado
                  </span>
                )}
              </div>

              <div className="p-6">
                <p className="font-serif text-2xl text-gold-dark">
                  {priceFormat.format(property.price)}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-charcoal">
                  {property.title}
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  {property.city}, {property.province}
                </p>

                <div className="mt-4 flex gap-4 text-sm text-stone-600">
                  <span className="flex items-center gap-1">
                    🛏 {property.bedrooms || '—'}
                  </span>
                  <span className="flex items-center gap-1">
                    🛁 {property.bathrooms || '—'}
                  </span>
                  <span className="flex items-center gap-1">
                    📐 {property.area} m²
                  </span>
                </div>

                <a
                  href={whatsappLink(
                    `Hola Olinda, me interesa "${property.title}" de ${property.city}. ¿Podemos concertar una visita?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-full border border-gold py-2.5 text-center text-sm font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-white"
                >
                  Más información
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-charcoal p-10 text-center">
          <h2 className="font-serif text-2xl text-white">
            ¿Buscas algo en concreto?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-stone-300">
            Cuéntame tu zona, tu presupuesto y lo que necesitas. Tengo inmuebles
            que no están publicados en la web.
          </p>
          <a
            href={whatsappLink('Hola Olinda, busco una propiedad con estas características:')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-light"
          >
            Pedir asesoría personalizada
          </a>
        </div>
      </div>
    </main>
  )
}

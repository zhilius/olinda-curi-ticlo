import SectionHeading from '../SectionHeading'

const testimonials = [
  {
    quote:
      'Olinda nos encontró la casa perfecta en menos de un mes y además nos cambió la tarifa de la luz ahorrando más de 300 € al año. Imposible pedir más.',
    name: 'María y Javier',
    detail: 'Compra de vivienda · Madrid',
  },
  {
    quote:
      'Vendí mi piso en tiempo récord. Su tasación fue honesta y las gestiones, impecables. La recomendé a toda mi familia.',
    name: 'Antonio García',
    detail: 'Venta de piso · Valencia',
  },
  {
    quote:
      'No sabía que se podía cambiar de compañía eléctrica gratis. Olinda hizo todo el papeleo y mi factura bajó un 35%.',
    name: 'Lucía Fernández',
    detail: 'Contrato de electricidad · Sevilla',
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen quienes ya confían en mí"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <div>
                <div className="flex gap-1 text-gold">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-stone-600">
                  “{testimonial.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-stone-100 pt-4">
                <p className="font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

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
    detail: 'Venta de piso · Madrid',
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
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 150}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-curi-border bg-curi-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div>
                  <div className="flex gap-1 text-curi-gold">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <blockquote className="mt-4 leading-relaxed text-curi-charcoal/70">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-curi-border/60 pt-4">
                  <p className="font-semibold text-curi-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-curi-charcoal/60">{testimonial.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

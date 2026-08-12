import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { whatsappLink } from '../../data/contact'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: 'Compra, venta y alquiler de inmuebles',
    description:
      'Te ayudo a encontrar el hogar ideal en Madrid, tasar tu propiedad al mejor precio, gestionar un alquiler y acompañarte en cada trámite de principio a fin.',
    bullets: [
      'Búsqueda personalizada de vivienda',
      'Tasación y venta de tu propiedad',
      'Gestión de alquileres y contratos',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: 'Gestión de contratos de electricidad',
    description:
      'Como gestora independiente, comparo las tarifas de múltiples compañías para que pagues menos en tu factura, estés donde estés en España. Cero coste para ti: yo me encargo de todo el papeleo.',
    bullets: [
      'Análisis gratuito de tu consumo',
      'Cambio de compañía y tarifa sin coste',
      'Ahorro medio de hasta un 30% al año',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Dos expertos en uno: hogar y energía"
          subtitle="Un único punto de contacto para dos de las decisiones que más impactan en tu economía y en tu bienestar."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 150}>
              <article className="group rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-gold transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-500">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="mt-0.5 text-gold">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  `Hola Olinda, me interesa tu servicio de ${service.title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
              >
                Solicitar información →
              </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

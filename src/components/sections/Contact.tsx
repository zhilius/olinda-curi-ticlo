import { useState } from 'react'
import type { FormEvent } from 'react'
import SectionHeading from '../SectionHeading'
import { CONTACT, mailtoLink, whatsappLink } from '../../data/contact'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Compra / venta de inmuebles')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `${service} · Consulta de ${name}`
    const body = `Hola Olinda,\n\n${message}\n\nMis datos:\nNombre: ${name}\nEmail: ${email}`
    window.location.href = mailtoLink(subject, body)
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo paso"
          subtitle="Cuéntame qué necesitas y te responderé en menos de 24 horas. Sin compromiso."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-charcoal">
              Información de contacto
            </h3>
            <ul className="mt-6 space-y-4 text-stone-600">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Teléfono
                </p>
                <a href={CONTACT.phoneHref} className="hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Email
                </p>
                <a
                  href={mailtoLink('Consulta', 'Hola Olinda,')}
                  className="hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">
                  Cobertura
                </p>
                <p>{CONTACT.location}</p>
              </li>
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-stone-700">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-lg border border-stone-300 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-lg border border-stone-300 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="service" className="text-sm font-medium text-stone-700">
                Servicio
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full rounded-lg border border-stone-300 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              >
                <option>Compra / venta de inmuebles</option>
                <option>Gestión de contratos de electricidad</option>
                <option>Ambos servicios</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-stone-700">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntame qué necesitas…"
                className="mt-2 w-full resize-none rounded-lg border border-stone-300 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

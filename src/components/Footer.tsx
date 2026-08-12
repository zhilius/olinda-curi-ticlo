import { CONTACT, mailtoLink } from '../data/contact'

export default function Footer() {
  return (
    <footer className="bg-curi-charcoal text-curi-surface/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl text-curi-surface">
            Curi <span className="text-curi-gold-light">Asesores</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-curi-surface/50">
            Tu asesora de confianza para comprar, vender o alquilar tu
            inmueble en Madrid y ahorrar en tu factura de la luz en toda
            España.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-curi-surface">
            Enlaces
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#servicios" className="hover:text-curi-gold-light">
                Servicios
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="hover:text-curi-gold-light">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#opiniones" className="hover:text-curi-gold-light">
                Opiniones
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-curi-gold-light">
                Contacto
              </a>
            </li>
            <li>
              <a href="#/privacidad" className="hover:text-curi-gold-light">
                Privacidad y cookies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-curi-surface">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-curi-gold-light">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={mailtoLink('Consulta', 'Hola Olinda,')}
                className="hover:text-curi-gold-light"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="text-curi-surface/50">{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-curi-surface/10 py-5 text-center text-xs text-curi-surface/50">
        © {new Date().getFullYear()} Curi Asesores · Todos los derechos
        reservados
      </div>
    </footer>
  )
}

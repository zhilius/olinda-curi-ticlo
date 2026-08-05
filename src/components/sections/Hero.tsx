import { Link } from 'react-router-dom'
import { whatsappLink } from '../../data/contact'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center sm:px-6 md:py-40 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
          Inmuebles · Energía · Toda España
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl">
          Tu próximo hogar y la mejor tarifa de luz,{' '}
          <span className="italic text-gold-light">en un mismo lugar</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
          Soy Olinda, asesora inmobiliaria y gestora independiente de energía.
          Te acompaño a comprar o vender tu inmueble y a ahorrar en tu factura
          de la electricidad, con un trato cercano y transparente.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/propiedades"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-light"
          >
            Ver propiedades
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-charcoal"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

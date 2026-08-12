import { whatsappLink } from '../../data/contact'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-curi-charcoal text-curi-surface">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=75')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-curi-charcoal/70 via-curi-charcoal/40 to-curi-charcoal" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center sm:px-6 md:py-40 lg:px-8">
        <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-curi-gold-light">
          Inmuebles en Madrid · Energía en toda España
        </p>
        <h1
          className="animate-fade-in-up mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl"
          style={{ animationDelay: '150ms' }}
        >
          Tu próximo hogar y la mejor tarifa de luz,{' '}
          <span className="italic text-curi-gold-light">en un mismo lugar</span>
        </h1>
        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-curi-surface/70"
          style={{ animationDelay: '300ms' }}
        >
          Soy Olinda, asesora inmobiliaria y gestora independiente de energía.
          Te acompaño a comprar, vender o alquilar tu inmueble en Madrid y a
          ahorrar en tu factura de la electricidad en toda España, con un
          trato cercano y transparente.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: '450ms' }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-curi-gold px-8 py-3.5 text-sm font-semibold text-curi-charcoal shadow-lg shadow-curi-gold/30 transition-all duration-300 hover:scale-105 hover:bg-curi-gold-light"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

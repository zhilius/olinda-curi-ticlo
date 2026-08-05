export default function Stats() {
  const stats = [
    { value: '150+', label: 'Inmuebles gestionados' },
    { value: '400+', label: 'Contratos de luz optimizados' },
    { value: '8', label: 'Años de experiencia' },
    { value: '97%', label: 'Clientes satisfechos' },
  ]

  return (
    <section className="bg-charcoal py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-4xl text-gold-light md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wider text-stone-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

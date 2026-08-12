import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/#servicios', label: 'Servicios' },
  { to: '/#sobre-mi', label: 'Sobre mí' },
  { to: '/#opiniones', label: 'Opiniones' },
  { to: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 leading-none">
          <img
            src="/logo.png"
            alt="Logo de Curi Asesores"
            className="h-10 w-10 object-contain"
          />
          <span className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-charcoal">
              Curi <span className="text-gold">Asesores</span>
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Inmuebles · Energía
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.to === '/' ? (
              <NavLink
                key={link.to}
                to="/"
                end
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-gold ${
                    isActive ? 'text-gold' : 'text-stone-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-gold ${
                    isActive ? 'text-gold' : 'text-stone-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#contacto"
            className="rounded-full bg-charcoal px-5 py-2 text-sm text-cream transition-all duration-300 hover:scale-105 hover:bg-gold"
          >
            Contactar
          </Link>
        </div>
      </div>
    </header>
  )
}

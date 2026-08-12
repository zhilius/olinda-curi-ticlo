import { useEffect, useState } from 'react'

const STORAGE_KEY = 'curi-asesores-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const choose = (value: string) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-charcoal px-4 py-4 text-sm text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-stone-200">
          Usamos únicamente cookies técnicas necesarias para el funcionamiento
          de la web. No instalamos cookies de publicidad ni de seguimiento.
          Puedes consultar nuestra{' '}
          <a
            href="#/privacidad"
            className="font-medium text-gold-light underline hover:text-white"
          >
            política de privacidad y cookies
          </a>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={() => choose('rechazar')}
            className="rounded-full border border-white/40 px-5 py-2 transition-colors hover:bg-white/10"
          >
            Rechazar
          </button>
          <button
            onClick={() => choose('aceptar')}
            className="rounded-full bg-gold px-5 py-2 font-semibold text-white transition-colors hover:bg-gold-light"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

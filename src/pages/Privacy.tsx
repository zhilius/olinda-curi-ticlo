import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Responsable del tratamiento',
    paragraphs: [
      'Curi Asesores es la responsable del tratamiento de los datos personales que nos facilites a través de esta página web.',
      'Contacto para cuestiones de protección de datos: curiasesores@gmail.com · +34 634 08 43 75.',
    ],
  },
  {
    title: '2. Datos que tratamos',
    paragraphs: [
      'Únicamente tratamos los datos que nos proporcionas voluntariamente a través del formulario de contacto o por canales directos como el correo electrónico o WhatsApp: nombre, correo electrónico, teléfono y el contenido de tu mensaje.',
    ],
  },
  {
    title: '3. Finalidad y legitimación',
    paragraphs: [
      'Tus datos se utilizan exclusivamente para atender tus consultas, gestionar tus peticiones y responder a tus mensajes sobre servicios inmobiliarios y de energía.',
      'La base legal es el consentimiento que nos otorgas al enviar el formulario (Reglamento UE 2016/679, RGPD).',
    ],
  },
  {
    title: '4. Conservación de los datos',
    paragraphs: [
      'Conservamos tus datos únicamente durante el tiempo necesario para atender tu consulta y, posteriormente, durante los plazos de prescripción previstos por la ley.',
    ],
  },
  {
    title: '5. Comunicación de datos a terceros',
    paragraphs: [
      'No cedemos tus datos personales a terceros, salvo obligación legal. No realizamos transferencias internacionales de datos.',
    ],
  },
  {
    title: '6. Derechos',
    paragraphs: [
      'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y retirada del consentimiento, escribiéndonos a curiasesores@gmail.com.',
      'Si consideras que tus derechos no se han atendido adecuadamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
    ],
  },
  {
    title: '7. Seguridad',
    paragraphs: [
      'Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.',
    ],
  },
  {
    title: '8. Cookies',
    paragraphs: [
      'Esta web utiliza únicamente cookies técnicas necesarias para su correcto funcionamiento. No instalamos cookies de publicidad ni de seguimiento de terceros.',
      'Al aceptar la política de cookies en el aviso inicial nos das tu consentimiento para su uso. Puedes rechazarlas sin que afecte al funcionamiento de la web.',
    ],
  },
]

export default function Privacy() {
  return (
    <main className="bg-curi-bg py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-curi-charcoal/80">
          Cumplimiento europeo
        </p>
        <h1 className="mt-3 font-serif text-3xl text-curi-charcoal md:text-4xl">
          Política de privacidad y cookies
        </h1>
        <p className="mt-4 leading-relaxed text-curi-charcoal/80">
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley
          Orgánica 3/2018 (LOPDGDD), te informamos de cómo tratamos tus datos.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-curi-border bg-curi-surface p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-xl text-curi-charcoal md:text-2xl">
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-curi-charcoal/70">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-curi-charcoal p-8 text-center">
          <h2 className="font-serif text-xl text-curi-surface">
            ¿Tienes dudas sobre el tratamiento de tus datos?
          </h2>
          <p className="mt-2 text-curi-surface/70">
            Escríbenos a curiasesores@gmail.com y te atenderemos.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-curi-gold px-8 py-3 text-sm font-semibold text-curi-charcoal transition-colors hover:bg-curi-gold-light"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}

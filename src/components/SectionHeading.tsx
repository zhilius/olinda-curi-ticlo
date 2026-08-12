interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.25em] ${
          dark ? 'text-curi-gold-light' : 'text-curi-charcoal/80'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl md:text-4xl ${
          dark ? 'text-curi-surface' : 'text-curi-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? 'text-curi-surface/70' : 'text-curi-charcoal/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

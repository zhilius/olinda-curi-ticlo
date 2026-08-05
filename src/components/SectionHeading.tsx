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
          dark ? 'text-gold-light' : 'text-gold'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl md:text-4xl ${
          dark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? 'text-stone-300' : 'text-stone-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

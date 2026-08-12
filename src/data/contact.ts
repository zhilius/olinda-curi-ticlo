export const CONTACT = {
  name: 'Olinda Curi Ticlo',
  phone: '+34 634 08 43 75',
  phoneHref: 'tel:+34634084375',
  email: 'curiasesores@gmail.com',
  whatsapp: '34634084375',
  whatsappMessage:
    'Hola Olinda, me gustaría recibir más información sobre tus servicios.',
  location: 'Inmuebles en Madrid · Energía en toda España',
}

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    text ?? CONTACT.whatsappMessage,
  )}`

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

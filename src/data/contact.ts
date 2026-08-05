export const CONTACT = {
  name: 'Olinda Curi Ticlo',
  phone: '+34 600 000 000',
  phoneHref: 'tel:+34600000000',
  email: 'hola@olindacuriticlo.com',
  whatsapp: '34600000000',
  whatsappMessage:
    'Hola Olinda, me gustaría recibir más información sobre tus servicios.',
  location: 'Toda España · Atención online y visitas concertadas',
}

export const whatsappLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    text ?? CONTACT.whatsappMessage,
  )}`

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

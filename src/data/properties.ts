export type PropertyType = 'piso' | 'casa' | 'local'

export interface Property {
  id: number
  title: string
  type: PropertyType
  price: number
  city: string
  province: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  featured?: boolean
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

export const properties: Property[] = [
  {
    id: 1,
    title: 'Piso luminoso con vistas',
    type: 'piso',
    price: 285000,
    city: 'Madrid',
    province: 'Madrid',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    image: img('photo-1522708323590-d24dbb6b0267'),
    featured: true,
  },
  {
    id: 2,
    title: 'Casa adosada con jardín',
    type: 'casa',
    price: 415000,
    city: 'Valencia',
    province: 'Valencia',
    bedrooms: 4,
    bathrooms: 3,
    area: 160,
    image: img('photo-1600596542815-ffad4c1539a9'),
    featured: true,
  },
  {
    id: 3,
    title: 'Chalet moderno en urbanización',
    type: 'casa',
    price: 645000,
    city: 'Barcelona',
    province: 'Barcelona',
    bedrooms: 5,
    bathrooms: 4,
    area: 240,
    image: img('photo-1600585154340-be6161a56a0c'),
  },
  {
    id: 4,
    title: 'Ático con terraza',
    type: 'piso',
    price: 520000,
    city: 'Sevilla',
    province: 'Sevilla',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: img('photo-1523217582562-09d0def993a6'),
    featured: true,
  },
  {
    id: 5,
    title: 'Casa de campo reformada',
    type: 'casa',
    price: 350000,
    city: 'Alicante',
    province: 'Alicante',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: img('photo-1568605114967-8130f3a36994'),
  },
  {
    id: 6,
    title: 'Local comercial en centro',
    type: 'local',
    price: 190000,
    city: 'Granada',
    province: 'Granada',
    bedrooms: 0,
    bathrooms: 1,
    area: 85,
    image: img('photo-1497366754035-f200968a6e72'),
  },
  {
    id: 7,
    title: 'Piso reformado a estrenar',
    type: 'piso',
    price: 235000,
    city: 'Málaga',
    province: 'Málaga',
    bedrooms: 2,
    bathrooms: 2,
    area: 78,
    image: img('photo-1560448204-e02f11c3d0e2'),
  },
  {
    id: 8,
    title: 'Villa con piscina',
    type: 'casa',
    price: 890000,
    city: 'Marbella',
    province: 'Málaga',
    bedrooms: 5,
    bathrooms: 5,
    area: 380,
    image: img('photo-1613490493576-7fde63acd811'),
  },
  {
    id: 9,
    title: 'Local con escaparate',
    type: 'local',
    price: 145000,
    city: 'Murcia',
    province: 'Murcia',
    bedrooms: 0,
    bathrooms: 1,
    area: 60,
    image: img('photo-1441986300917-64674bd600d8'),
  },
]

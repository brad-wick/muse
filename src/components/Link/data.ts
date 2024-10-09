export interface LinkItem {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
}

export interface LinkGroupProps {
  links: LinkItem[]
}

export const links: LinkItem[] = [
  { label: 'Visión', href: '#our-vision', variant: 'secondary' },
  { label: 'Nosotros', href: '#about-us', variant: 'secondary' },
  { label: 'Testimonios', href: '#testimonies', variant: 'secondary' },
  { label: 'Iniciar Demo', href: '#start-demo', variant: 'primary' },
]

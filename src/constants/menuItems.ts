export interface MenuProps {
  items: MenuItem[]
  ctaIndex: number
}

export interface MenuItem {
  key: number
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  { key: 0, label: 'Nuestra Visión', href: '#our-vision' },
  { key: 1, label: 'Sobre Nosotros', href: '#about-us' },
  { key: 2, label: 'Testimonios', href: '#testimonies' },
  { key: 3, label: 'Iniciar Demo', href: '#start-demo' },
]

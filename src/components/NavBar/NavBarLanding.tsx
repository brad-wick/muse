import Logo from '../Logo/Logo'
import { Button } from '../Button/Button'

export default function NavBarLanding() {
  return (
    <nav className='bg-transparent p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold'>
          <a href='#' aria-label='Home'>
            <Logo />
          </a>
        </div>

        {/* Menu Links */}
        <ul className='flex space-x-10'>
          <li>
            <a
              href='#about-us'
              className='text-white hover:text-blue-400 transition'
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-white hover:text-blue-400 transition'
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href='#start-demo'
              className='text-white hover:text-blue-400 transition'
            >
              Iniciar Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

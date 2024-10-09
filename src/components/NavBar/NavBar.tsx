import Logo from '../Logo/Logo'
import { LinkGroup } from '../Link/LinkGroup'
import { links } from '../Link/data'

export default function NavBar() {
  return (
    <nav className='w-full f-full'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <a href='#' aria-label='Home'>
          <Logo />
        </a>

        {/* Menu Links */}
        <LinkGroup links={links} />
      </div>
    </nav>
  )
}

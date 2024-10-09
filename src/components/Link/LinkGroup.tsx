import { Link } from './Link'
import { LinkGroupProps } from './data'

export function LinkGroup({ links }: LinkGroupProps) {
  return (
    <div className='flex space-x-4'>
      {links.map((link, index) => (
        <Link key={index} href={link.href} variant={link.variant}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

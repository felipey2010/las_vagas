import ThemeToggler from 'components/ThemeToggler'
import { navLinks } from 'constants/NavbarLinks'
import { Button } from 'flowbite-react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex h-16 w-full items-center justify-between px-8 shadow-sm dark:border-b dark:border-gray-800/60'>
      <div className='flex w-fit items-center text-3xl font-bold'>
        <span className='text-purple-700 dark:text-purple-600'>Roraima</span>
        <span className='text-purple-500 dark:text-purple-400'>Vagas</span>
      </div>
      <ul className='hidden items-center gap-4 text-black/85 dark:text-white/85 md:flex'>
        {navLinks.map((link) => (
          <li
            key={link.title}
            className='text-sm font-medium hover:text-purple-600 hover:dark:text-purple-600'
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-3'>
        <ThemeToggler />
        <Button color='purple'>Acessar</Button>
      </div>
    </div>
  )
}

export default Navbar

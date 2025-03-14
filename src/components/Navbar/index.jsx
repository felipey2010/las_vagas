'use client'
import ThemeToggler from 'components/ThemeToggler'
import { navLinks } from 'constants/index'
import { Button, Navbar } from 'flowbite-react'

function NavbarComponent() {
  return (
    <Navbar fluid rounded className='!bg-slate-200 dark:!bg-gray-900'>
      <Navbar.Brand href='/' className='pl-4 text-3xl font-bold'>
        <span className='text-purple-700 dark:text-purple-600'>Las</span>
        <span className='text-purple-500 dark:text-purple-400'>Vagas</span>
      </Navbar.Brand>
      <div className='flex items-center gap-4 pr-4 md:order-2'>
        <ThemeToggler />
        <Button color='purple'>Acessar</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navLinks.map((link) => (
          <Navbar.Link
            href={link.path}
            key={link.title}
            className='text-base font-medium hover:!text-purple-600 hover:dark:!text-purple-500'
          >
            {link.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent

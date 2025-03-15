'use client'
import ThemeToggler from 'components/ThemeToggler'
import { navLinks } from 'data/NavList'
import { Button, Navbar } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AuthenticatedUser from './AuthenticatedUser'

function NavbarComponent() {
  const { data: session } = useSession()
  const router = useRouter()
  const isAuthenticated = !!session

  return (
    <Navbar fluid rounded className='!bg-slate-100 dark:!bg-gray-900'>
      <Navbar.Brand href='/' className='pl-4 text-3xl font-bold'>
        <span className='text-purple-700 dark:text-purple-600'>Las</span>
        <span className='text-purple-500 dark:text-purple-400'>Vagas</span>
      </Navbar.Brand>
      <div className='flex items-center gap-4 pr-4 md:order-2'>
        <ThemeToggler />
        {!isAuthenticated && (
          <Button
            type='button'
            onClick={() => router.push('/auth/signin')}
            color='purple'
          >
            Acessar
          </Button>
        )}
        {isAuthenticated && <AuthenticatedUser />}
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

'use client'

import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

function AuthenticatedUser() {
  const { data: session } = useSession()

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt={session?.user?.name || ''}
          img={session?.user?.image || ''}
          rounded
        />
      }
    >
      <Dropdown.Header>
        <span className='block text-sm'>{session?.user?.name}</span>
        <span className='block truncate text-sm font-medium'>
          {session?.user?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

export default AuthenticatedUser

'use client'

import FooterSection from 'components/FooterSection'
import NavbarComponent from 'components/Navbar'
import { useSession } from 'next-auth/react'

interface Props {
  children: React.ReactNode
}

function ProtectedLayout({ children }: Props) {
  const { status } = useSession({
    required: true,
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <>
      <NavbarComponent />
      <div className='w-full'>{children}</div>
      <FooterSection />
    </>
  )
}

export default ProtectedLayout

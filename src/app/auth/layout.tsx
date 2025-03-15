'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') router.push('/')

  return <div>{children}</div>
}

export default AuthLayout

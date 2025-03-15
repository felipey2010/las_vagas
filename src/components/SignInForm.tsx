'use client'

import { Button } from 'flowbite-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function SignInForm() {
  return (
    <div className='mt-8 space-y-6'>
      <Button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className='flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50'
      >
        <Image
          src='https://www.google.com/favicon.ico'
          alt='Google'
          width={20}
          height={20}
        />
        Continuar com Google
      </Button>
    </div>
  )
}

import SignInForm from 'components/SignInForm'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className='flex min-h-screen w-full flex-col p-4'>
      <Link href='/' className='pl-4 text-3xl font-bold'>
        <span className='text-purple-700 dark:text-purple-600'>Las</span>
        <span className='text-purple-500 dark:text-purple-400'>Vagas</span>
      </Link>
      <div className='flex w-full flex-1 items-center justify-center'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Entre na sua conta
            </h2>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

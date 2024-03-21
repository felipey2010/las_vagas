import Link from 'next/link'

function Page404() {
  return (
    <div className='flex h-full w-full items-center justify-center p-4'>
      <div className='flex w-full flex-col items-center justify-center gap-4 px-4'>
        <h1 className='text-center text-4xl text-blue-500'>
          Oops! Algo deu errado...
        </h1>
        <h1 className='text-center text-xl text-black/75 dark:text-gray-300'>
          Lamentavelmente, a página pela qual busca não parece estar disponível
          no momento.
        </h1>
        <Link
          href='/'
          className='px-5 py-2.5 text-center font-medium text-gray-600 hover:underline focus:text-blue-500 focus:underline focus:outline-none dark:text-white'
        >
          Volte para página inicial
        </Link>
      </div>
    </div>
  )
}

export default Page404

'use client'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className='relative flex min-h-[45vh] w-full items-center justify-center bg-violet-950 dark:bg-purple-800 md:justify-between'>
      <div className='flex h-full w-full flex-col items-center justify-between p-14 md:flex-row'>
        <div className='flex h-full w-full items-center justify-center'>
          <div className='flex h-full w-full flex-col gap-8'>
            <span className='text-5xl font-semibold text-white'>
              {' '}
              Novidades em breve
            </span>
            <p className='max-w-[600px] text-xl leading-7 text-gray-200'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              dolore, ab consequuntur amet dolores itaque deserunt optio dicta
              odio sequi, ipsum debitis tempora quo quam? Et aliquid quibusdam
              dolor amet?
            </p>
            <button className='w-fit min-w-40 rounded-full bg-indigo-600 px-4 py-3 text-white hover:bg-indigo-500'>
              Encontrar as vagas
            </button>
          </div>
        </div>

        <div className='flex h-full w-full items-center justify-center'>
          <Image
            src='/assets/images/news.png'
            width={250}
            height={250}
            className='min-w-[350px]'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection

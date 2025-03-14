'use client'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className='flex w-full items-center justify-center bg-violet-950 dark:bg-purple-800'>
      <div className='flex h-full w-full max-w-[1240px] flex-col items-center justify-between gap-12 p-14 md:flex-row'>
        <div className='flex h-full w-full flex-col gap-8'>
          <span className='text-5xl font-semibold text-white'>
            {' '}
            Novidades em breve
          </span>
          <p className='max-w-[600px] text-xl leading-7 text-gray-200'>
            Descubra as melhores oportunidades de emprego na sua área. Nosso
            sistema de anúncio de vagas conecta você com as empresas mais
            renomadas, oferecendo posições que se alinham com suas habilidades e
            aspirações. Fique atento para não perder a chance de encontrar a
            vaga dos seus sonhos!
          </p>
          <button className='w-fit min-w-40 rounded-full bg-indigo-600 px-4 py-3 text-white hover:bg-indigo-500'>
            Encontrar as vagas
          </button>
        </div>

        <div className='flex h-full w-full items-center justify-center'>
          <Image
            src={encodeURI('/assets/images/news.png')}
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

'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MdBusinessCenter, MdLocationOn, MdNewspaper } from 'react-icons/md'

interface Props {
  job: {
    id: number
    title: string
    company: string
    location: string
    salary: string
    logo: string
    contractStatus: string
    workStatus: string
    description: string
    about: string
    requirements: string[]
  }
}

function JobCard({ job }: Props) {
  const { title, logo, company, workStatus, contractStatus } = job
  const router = useRouter()

  const handleOpenJob = () => {
    router.push(`/vagas/${job.id}`)
  }

  return (
    <div className='col-span-12 w-full rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800 md:col-span-6'>
      <div className='flex h-full w-full flex-col justify-between gap-2'>
        <div className='flex flex-col items-start gap-6 md:flex-row md:items-center'>
          <Image
            src={logo}
            alt={title}
            width={70}
            height={70}
            className='w-[70px] object-cover'
          />
          <div className='flex flex-col gap-[6px]'>
            <span className='text-[22px] font-semibold text-indigo-500 dark:text-indigo-600'>
              {title}
            </span>
            <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <MdBusinessCenter width={'18px'} height={'18px'} />
              <span className='text-[14px] font-medium'>{company}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <MdLocationOn width={'18px'} height={'18px'} />
              <span className='text-[14px] font-medium'>{workStatus}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <MdNewspaper width={'18px'} height={'18px'} />
              <span className='text-[14px] font-medium'>{contractStatus}</span>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-end'>
          <button
            type='button'
            onClick={handleOpenJob}
            className='h-10 w-40 rounded-md bg-indigo-600 text-lg font-bold text-white hover:bg-indigo-500'
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard

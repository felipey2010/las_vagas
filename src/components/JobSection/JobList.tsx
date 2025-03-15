import EmptyContent from './EmptyJob'
import JobCard from './JobCard'

interface Props {
  jobs: {
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
  }[]
}

function JobList({ jobs }: Props) {
  return (
    <div className='mt-8 grid w-full grid-cols-12 gap-4'>
      {!jobs.length && <EmptyContent />}
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  )
}

export default JobList

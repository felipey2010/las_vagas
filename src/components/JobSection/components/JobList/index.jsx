import EmptyContent from '../EmptyContent'
import JobCard from '../JobCard'

function JobList({ jobs }) {
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

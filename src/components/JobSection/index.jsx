import Filters from './Filters'
import JobList from './JobList'
import PopularSearch from './PopularSearch'
import Searchbar from './Searchbar'
import { jobs, searchTerms } from 'data/jobs'

function JobSection() {
  return (
    <div className='relative flex h-full w-full flex-col items-start gap-9 md:flex-row'>
      <Filters />
      <div className='w-full rounded-md px-5'>
        <Searchbar />
        <PopularSearch searchTerms={searchTerms} />
        <JobList jobs={jobs} />
      </div>
    </div>
  )
}

export default JobSection

import Filters from './components/Filters'
import JobList from './components/JobList'
import PopularSearch from './components/PopularSearch'
import Searchbar from './components/Searchbar'
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

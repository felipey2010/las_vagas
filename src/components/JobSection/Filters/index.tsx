'use client'
import { filterList } from 'data/Filters'
import FilterItem from './FilterItem'

function Filters() {
  return (
    <div className='relative w-full md:sticky md:top-10 md:w-[500px]'>
      <div className='w-full rounded-lg border border-gray-200 bg-white/30 p-5 shadow-sm dark:border-gray-700 dark:bg-black/20'>
        <div className='flex w-full items-center'>
          <span className='text-xl font-semibold text-gray-800 dark:text-gray-400'>
            Filtros
          </span>
        </div>

        <div className='mt-5 flex w-full flex-row justify-between gap-4 md:flex-col'>
          {filterList.map((filter) => (
            <FilterItem filter={filter} key={filter.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filters

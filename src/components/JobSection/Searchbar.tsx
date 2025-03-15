import { FaSearch } from 'react-icons/fa'
function Searchbar() {
  return (
    <div className='w-full rounded-md border border-gray-200 bg-white/45 group-focus:border-purple-600 dark:border-gray-600 dark:bg-black/45'>
      <div className='flex w-full items-center gap-5'>
        <div className='flex w-full items-center gap-3 rounded-lg px-4 shadow-sm'>
          <FaSearch className='text-purple-600 dark:text-purple-400' />
          <input
            type='text'
            placeholder='Procurar vagas, empresas, ...'
            className='group h-14 w-full rounded-lg border-0 bg-transparent text-gray-700 outline-none focus:ring-0 dark:text-gray-300'
          />
        </div>
      </div>
    </div>
  )
}

export default Searchbar

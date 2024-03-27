function PopularSearch({ searchTerms }) {
  return (
    <div className='my-6 flex w-full flex-col items-center gap-2 md:flex-row'>
      <span className='ml-1 whitespace-nowrap text-[15px] font-medium text-gray-600 dark:text-gray-500'>
        Pesquisas frequentes:
      </span>
      <div className='flex w-full items-center gap-3 overflow-x-auto'>
        {searchTerms.map((s) => {
          return (
            <span
              key={s.title}
              className='mb-3 cursor-pointer whitespace-nowrap rounded-full border border-indigo-500 bg-gray-100 px-3 text-[15px] text-indigo-500 transition-all duration-200 hover:bg-indigo-100 dark:bg-gray-800 md:mb-0'
            >
              {s.title}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PopularSearch

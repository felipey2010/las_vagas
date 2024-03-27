import { Dropdown } from 'flowbite-react'
import { memo } from 'react'

function PageSelector({ filter, setFilter }) {
  const onPageChange = (value) => {
    setFilter((prev) => ({ ...prev, page: value }))
  }
  return (
    <div className='flex items-center gap-2'>
      <Dropdown
        label=''
        renderTrigger={() => (
          <span className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-4 text-sm font-semibold text-white dark:bg-gray-200 dark:text-black'>
            {filter.page + 1}
          </span>
        )}
      >
        {[...Array(filter.totalPages).keys()].map((page) => {
          return (
            <Dropdown.Item
              className='text-black dark:text-white'
              key={page}
              onClick={() => onPageChange(page)}
            >
              {page + 1}
            </Dropdown.Item>
          )
        })}
      </Dropdown>
      <p className='text-sm text-gray-500 dark:text-gray-600'>
        de {filter.totalPages}
      </p>
    </div>
  )
}

export default memo(PageSelector)

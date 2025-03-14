import { BsArrowRight } from 'react-icons/bs'

function NextPage({ filter, setFilter }) {
  const handleNext = () => {
    if (filter.page < filter.totalPages - 1) {
      setFilter((prev) => ({ ...prev, page: prev.page + 1 }))
    }
  }

  return (
    <button
      type='button'
      onClick={handleNext}
      disabled={filter.page === filter.totalPages - 1}
      className='flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 disabled:text-gray-400 hover:disabled:bg-transparent dark:text-white hover:dark:bg-gray-600 disabled:dark:text-gray-600'
    >
      <BsArrowRight size={16} />
    </button>
  )
}

export default NextPage

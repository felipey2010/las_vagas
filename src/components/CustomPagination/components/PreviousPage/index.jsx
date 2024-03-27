import { BsArrowLeft } from 'react-icons/bs'

function PreviousPage({ filter, setFilter }) {
  const handlePrevious = () => {
    if (filter.page > 0) {
      setFilter((prev) => ({ ...prev, page: prev.page - 1 }))
    }
  }

  return (
    <button
      type='button'
      onClick={handlePrevious}
      disabled={filter.page === 0}
      className='flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 disabled:text-gray-400 hover:disabled:bg-transparent dark:text-white hover:dark:bg-gray-600 disabled:dark:text-gray-600'
    >
      <BsArrowLeft size={16} />
    </button>
  )
}

export default PreviousPage

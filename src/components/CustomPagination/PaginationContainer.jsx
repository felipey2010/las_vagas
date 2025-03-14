import NextPage from './NextPage'
import PageSelector from './PageSelector'
import PreviousPage from './PreviousPage'

function Content({ filter, setFilter }) {
  return (
    <div className='my-4 flex w-fit items-center gap-4'>
      <PreviousPage filter={filter} setFilter={setFilter} />
      <PageSelector filter={filter} setFilter={setFilter} />
      <NextPage filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default Content

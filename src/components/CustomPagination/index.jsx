'use client'
import { memo, useEffect } from 'react'
import Content from './components/Content'

const CustomPagination = ({ filter, setFilter }) => {
  if (filter.totalPages <= 1) return null

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [filter.page, filter.size])

  return (
    <div className='flex items-center justify-center p-1'>
      <Content filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default memo(CustomPagination)

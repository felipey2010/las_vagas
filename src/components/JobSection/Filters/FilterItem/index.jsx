import RenderCheckbox from './RenderCheck'
import RenderSelect from './RenderSelect'

function FilterItem({ filter }) {
  const { title, type, items } = filter

  return (
    <div className='flex flex-col gap-4'>
      <span className='text-[15.5px] font-semibold text-gray-800 dark:text-gray-300'>
        {title}
      </span>
      <div className='flex w-full flex-col gap-2'>
        {type === 'checkbox' && <RenderCheckbox items={items} />}
        {type === 'select' && <RenderSelect items={items} />}
      </div>
    </div>
  )
}

export default FilterItem

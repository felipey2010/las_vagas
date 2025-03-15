import { Checkbox } from 'flowbite-react'

interface Props {
  items: {
    name: string
  }[]
}

function RenderCheckbox({ items }: Props) {
  return items.map((item) => (
    <div className='flex w-full items-center gap-2' key={item.name}>
      <Checkbox className='h-[16px] w-[16px] text-purple-600' />
      <span className='text-sm text-gray-800 dark:text-gray-300'>
        {item.name}
      </span>
    </div>
  ))
}

export default RenderCheckbox

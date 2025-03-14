function RenderSelect({ items }) {
  return (
    <select className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-600 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500'>
      {items.map((item) => (
        <option value={item.name} key={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default RenderSelect

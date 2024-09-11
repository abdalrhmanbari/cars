import React from 'react'

export default function Form({ placeholder, id, name, type}:{placeholder:string, id:string, name:string, type:string}) {
  return (
<div className="relative mt-2 rounded-md shadow-sm w-full">

<input
  id={id}
  name={name}
  type={type}
  placeholder={placeholder}
        required
  className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
  />
</div>
  )
}

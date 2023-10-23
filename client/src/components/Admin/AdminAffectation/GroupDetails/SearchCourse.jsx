import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function SearchCourse() {
    return (
        <div className='flex mb-4 mt-6 items-center'>
            <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
            <input type="search" name="" id="" className='text-center bg-white border-2 border-sky-500 rounded-lg h-10 pl-2 w-60' />
        </div>
    )
}

export default SearchCourse
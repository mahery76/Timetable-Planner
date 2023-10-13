import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CourseItem() {
  return (
    <div className='flex items-center justify-center mb-4'>
      <div className='truncate'>Nom de la matiere</div>
      <div>
        <TrashIcon className='w-5 ml-2 cursor-pointer' />
      </div>
      <div>
        <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
      </div>
    </div>
  )
}

export default CourseItem
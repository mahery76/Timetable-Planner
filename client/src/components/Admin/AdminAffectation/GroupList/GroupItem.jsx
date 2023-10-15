import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

function GroupItem() {
  return (
    <div className='flex items-center justify-center'>
    <div className='truncate py-2'>Nom de la classe</div>
    <div>
        <TrashIcon className='w-5 m-2 cursor-pointer' />
    </div>

</div>
  )
}

export default GroupItem
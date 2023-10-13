import React from 'react'
import { MagnifyingGlassCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

function TeacherItem() {
    return (
        <div className='flex items-center justify-center mb-4'>
            <div className='truncate'>Nom de l'enseignantsdfasfa</div>
            <div>
                <TrashIcon className='w-5 ml-2 cursor-pointer' />
            </div>
            <div>
                <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
            </div>
        </div>
    )
}

export default TeacherItem
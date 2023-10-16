import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'

function TeacherItem() {
    return (
        <div className='flex items-center justify-center'>
            <div className='truncate  py-2 px-2 rounded-lg hover:bg-sky-100 cursor-pointer'>Nom de l'enseignantsdfasfa</div>
            <div>
                <TrashIcon className='w-5 m-2 cursor-pointer stroke-red-800' />
            </div>
       
        </div>
    )
}

export default TeacherItem
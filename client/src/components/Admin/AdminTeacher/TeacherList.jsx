import { MagnifyingGlassCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import TeacherItem from './TeacherList/TeacherItem'
import AddBox from './TeacherList/AddBox'

function TeacherList() {
    return (
        <div className=" bg-white p-6 w-72">

            <div className='flex mb-4 mt-8'>
                <input type="text" name="" id="" className='bg-white border-2 border-gray-200 rounded-lg h-10 pl-2 w-60' />
                <MagnifyingGlassCircleIcon className='w-7 ml-2 stroke-gray-500' />
            </div>
            
            <div className="listOfTeacher max-h-72 overflow-auto scrollbar  ">
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </div>

            <AddBox />

        </div>
    )
}

export default TeacherList
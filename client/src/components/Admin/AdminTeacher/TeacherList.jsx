import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import TeacherItem from './TeacherList/TeacherItem'
import AddBox from './TeacherList/AddBox'

function TeacherList() {
    return (
        <div className=" flex flex-col items-center bg-white p-6">

            <div className='flex mb-4 mt-8 items-center '>
                <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
                <input type="text" name="" id="" className='text-center bg-white border-2 border-gray-200 rounded-lg h-10 pl-2 w-60' />
            </div>

            <div className="listOfTeacher max-h-72 overflow-auto scrollbar w-60 ">
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
import React from 'react'
import teacher from '../../../../Assets/DrTim.jpg'
import { PencilSquareIcon } from '@heroicons/react/24/outline'


function TeacherInfo() {
    return (
        <div className="TeacherInfo flex flex-col items-center ">

            <img src={teacher} alt="image" className='w-20 rounded-full mb-8' />

            <div className="TeacherName flex justify-between items-center w-72 mb-3">
                <div className="name mr-8 truncate"> RAKOTONANDRASANA Bernardo Delacruz </div>
                <div>
                    <PencilSquareIcon className='w-[20px] mx-2 cursor-pointer' />
                </div>
            </div>

            <div className="Teachertel flex justify-between w-72 mb-3">
                <div className="name mr-8 "> 033 45 565 88 </div>
                <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
            </div>

            <div className="TeacherEmail flex justify-between w-72 mb-3">
                <div className="name mr-8"> misandratra@gmail.com </div>
                <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
            </div>

            <div className="TeacherSalary flex justify-between w-72 mb-3">
                <div className="name mr-8"> 20 000 Ar/h</div>
                <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
            </div>


        </div>
    )
}

export default TeacherInfo
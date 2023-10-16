import React from 'react'
import teacher from '../../../../Assets/DrTim.jpg'
import { PencilSquareIcon } from '@heroicons/react/24/outline'


function TeacherInfo() {
    return (
        <div className="TeacherInfo flex flex-col items-center ">

            {/* <img src={teacher} alt="image" className='w-20 rounded-full mb-8' /> */}

            <div className="font-bold text-lg mb-6 text-sky-700">Informations de l'enseignant</div>

            <div className="TeacherName flex justify-between items-center w-72 mb-3">
                <div className="name mr-8 truncate"> RAKOTONANDRASANA Bernardo Delacruz </div>
                <div>
                    <PencilSquareIcon className='stroke-green-700 w-[20px] mx-2 cursor-pointer' />
                </div>
            </div>

            <div className="Teachertel flex justify-between w-72 mb-3">
                <div className="name mr-8 "> 033 45 565 88 </div>
                <div>
                    <PencilSquareIcon className='stroke-green-700 w-[20px] mx-2 cursor-pointer' />
                </div>
            </div>

            <div className="TeacherEmail flex justify-between w-72 mb-3">
                <div className="name mr-8"> misandratra@gmail.com </div>
                <div>
                    <PencilSquareIcon className='stroke-green-700 w-[20px] mx-2 cursor-pointer' />
                </div>
            </div>

            <div className="TeacherSalary flex justify-between w-72 mb-3">
                <div className="name mr-8"> 20 000 Ar/h</div>
                <div>
                    <PencilSquareIcon className='stroke-green-700 w-[20px] mx-2 cursor-pointer' />
                </div>
            </div>


        </div>
    )
}

export default TeacherInfo
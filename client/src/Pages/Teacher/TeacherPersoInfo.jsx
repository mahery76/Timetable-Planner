import React from 'react'
import TeacherDetails from '../../components/Admin/AdminTeacher/TeacherDetails'
import TeacherCourses from '../../components/Admin/AdminTeacher/TeacherCourses'

function TeacherPersoInfo() {
  return (
    <div className='bg-gray-100 flex justify-evenly w-full h-[calc(100vh-80px)] overflow-auto scrollbar'>
      <TeacherDetails />
      <TeacherCourses />
    </div>
    
  )
}

export default TeacherPersoInfo
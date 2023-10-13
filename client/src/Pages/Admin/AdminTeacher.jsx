import React from 'react'
import TeacherList from '../../components/Admin/AdminTeacher/TeacherList'
import TeacherDetails from '../../components/Admin/AdminTeacher/TeacherDetails'
import TeacherCourses from '../../components/Admin/AdminTeacher/TeacherCourses'

function AdminTeacher() {
  return (
    <div className='bg-gray-100 flex mt-1'>
      <TeacherList />

      <div className='flex justify-evenly w-full'>
        <TeacherDetails />
        <TeacherCourses />
      </div>

    </div>
  )
}

export default AdminTeacher
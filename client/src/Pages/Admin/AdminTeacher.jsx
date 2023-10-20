import React, { useState } from 'react'
import TeacherList from '../../components/Admin/AdminTeacher/TeacherList'
import TeacherDetails from '../../components/Admin/AdminTeacher/TeacherDetails'
import TeacherCourses from '../../components/Admin/AdminTeacher/TeacherCourses'
import {MyContext} from '../../Contexts/MyContext'

function AdminTeacher() {
  const [id_ens, setId_ens] = useState("")
  return (
    <div className='bg-gray-100 flex mt-1'>
      <MyContext.Provider value={{ id_ens, setId_ens }}>
        <TeacherList />
        <div className='flex justify-evenly w-full h-[calc(100vh-80px)] overflow-auto scrollbar'>
          <TeacherDetails />
          <TeacherCourses />
        </div>
      </MyContext.Provider>

    </div>
  )
}

export default AdminTeacher
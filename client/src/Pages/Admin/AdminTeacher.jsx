import React, { useState } from 'react'
import TeacherList from '../../components/Admin/AdminTeacher/TeacherList'
import TeacherDetails from '../../components/Admin/AdminTeacher/TeacherDetails'
import {MyContext} from '../../Contexts/MyContext'
import TeacherCompte from '../../components/Admin/AdminTeacher/TeacherCompte'

function AdminTeacher() {
  const [id_ens, setId_ens] = useState("")
  return (
    <div className='bg-gray-200 flex mt-1'>
      <MyContext.Provider value={{ id_ens, setId_ens }}>
        <TeacherList />
        <div className='flex flex-col w-full h-[calc(100vh-80px)] overflow-auto scrollbar'>
          <TeacherDetails />
          <TeacherCompte />
        </div>
      </MyContext.Provider>

    </div>
  )
}

export default AdminTeacher
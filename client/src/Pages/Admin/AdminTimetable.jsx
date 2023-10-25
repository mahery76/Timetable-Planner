import React, { useState } from 'react'
import GroupTeacherList from '../../components/Admin/AdminTimetable/GroupTeacherList'
import Timetable from '../../components/Admin/AdminTimetable/Timetable'
import { ClasseContext } from '../../Contexts/MyContext'

function AdminTimetable() {
  const [id_classe, setId_classe] = useState("")
  return (
    <div className='bg-gray-100 flex mt-1 '>
      <ClasseContext.Provider value={{ id_classe, setId_classe }}>
        <GroupTeacherList />
        <div className='w-full h-[calc(100vh-80px)] overflow-auto scrollbar'>
          <Timetable />
        </div>
      </ClasseContext.Provider>
    </div>
  )
}

export default AdminTimetable
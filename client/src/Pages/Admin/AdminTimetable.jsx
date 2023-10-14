import React from 'react'
import GroupTeacherList from '../../components/Admin/AdminTimetable/GroupTeacherList'
import Timetable from '../../components/Admin/AdminTimetable/Timetable'

function AdminTimetable() {
  return (
    <div className='bg-gray-100 flex mt-1 '>
      <GroupTeacherList />
      
      <div className='w-full h-[calc(100vh-80px)] overflow-auto scrollbar'>
        <Timetable />
      </div>

    </div>
  )
}

export default AdminTimetable
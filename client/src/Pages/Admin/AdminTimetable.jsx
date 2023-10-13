import React from 'react'
import GroupTeacherList from '../../components/Admin/AdminTimetable/GroupTeacherList'
import OccupationDetails from '../../components/Admin/AdminTimetable/OccupationDetails'
import Timetable from '../../components/Admin/AdminTimetable/Timetable'

function AdminTimetable() {
  return (
    <div className='bg-gray-100 flex mt-1'>
      <GroupTeacherList />
      
      <div className='w-full'>
        <OccupationDetails />
        <Timetable />
      </div>

    </div>
  )
}

export default AdminTimetable
import React from 'react'
import GroupList from '../../components/Admin/AdminAffectation/GroupList'
import GroupDetails from '../../components/Admin/AdminAffectation/GroupDetails'
import CourseDetails from '../../components/Admin/AdminAffectation/CourseDetails'

function AdminAffectation() {
  return (
    <div className='bg-gray-100 flex '>
      <GroupList />
      <div className='flex justify-evenly w-full max-h-screen overflow-auto scrollbar'>
        <GroupDetails />
        <CourseDetails />
      </div>
    </div>
  )
}

export default AdminAffectation
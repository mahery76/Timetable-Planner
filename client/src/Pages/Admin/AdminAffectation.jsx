import React from 'react'
import GroupList from '../../components/Admin/AdminAffectation/GroupList'
import GroupDetails from '../../components/Admin/AdminAffectation/GroupDetails'
import CourseDetails from '../../components/Admin/AdminAffectation/CourseDetails'

function AdminAffectation() {
  return (
    <div className='bg-gray-100 flex h-screen'>
      <GroupList />
      <div className='flex justify-evenly w-full'>
        <GroupDetails />
        <CourseDetails />
      </div>
    </div>
  )
}

export default AdminAffectation
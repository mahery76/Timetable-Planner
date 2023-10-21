import React from 'react'
import TeacherInfo from './TeacherDetails/TeacherInfo'
import DispoTable from './TeacherDetails/DispoTable'
function TeacherDetails() {
  return (
      <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center overflow-x-scroll scrollbar w-5/12">
        <TeacherInfo />
        <DispoTable/>
      </div>
  )
}

export default TeacherDetails
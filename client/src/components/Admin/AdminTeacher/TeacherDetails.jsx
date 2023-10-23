import React from 'react'
import TeacherInfo from './TeacherDetails/TeacherInfo'
import DispoTable from './TeacherDetails/DispoTable'
function TeacherDetails() {
  return (
      <div className=" mx-8 mt-4 bg-white p-4 rounded-xl flex  justify-evenly">
        <TeacherInfo />
        <DispoTable/>
      </div>
  )
}

export default TeacherDetails
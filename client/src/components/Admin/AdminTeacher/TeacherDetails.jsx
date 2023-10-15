import React from 'react'
import TeacherDispo from './TeacherDetails/TeacherDispo'
import TeacherInfo from './TeacherDetails/TeacherInfo'
function TeacherDetails() {
  return (


      <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">

        <TeacherInfo />

        <TeacherDispo />

      </div>
  )
}

export default TeacherDetails
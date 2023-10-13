import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import TodayDate from '../../TodayDate'
import React from 'react'

function Timetable() {
  return (
    <div className='bg-white'>

      <div className="dateNavigate flex justify-center items-center gap-5 p-4 m-2">
        <div className='w-12 rounded-md h-8 bg-blue-100 flex justify-center'> <BackwardIcon className='w-5' /> </div>
        <div> <TodayDate /> </div>
        <div className='w-12 rounded-md h-8 bg-blue-100 flex justify-center'> <ForwardIcon className='w-5' /> </div>
      </div>

    </div>
  )
}

export default Timetable
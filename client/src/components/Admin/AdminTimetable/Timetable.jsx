import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import TodayDate from '../../TodayDate'
import OccupationDetails from './TimeTable/OccupationDetails'
import React from 'react'
import Slots from './TimeTable/Slots'
import Journey from './TimeTable/Journey'

function Timetable() {
  return (
    <div className=''>

      <OccupationDetails />
      <div className="dateNavigate flex justify-center items-center gap-5 p-4 ">
        <div className='w-12 rounded-md h-8 bg-blue-100 flex justify-center'> <BackwardIcon className='w-5' /> </div>
        <div> <TodayDate /> </div>
        <div className='w-12 rounded-md h-8 bg-blue-100 flex justify-center'> <ForwardIcon className='w-5' /> </div>
      </div>

      <div className='bg-white grid grid-cols-7 gap-4 place-items-center mx-12 p-8'>
        <Slots />
        <Journey />
        <Journey />
        <Journey />
        <Journey />
        <Journey />
        <Journey />
        
      </div>
    </div>
  )
}

export default Timetable
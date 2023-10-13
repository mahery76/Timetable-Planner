import React from 'react'
import AddBoxGroupDetails from './GroupDetails/AddBoxGroupDetails'
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import CourseItem from './GroupDetails/CourseItem'

function GroupDetails() {
  return (
    <div className=" mt-8 bg-white p-8 rounded-xl flex flex-col items-center">

      {/* effectif layout*/}
      <div className="EffectifLayout flex flex-col items-center justify-center">
        <div className="EffectifTitle">
          Effectif
        </div>

        <div className="effectifModif flex items-center mt-2">
          <input type="number" name="" id=""
            className='bg-white border-2 border-gray-400 rounded-lg h-7  pl-2 w-16'
          />
          <div>
            <PencilSquareIcon className='w-5 mx-2 cursor-pointer' />
          </div>
        </div>
      </div>

      {/* course list layout */}
      <div className="courseList mt-6">Liste des matieres</div>

      <div className='flex mb-4 mt-6 items-center'>
        <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
        <input type="search" name="" id="" className='text-center bg-white border-2 border-gray-200 rounded-lg h-10 pl-2 w-60' />
      </div>

      <div className="max-h-40 overflow-auto scrollbar  ">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>

      <AddBoxGroupDetails />
    </div>
  )
}

export default GroupDetails
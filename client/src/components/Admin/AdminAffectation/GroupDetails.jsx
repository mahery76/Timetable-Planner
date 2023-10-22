import React from 'react'
import AddBoxGroupDetails from './GroupDetails/AddBoxGroupDetails'
import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import CourseItem from './GroupDetails/CourseItem'

function GroupDetails() {
  
  return (
    <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">

      {/* effectif layout*/}
      <div className="EffectifLayout flex flex-col items-center justify-center">
        <div className='text-sky-700 font-bold text-lg mb-4'>Caracteristiques de la classe</div>
        <div className='flex gap-4'>
          {/* nom de la classe */}
          <div>
            <div className="text-sky-700 font-bold">
              Nom
            </div>
            <div className="flex items-center mt-2 mb-4">
              <div>BTP L3</div>
              <div>
                <PencilSquareIcon className='stroke-green-700 w-5 mx-2 cursor-pointer' />
              </div>
            </div>
          </div>
          {/* Effectif de la classe */}
          <div>
            <div className=" text-sky-700 font-bold">
              Effectif
            </div>
            <div className="effectifModif flex items-center mt-2 mb-4">
              <div>30</div>
              <div>
                <PencilSquareIcon className='stroke-green-700 w-5 mx-2 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* course list layout */}
      <div className="text-sky-700 font-bold">Liste des matieres</div>
      <div className='flex mb-4 mt-6 items-center'>
        <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
        <input type="search" name="" id="" className='text-center bg-white border-2 border-sky-500 rounded-lg h-10 pl-2 w-60' />
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
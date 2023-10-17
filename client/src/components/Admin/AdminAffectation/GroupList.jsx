import React from 'react'
import AddBoxAffectation from './GroupList/AddBoxAffectation'
import GroupItem from './GroupList/GroupItem'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function GroupList() {
  return (
    <div className="flex flex-col items-center bg-white p-6 ">

      <div className='flex mb-4 my-8 items-center '>
        <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
        <input type="text" name="" id="" className='text-center bg-white border-2 border-sky-500 rounded-lg h-10 pl-2 w-60' />
      </div>

      <div className="listOfTeacher max-h-72 overflow-auto scrollbar  max-w-60">
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </div>

      <AddBoxAffectation />
    </div>
  )
}

export default GroupList
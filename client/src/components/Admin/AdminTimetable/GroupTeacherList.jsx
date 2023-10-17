import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import GroupTeacherItem from './GroupeTeacherList/groupTeacherItem'

function GroupTeacherList() {
  return (
    <div className='flex flex-col items-center bg-white p-6'>

      {/* two button for toggling between groups and teacher */}
      <div className='flex justify-between w-52'>
        <input type="button"
          value="Classes" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
        />
        <input type="button"
          value="Enseignants" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
        />
      </div>

      {/* research input  */}
      <div className='flex mb-4 mt-8 items-center '>
        <MagnifyingGlassIcon className='w-5 ml-2 stroke-gray-500 absolute' />
        <input type="text" name="" id="" className='text-center bg-white border-2 border-sky-500 rounded-lg h-10 pl-2 w-60' />
      </div>

      {/* list of classes or groups */}
      <div className='w-60 p-2 max-h-72 overflow-auto scrollbar'>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
        <GroupTeacherItem valueItem = "Mr Herimanana Jean William Seraphin"/>
      </div>


    </div>
  )
}

export default GroupTeacherList
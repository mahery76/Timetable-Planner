import React from 'react'
import AddBoxGroupDetails from './GroupDetails/AddBoxGroupDetails'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import GroupInfo from './GroupDetails/GroupInfo'
import CourseListe from './GroupDetails/CourseListe'
import SearchCourse from './GroupDetails/SearchCourse'

function GroupDetails() {
  
  return (
    <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">

      {/* effectif layout*/}
      <GroupInfo />

      {/* course list layout */}
      <div className="text-sky-700 font-bold">Liste des matieres</div>
      <SearchCourse/>
      <CourseListe/>
      <AddBoxGroupDetails />
    </div>
  )
}

export default GroupDetails
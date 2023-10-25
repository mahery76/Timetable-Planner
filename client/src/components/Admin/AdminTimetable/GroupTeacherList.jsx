import React, { useState } from 'react'
import { getHttp } from '../../../Api/httpget'
import ListOfGroupTimetable from './GroupeTeacherList/ListOfGroupTimetable'
import SearchGroup from '../AdminAffectation/GroupList/SearchGroup'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function GroupTeacherList() {
  const [term, setTerm] = useState("")
  const resClasse = getHttp(`http://localhost:3001/api/group`)
  return (
    <div className='flex flex-col items-center bg-white p-6'>

      {/* two button for toggling between groups and teacher */}
      {/* <div className='flex justify-between w-52'>
        <input type="button"
          value="Classes" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
        />
        <input type="button"
          value="Enseignants" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
        />
      </div> */}

      {/* satria mitovy aby ny composant search */}
      <SearchGroup term={term} setTerm={setTerm} />
      {resClasse.data && <ListOfGroupTimetable term={term} classes={resClasse.data} />}


    </div>
  )
}

export default GroupTeacherList
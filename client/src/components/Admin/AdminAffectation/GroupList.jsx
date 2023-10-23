import React, { useContext, useEffect, useState } from 'react'
import AddBoxAffectation from './GroupList/AddBoxAffectation'
import axios from 'axios'

import ListOfGroup from './GroupList/ListOfGroup'
import SearchGroup from './GroupList/SearchGroup'
import { ActeurContext } from '../../../Contexts/MyContext'
import { getHttp } from '../../../Api/httpget'
import ListOfTeacherInAffectation from './GroupList/ListOfTeacherInAffectation'

function GroupList() {
  const [term, setTerm] = useState("")
  const { acteur, setActeur } = useContext(ActeurContext)

  const resEns = getHttp(`http://localhost:3001/api/enseignant`)
  const resClasse = getHttp(`http://localhost:3001/api/group`)

  useEffect(() => {
    setActeur('CLS')
  }, [])

  useEffect(() => {
    console.log(acteur)
  }, [acteur])


  return (
    <div className="flex flex-col items-center bg-white p-6 ">
      {/* buttons for toggling between teacher and classes */}
      {/* <div className='flex justify-between w-52'>
        <input type="button"
          value="Classes" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
          onClick={() => setActeur('CLS')}
        />
        <input type="button"
          value="Enseignants" name="" id=""
          className='ajouterEnregistrer mt-4 h-10 w-24 '
          onClick={() => setActeur('ENS')}
        />
      </div> */}

      <SearchGroup term={term} setTerm={setTerm} />
      {acteur === "CLS" && resClasse.data && <ListOfGroup term={term} classes={resClasse.data} />}
      {acteur === "ENS" && resEns.data && <ListOfTeacherInAffectation term={term} enseignants={resEns.data} />}
      {acteur === "CLS" && <AddBoxAffectation />}

    </div>
  )
}
export default GroupList
import React, { useContext, useEffect, useState } from 'react'
import AddBoxGroupDetails from './GroupDetails/AddBoxGroupDetails'
import GroupInfo from './GroupDetails/GroupInfo'
import CourseListe from './GroupDetails/CourseListe'
import { getHttp } from '../../../Api/httpget'
import { ClasseContext } from '../../../Contexts/MyContext'
import SearchGroup from './GroupList/SearchGroup'

function GroupDetails({ setMatiere }) {
  const [term, setTerm] = useState("")

  const { id_classe } = useContext(ClasseContext)
  const { data, error } = getHttp(`http://localhost:3001/api/GroupAffectation/${id_classe}`)
  if (error) {
    return <div>{error}</div>
  }
  if(!data){
    return <div>loading ...</div>
  }

  return (
    <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">

      {/* effectif layout*/}
      <GroupInfo />

      {/* course list layout */}
      <div className="text-sky-700 font-bold">Liste des matieres</div>
      {/* mitovy aby rehefa composant search */}
      <SearchGroup term={term} setTerm={setTerm} />
      {data && <CourseListe term={term} affectations={data} setMatiere={setMatiere} />}
      <AddBoxGroupDetails />
    </div>
  )
}

export default GroupDetails
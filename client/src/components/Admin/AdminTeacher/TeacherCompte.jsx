import React, { useContext } from 'react'
import { getHttp } from '../../../Api/httpget'
import { MyContext } from '../../../Contexts/MyContext'
import ListOfOccupationCompte from './TeacherCompte/ListOfOccupationCompte'

function TeacherCompte() {
    const { id_ens } = useContext(MyContext)
    const { data: occupations, error } = getHttp(`http://localhost:3001/api/getOEC/${id_ens}`)
    return (
        <div className=" my-8 bg-white p-6 rounded-xl flex flex-col items-center w-5/12 overflow-x-scroll scrollbar">

            {error && <div>{error}</div>}
            {occupations && <ListOfOccupationCompte occupations={occupations} />}

        </div>
    )
}

export default TeacherCompte
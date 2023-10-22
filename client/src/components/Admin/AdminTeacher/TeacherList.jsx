import React, { useEffect, useState } from 'react'
import AddBox from './TeacherList/AddBox'
import { getHttp } from '../../../Api/httpget'
import ListOfTeacher from './TeacherList/ListOfTeacher'
import SearchTeacher from './TeacherList/SearchTeacher'

function TeacherList() {
    
    const [term, setTerm] = useState("")
    const { data: enseignants, error } = getHttp("http://localhost:3001/api/enseignant")

    return (
        <div className=" flex flex-col items-center bg-white p-6">
            <SearchTeacher term={term} setTerm={setTerm} />
            {error && <div>{error}</div>}
            {enseignants && <ListOfTeacher term={term} enseignants={enseignants} />}
            <AddBox />
        </div>
    )
}
export default TeacherList
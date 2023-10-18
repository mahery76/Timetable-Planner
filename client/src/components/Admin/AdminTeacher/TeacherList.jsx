import React from 'react'
import AddBox from './TeacherList/AddBox'
import { getHttp } from '../../../Api/httpget'
import ListOfTeacher from './TeacherList/ListOfTeacher'
import SearchTeacher from './TeacherList/SearchTeacher'

function TeacherList() {

    const { data: enseignants, error } = getHttp("http://localhost:3001/api/enseignant")
    return (
        <div className=" flex flex-col items-center bg-white p-6">
            <SearchTeacher />
            {error&& <div>{error}</div>}
            {enseignants && <ListOfTeacher enseignants= {enseignants}/>}
            <AddBox />
        </div>
    )
}

export default TeacherList
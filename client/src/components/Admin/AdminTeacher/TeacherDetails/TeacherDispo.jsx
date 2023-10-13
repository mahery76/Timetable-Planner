import React from 'react'
import DispoTable from './TeacherDispo/DispoTable'


function TeacherDispo() {
    return (
        <div>
            <DispoTable />
            <div>
                <input type="button"
                    value="Enregistrer" name="" id=""
                    className='cursor-pointer bg-gray-300 mt-4 border-gray-500 rounded-lg h-10 w-full '
                />
            </div>
        </div>

    )
}

export default TeacherDispo
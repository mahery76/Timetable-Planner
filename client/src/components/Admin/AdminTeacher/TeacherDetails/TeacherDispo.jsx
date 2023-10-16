import React from 'react'
import DispoTable from './TeacherDispo/DispoTable'


function TeacherDispo() {
    return (
        <div>
            <DispoTable />
            <div>
                <input type="button"
                    value="Enregistrer" name="" id=""
                    className='ajouterEnregistrer mt-4 h-10 w-full '
                />
            </div>
        </div>

    )
}

export default TeacherDispo
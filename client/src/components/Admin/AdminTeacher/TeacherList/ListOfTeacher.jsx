import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { MyContext } from '../../../../Contexts/MyContext'

function ListOfTeacher({ enseignants }) {
    const { id_ens, setId_ens } = useContext(MyContext)

    const getEns = (id_ens) => {
        setId_ens(() => {
            return id_ens
        })
        console.log(id_ens)
    }
    return (
        <div className="listOfTeacher max-h-80 overflow-auto scrollbar w-60 ">
            {enseignants.map((ens) => (
                <div className='flex items-center' key={ens.id_ens}>
                    <div
                        className='truncate w-5/6 py-2 px-2 rounded-lg hover:bg-sky-100 cursor-pointer'
                        onClick={() => getEns(ens.id_ens)}
                    >
                        {ens.nom_ens}
                    </div>
                    <div>
                        <TrashIcon className='w-5 m-2 cursor-pointer stroke-red-800' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListOfTeacher
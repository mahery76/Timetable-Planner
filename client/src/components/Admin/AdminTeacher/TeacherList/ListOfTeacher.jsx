import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../../Contexts/MyContext'
import { deleteHttp } from '../../../../Api/httpget'

function ListOfTeacher({ enseignants, term }) {
    const [isActive, setIsActive] = useState(false)
    const [res, setRes] = useState([])

    //useContext for getting the id of teacher to play alongside the application
    const { setId_ens, id_ens } = useContext(MyContext)
    const getEns = (id_ens) => {
        setId_ens(() => {
            return id_ens
        })
        console.log(id_ens)
    }


    // update the res everytime enseignants and terms updates
    useEffect(() => {
        const regexPattern = new RegExp(term, "i");
        setRes(enseignants.filter((item) => regexPattern.test(item.nom_ens)));
        setId_ens(enseignants[enseignants.length-1].id_ens)
    }, [term]);


    const handleDelete = async (id_ens) => {
        const confirmed = window.confirm('Voulez-vous bien supprimer?');
        if (confirmed) {
          const deleteEns = await deleteHttp(`http://localhost:3001/api/enseignant/${id_ens}`)
          setRes(res.filter(item => item.id_ens !== id_ens))
        }
    }

    return (
        <div className="listOfTeacher max-h-80 overflow-auto scrollbar w-60 ">
            {res.map((ens) => (
                <div className='flex items-center' key={ens.id_ens}>
                    <div
                        className={
                            isActive?
                            'truncate w-5/6 py-2 px-2 rounded-lg bg-sky-800 cursor-pointer'
                            :
                            'truncate w-5/6 py-2 px-2 rounded-lg hover:bg-sky-100 cursor-pointer'
                        }
                        onClick={() => getEns(ens.id_ens)}
                    >
                        {ens.nom_ens}
                    </div>
                    <div>
                        <TrashIcon
                            className='w-5 m-2 cursor-pointer stroke-red-800'
                            onClick={() => handleDelete(ens.id_ens)}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListOfTeacher
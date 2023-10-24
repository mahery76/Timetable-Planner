import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { ClasseContext } from '../../../../Contexts/MyContext'
import { getHttp } from '../../../../Api/httpget'

function GroupInfo() {
    const { id_classe } = useContext(ClasseContext)
    const { data, error } = getHttp(`http://localhost:3001/api/group/${id_classe}`)
    if (!data) {
        return <div>Loading...</div>;
    }
    // If there's an error, render an error message
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="EffectifLayout flex flex-col items-center justify-center">
            <div className='text-sky-700 font-bold text-lg mb-4'>Caracteristiques de la classe</div>
            <div className='flex gap-4'>
                {/* nom de la classe */}
                <div>
                    <div className="text-sky-700 font-bold">
                        Nom
                    </div>
                    <div className="flex items-center mt-2 mb-4">
                        <div>
                            {data.nom_classe}
                        </div>
                    </div>
                </div>
                {/* Effectif de la classe */}
                <div>
                    <div className=" text-sky-700 font-bold">
                        Effectif
                    </div>
                    <div className="effectifModif flex items-center mt-2 mb-4">
                        <div>{data.effectif_classe}</div>
                    </div>
                </div>
                {/* Taux horaire */}
                <div>
                    <div className=" text-sky-700 font-bold">
                        Taux horaire
                    </div>
                    <div className="effectifModif flex items-center mt-2 mb-4">
                        <div>{data.taux_hor}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GroupInfo
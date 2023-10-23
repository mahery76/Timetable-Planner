import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'

function GroupInfo() {
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
                        <div>BTP L3</div>
                        <div>
                            <PencilSquareIcon className='stroke-green-700 w-5 mx-2 cursor-pointer' />
                        </div>
                    </div>
                </div>
                {/* Effectif de la classe */}
                <div>
                    <div className=" text-sky-700 font-bold">
                        Effectif
                    </div>
                    <div className="effectifModif flex items-center mt-2 mb-4">
                        <div>30</div>
                        <div>
                            <PencilSquareIcon className='stroke-green-700 w-5 mx-2 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GroupInfo
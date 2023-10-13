import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import React from 'react'
import TodayDate from '../../../../TodayDate'
import DispoItem from './DispoTable/DispoItem'

function DispoTable() {
    return (
        <div className='mt-6'>
            <div className="dateNavigate flex justify-between mb-2">
                <div> <BackwardIcon className='w-5' /> </div>
                <div> <TodayDate /> </div>
                <div> <ForwardIcon className='w-5' /> </div>
            </div>

            <div className='flex'>

                <div className="stots mr-2">
                    <div className='slot mb-1'>Créneaux</div>
                    <div className='slot text-xs h-6'>08:00-10:00</div>
                    <div className='slot text-xs h-6'>08:00-10:00</div>
                    <div className='slot text-xs h-6'>08:00-10:00</div>
                    <div className='slot text-xs h-6'>08:00-10:00</div>

                </div>

                <DispoItem jour="Lun"/>
                <DispoItem jour="Mar"/>
                <DispoItem jour="Mer"/>
                <DispoItem jour="Jeu"/>
                <DispoItem jour="Ven"/>
                <DispoItem jour="Sam"/>
        

            </div>

        </div>
    )
}

export default DispoTable
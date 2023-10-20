import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import DispoJour from './DispoTable/DispoJour'
import { FrDate, generate, nextWeek, prevWeek } from '../../../../Helpers/Calendar'

function DispoTable() {
    const [currentDay, setCurrenDay] = useState(new Date())
    const [weekDays, setWeekDays] = useState([])
    useEffect(() => {
        setWeekDays(generate(currentDay))
    },[currentDay])

    return (
        <div className='mt-6'>
            <div className="dateNavigate flex justify-between mb-2">
                <div
                    className='ajouterEnregistrer w-12  h-8  flex justify-center'
                    onClick={() => { setCurrenDay(prevWeek(currentDay)) }}
                >
                    <BackwardIcon className='w-5' />
                </div>

                <div className="flex items-center text-sky-700"> {FrDate(currentDay)} </div>
                
                <div
                    className='ajouterEnregistrer w-12 h-8 flex justify-center'
                    onClick={() => {setCurrenDay(nextWeek(currentDay))}}
                > <ForwardIcon className='w-5' />
                </div>
            </div>
            <div className='flex'>

                <div className="stots mr-2">
                    <div className='slot mb-5 text-xs '>Créneaux</div>
                    <div className='slot text-xs h-10'>08:00-10:00</div>
                    <div className='slot text-xs h-10'>08:00-10:00</div>
                    <div className='slot text-xs h-10'>08:00-10:00</div>
                    <div className='slot text-xs h-10'>08:00-10:00</div>
                </div>

                <DispoJour jour="Lun" date={new Date(weekDays[1])} />
                <DispoJour jour="Mar" date={new Date(weekDays[2])} />
                <DispoJour jour="Mer" date={new Date(weekDays[3])} />
                <DispoJour jour="Jeu" date={new Date(weekDays[4])} />
                <DispoJour jour="Ven" date={new Date(weekDays[5])} />
                <DispoJour jour="Sam" date={new Date(weekDays[6])} />
            </div>
        </div>
    )
}
export default DispoTable
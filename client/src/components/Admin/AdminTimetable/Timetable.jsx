import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Journey from './TimeTable/Journey'
import { FrDate, generate, nextWeek, prevWeek } from '../../../Helpers/Calendar'
import { getHttp } from '../../../Api/httpget'

function Timetable() {
  const [currentDay, setCurrenDay] = useState(new Date('2023-10-18'))
  const [weekDays, setWeekDays] = useState([])
  useEffect(() => {
    setWeekDays(generate(currentDay))
  }, [currentDay])
  const { data: crens, error } = getHttp("http://localhost:3001/api/creneau")

  return (
    <div className='the_whole_timetable_tab'>
      <div className='flex justify-center gap-12 p-4'>
        <div className='ajouterEnregistrer p-3'>Bouttons</div>
        <div className='ajouterEnregistrer p-3'>Bouttons</div>
        <div className='ajouterEnregistrer p-3'>Bouttons</div>
      </div>

      {/* navigation  */}
      <div className="dateNavigate flex justify-center items-center gap-12 mb-6">
        <div
          className='ajouterEnregistrer flex justify-center w-14 h-12'
          onClick={() => { setCurrenDay(prevWeek(currentDay)) }}
        >
          <BackwardIcon className='w-5' />
        </div>

        <div className="flex items-center font-bold text-xl">
          <div>{FrDate(currentDay)}</div>
          <div></div>
        </div>

        <div
          className='ajouterEnregistrer flex justify-center  w-14 h-12'
          onClick={() => { setCurrenDay(nextWeek(currentDay)) }}
        >
          <ForwardIcon className='w-5' />
        </div>
      </div>

      {/* the actual timetable */}
      <div className='flex justify-center bg-white mx-4 py-4'>
        <div className="stots mr">
          <div className='slot text-center'>Créneaux</div>
          {error && <div>{error}</div>}
          {
            crens && crens.map((cren) => (
              <div key={cren.id_cren} className='slot bg-slate-200 flex items-center px-2 m-4 h-16'>{cren.valeur_cren}</div>
            ))
          }
        </div>

        <Journey jour="Lun" date={new Date(weekDays[1])} />
        <Journey jour="Mar" date={new Date(weekDays[2])} />
        <Journey jour="Mer" date={new Date(weekDays[3])} />
        <Journey jour="Jeu" date={new Date(weekDays[4])} />
        <Journey jour="Ven" date={new Date(weekDays[5])} />
        <Journey jour="Sam" date={new Date(weekDays[6])} />

      </div>
    </div>
  )
}

export default Timetable
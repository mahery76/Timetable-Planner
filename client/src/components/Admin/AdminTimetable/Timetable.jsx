import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Journey from './TimeTable/Journey'
import { FrDate, generate, nextWeek, prevWeek } from '../../../Helpers/Calendar'
import { getHttp } from '../../../Api/httpget'
import axios, { Axios } from 'axios'
import { useContext } from 'react'
import { ClasseContext } from '../../../Contexts/MyContext'

function Timetable() {
  const [currentDay, setCurrenDay] = useState(new Date())
  const [weekDays, setWeekDays] = useState([])
  const [startDay, setStarDay] = useState(new Date())
  const [endDay, setEndDay] = useState(new Date())
  const [classeName, setClasseName] = useState('')


  const { id_classe } = useContext(ClasseContext)

  const { data: crens, error } = getHttp("http://localhost:3001/api/creneau")

  const getClasseName = async () => {
    if(id_classe){
      const currentClasse = await axios.get(`http://localhost:3001/api/group/${id_classe}`)
      setClasseName(() => currentClasse.data.nom_classe)
    }
  }

  useEffect(() => {
    getClasseName(id_classe)
  }, [id_classe])

  useEffect(() => {
    setWeekDays(generate(currentDay))
  }, [currentDay])

  useEffect(() => {
    setStarDay(weekDays[0])
    setEndDay(weekDays[weekDays.length - 1])
  }, [weekDays])

  const handleGenerate = async (startDay, endDay) => {
    console.log(startDay, endDay)
    const res = await axios.get(`http://localhost:3001/api/genOccupation?dateDebut=${startDay}&dateFin=${endDay}`)
    window.location.reload(false);
    console.log("mety")
  }


  return (
    <div className='the_whole_timetable_tab'>
      <div className='flex justify-center gap-12 m-4'>

        {/* bouton generer */}
        <input
          type="button"
          className=' h-12 flex items-center justify-center  bg-sky-100 rounded-full w-2/5 border-2 border-sky-700
                      cursor-pointer hover:bg-sky-200  '
          value="Générer emploi du temps"
          onClick={() => { handleGenerate(startDay, endDay) }}
        />
      </div>

      {/* navigation  */}
      <div className="dateNavigate flex justify-center items-center gap-12 mb-4">
        <div
          className='ajouterEnregistrer flex justify-center w-14 h-12'
          onClick={() => { setCurrenDay(prevWeek(currentDay)) }}
        >
          <BackwardIcon className='w-5' />
        </div>

        <div className="flex items-center flex flex-col ">
          <div>{classeName}</div>
          <div className='text-xl font-bold'>{FrDate(currentDay)}</div>
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
              <div key={cren.id_cren} className='slot flex items-center m-4 h-32'>
                <div className='flex items-center bg-slate-200 h-12 rounded-sm  px-2'>{cren.valeur_cren}</div>
              </div>
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
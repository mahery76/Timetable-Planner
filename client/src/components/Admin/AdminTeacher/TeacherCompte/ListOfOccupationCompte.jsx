import React from 'react'
import { FrDate } from '../../../../Helpers/Calendar'

function ListOfOccupationCompte({ occupations }) {
  return (
    <div className="teacherCourseTab flex flex-col items items-center ml-56 ">
      <div className="font-bold text-lg mb-6 text-sky-700 flex justify-center w-full">Comptes</div>

      <div className='flex mb-4 justify-center'>
        <div className='flex justify-center w-12 text-bold text-sky-700 '>Classe</div>
        <div className='flex justify-center w-32 text-bold text-sky-700 '>Matiere</div>
        <div className='flex justify-center w-32 text-bold text-sky-700 '>Créneau</div>
        <div className='flex justify-center w-36 text-bold text-sky-700 '>Date</div>
        <div className='flex justify-center w-24 text-bold text-sky-700 '>Paiement</div>
        <div className='flex justify-center w-28 text-bold text-sky-700 '>Expiration</div>
      </div>

      {
        occupations.map((occ) => (
          <div className='flex mb-4 justify-center' key={occ.id_occupation}>
            <div className='flex justify-center w-12'>{occ.nom_classe}</div>
            <div className='flex justify-center w-32'>{occ.nom_matiere}</div>
            <div className='flex justify-center w-32'>{occ.valeur_cren}</div>
            <div className='flex justify-center w-36'>{FrDate(occ.date_occupation)}</div>
            <div className='flex justify-center w-24'>{occ.isPaied ? <p>Payée</p> : <p>Non payée</p>}</div>
            <div className='flex justify-center w-28'>{occ.isDone ? <p>Terminée</p> : <p>Non terminée</p>}</div>
          </div>
        ))
      }
    </div>
  )
}

export default ListOfOccupationCompte
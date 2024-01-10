import React from 'react'
import { FrDate } from '../../../../Helpers/Calendar'
import axios from 'axios';

function ListOfOccupationCompte({ occupations, montant, countOccupation, setIsPaied }) {
  const handlePay = async (id_occupation) => {
    if (occupations) {
      setIsPaied(false)
      const confirmed = window.confirm('Voulez-vous bien payer cette occupation ?');
      if (confirmed) {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/setPaied/${id_occupation}`)
        setIsPaied(true)
        console.log(res)
      }
    }
  }
  return (
    <div className="flex flex-col items-center">
      <div className=" flex justify-evenly items-center w-full mb-6">
        <div>
          <div className='font-bold text-lg text-sky-700'>Séances non payées</div>
          <div>{countOccupation}</div>
        </div>
        <div>
          <div className='font-bold text-lg text-sky-700'>Montant en Ar</div>
          <div>{montant}</div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-6 mb-2 mx-2 w-full gap-4 text-center'>
          <div className='text-bold text-sky-700 truncate'>Classe</div>
          <div className='text-bold text-sky-700 truncate'>Matiere</div>
          <div className='text-bold text-sky-700 truncate'>Créneau</div>
          <div className='text-bold text-sky-700 truncate'>Date</div>
          <div className='text-bold text-sky-700 truncate'>Paiement</div>
          {/* <div className='text-bold text-sky-700 truncate'>Séance</div> */}
        </div>
        <div className='max-h-60 overflow-scroll scrollbar'>
          {
            occupations.map((occ) => (
              <div
                className='grid grid-cols-6 h-12 items-center rounded cursor-pointer w-full gap-4 text-center
                           hover:bg-sky-100 
                           '
                key={occ.id_occupation}>
                <div className='truncate'>{occ.nom_classe}</div>
                <div className='truncate'>{occ.nom_matiere}</div>
                <div className='truncate'>{occ.valeur_cren}</div>
                <div className='truncate'>{FrDate(occ.date_occupation)}</div>
                <div className='truncate'>{occ.isPaied ? <p>Payée</p> : <p>Non payée</p>}</div>
                <button
                  className={
                    occ.isPaied ?
                    'hidden'
                    :
                    'truncate bg-sky-300 rounded rounded-sm hover:bg-grey-400 mx-2'
                  }
                  onClick={() => handlePay(occ.id_occupation)}
                  disabled={occ.isPaied}
                >Payer
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default ListOfOccupationCompte
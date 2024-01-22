import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../Contexts/MyContext'
import ListOfOccupationCompte from './TeacherCompte/ListOfOccupationCompte'
import axios from 'axios'

function TeacherCompte() {
    const { id_ens } = useContext(MyContext)
    const [montant, setMontant] = useState(0)
    const [occupations, setOccupations] = useState([])
    const [countOccupation, setCountOccupation] = useState(0)
    const [isPaied, setIsPaied] =  useState(false)

    const getOccupations = async () => {
        if(id_ens){
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/getOEC/${id_ens}`)
            const { occupations, notpaied, Montant } = res.data
            setOccupations(occupations)
            setMontant(Montant)
            setCountOccupation(notpaied)                                                                             
        }
    }

    useEffect(() => {
       getOccupations()
       console.log(isPaied)
    }, [id_ens, isPaied])
 
    return (
        <div className=" md:mx-8 mt-4 bg-white p-6 rounded-xl flex flex-col items-center">

            <ListOfOccupationCompte
                occupations={occupations}
                montant={montant}
                countOccupation={countOccupation}
                //satria mila 
                setIsPaied={setIsPaied}
            />

        </div>
    )
}

export default TeacherCompte
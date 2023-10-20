import React, { useContext, useEffect, useState } from 'react'
import teacher from '../../../../Assets/DrTim.jpg'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { MyContext } from '../../../../Contexts/MyContext'
import { getHttp } from '../../../../Api/httpget'


function InfoItem({ ItemValue, title }) {
    return (
        <div className="TeacherName flex flex-col justify-center items-center w-72 ">
            <div className='font-bold text-sky-700'>{title}</div>
            <div className="name truncate">{ItemValue}</div>
            {/* <div>
                <PencilSquareIcon className='stroke-green-700 w-[20px] mx-2 cursor-pointer' />
            </div> */}
        </div>
    )
}
function TeacherInfo() {
    const { id_ens } = useContext(MyContext)
    const { data, error } = getHttp(`http://localhost:3001/api/enseignant/${id_ens}`)

    if (!data) {
        return <div>Loading...</div>;
    }
    // If there's an error, render an error message
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="TeacherInfo flex flex-col items-center ">
            {/* <img src={teacher} alt="image" className='w-20 rounded-full mb-8' /> */}
            <div className="font-bold text-lg mb-2 text-sky-700">Informations de l'enseignant</div>

            <InfoItem ItemValue={data.nom_ens}     title="Nom"/>
            <InfoItem ItemValue={data.coordonnees} title="Contact"/>
            <InfoItem ItemValue={data.email_ens}   title="Email"/>
            <InfoItem ItemValue={data.taux_hor}    title="Taux en Ar/h"/>


            {/* it will show up when there is an insertion or update of a teacher */}
            {/* <div className='w-72'>
                <input type="button"
                    value="Enregistrer" name="" id=""
                    className='ajouterEnregistrer  h-10 w-full '
                />
            </div> */}
        </div>
    )
}
export default TeacherInfo
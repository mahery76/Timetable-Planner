import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import CourseProperty from './CourseDetails/CourseProperty'


function CourseDetails() {
  return (
    <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">

      <div className="text-sky-700 font-bold text-lg mb-4">Caractéristiques de la Matière</div>

      <CourseProperty detailTitle="Nom de la matière" detailValue="Amelioration des plantes" />
      <CourseProperty detailTitle="Enseignant" detailValue="RAKOTONANDRASANA Anaelle Isayah" />
      <CourseProperty detailTitle="Volume horaire" detailValue="30" />
      <CourseProperty detailTitle="Salle par defaut" detailValue="Laboratoire" />

      <div className="bouton">

        <input type="button" name="" id="" className="ajouterEnregistrer mt-10 h-10 w-60 " value="Enregistrer" />

      </div>

    </div>
  )
}

export default CourseDetails
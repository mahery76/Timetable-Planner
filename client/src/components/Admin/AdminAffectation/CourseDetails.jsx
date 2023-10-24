import React, { useContext } from 'react'
import CourseProperty from './CourseDetails/CourseProperty'
import { AffectationContext } from '../../../Contexts/MyContext'
import { getHttp } from '../../../Api/httpget'


function CourseDetails() {
  const { id_affectation } = useContext(AffectationContext)
  const { data, error } = getHttp(`http://localhost:3001/api/Affectation/${id_affectation}`)
  if (!data) {
    return <div>Loading...</div>;
  }
  // If there's an error, render an error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className=" my-8 bg-white p-8 rounded-xl flex flex-col items-center">
      <div className="text-sky-700 font-bold text-lg mb-4">Caractéristiques de la Matière</div>
      <CourseProperty
        detailTitle="Nom de la matière"
        detailValue={data.nom_matiere} />
      <CourseProperty
        detailTitle="Enseignant"
        detailValue={data.nom_ens} />
      <CourseProperty
        detailTitle="Volume horaire"
        detailValue={data.vh} />
      <CourseProperty
        detailTitle="Volume horaire restantes"
        detailValue={data.vh_restante} />
      <CourseProperty
        detailTitle="Salle"
        detailValue={data.nom_salle?data.nom_salle:""} />
      <CourseProperty
        detailTitle="Tronc Commun"
        detailValue={data.nom_tronc_commun?data.nom_tronc_commun:""} />


    </div>
  )
}

export default CourseDetails
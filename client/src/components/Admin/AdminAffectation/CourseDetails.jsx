import React from 'react'

function CourseDetails() {
  return (
    <div className=" mt-8 bg-white p-8 rounded-xl flex flex-col items-center">

      <div className="courseDetailsTitle">Caracteristique de la Matière</div>

      <div className="courseNameLayout">
        <div className="courseNameTitle font-bold text-base">Nom de la matière</div>
        <div className="courseNameAndModif flex justify-between">
          <div>Amelioration des plantes</div>
          <div> <PencilSquareIcon /> </div>
        </div>
      </div>

    </div>
  )
}

export default CourseDetails
import React from 'react'

function TeacherCourses() {
    return (
        <div className="my-8 bg-white p-6 rounded-xl flex flex-col items-center">

            <div className="font-bold text-lg mb-6 text-sky-700">Comptes</div>

            <div className="teacherCourseTab ">
                <div className='flex mb-4'>
                    <div>Classe</div>
                    <div>Matiere</div>
                    <div>Cren</div>
                    <div>Date</div>
                    <div>Est payée</div>
                </div>

                
            </div>

            {/* it shows up when there are some updates in teacher courses tab */}
            {/* <div className=" flex w-full">
                <input type="button" value="Enregistrer"
                    className='ajouterEnregistrer cursor-pointer  mt-4 rounded-lg h-10 w-full '
                />
            </div> */}

        </div>
    )
}

export default TeacherCourses
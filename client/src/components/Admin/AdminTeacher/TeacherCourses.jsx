import React from 'react'

function TeacherCourses() {
    return (
        <div className="my-8 bg-white p-8 rounded-xl flex flex-col items-center">
            
            <div className="font-bold text-lg mb-6 text-sky-700">Les matières de l'enseignant</div>
            
            <div className="commonCoreButton">
                <div className="newButton">
                    <input type="button" value="Ajouter tronc commun"
                        className='cursor-pointer border-2 border-violet-900 bg-violet-200 mt-4  hover:bg-violet-300 rounded-lg h-10 w-60 '
                    />
                </div>

                <div className="addDeleteButton flex justify-between">
                    <div className="add">
                        <input type="button" value="Marquer"
                            className='cursor-pointer border-2 border-green-900 bg-green-200 mt-4  hover:bg-green-300 rounded-lg h-10 w-24 '
                        />
                    </div>

                    <div className="delete">
                        <input type="button" value="Enlever"
                            className='cursor-pointer border-2 border-pink-900 bg-pink-200 mt-4  hover:bg-pink-300 rounded-lg h-10 w-24 '
                        />
                    </div>
                </div>

            </div>

            <div className="courseList w-60 mt-4">
                <div className='courseItem'>
                    <div className="course font-bold text-base text-sky-700">Amelioration des plantes</div>
                    <div className="groupList grid grid-cols-4 gap-x-3"> 
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                    </div>
                </div>
            </div>

            <div className="courseList w-60 mt-4">
                <div className='courseItem'>
                    <div className="course font-bold text-base text-sky-700">Amelioration des plantes</div>
                    <div className="groupList grid grid-cols-4 gap-x-3"> 
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                        <div className="groupItem truncate">asdfasdddddd</div>
                    </div>
                </div>
            </div>
 
   
   
            <div className=" flex w-full">
                <input type="button" value="Enregistrer"
                    className='ajouterEnregistrer cursor-pointer  mt-4 rounded-lg h-10 w-full '
                />
            </div>
        </div>
    )
}

export default TeacherCourses
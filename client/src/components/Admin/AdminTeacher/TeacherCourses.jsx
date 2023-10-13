import React from 'react'

function TeacherCourses() {
    return (
        <div className="mt-8 bg-white p-8 rounded-xl flex flex-col items-center">
            <div className="commonCoreButton">
                <div className="newButton">
                    <input type="button" value="Ajouter tronc commun"
                        className='cursor-pointer bg-gray-300 mt-4 border-gray-500 rounded-lg h-10 w-60 '
                    />
                </div>

                <div className="addDeleteButton flex justify-between">
                    <div className="add">
                        <input type="button" value="Marquer"
                            className='cursor-pointer bg-gray-300 mt-4 border-gray-500 rounded-lg h-10 w-24 '
                        />
                    </div>

                    <div className="delete">
                        <input type="button" value="Enlever"
                            className='cursor-pointer bg-gray-300 mt-4 border-gray-500 rounded-lg h-10 w-24 '
                        />
                    </div>
                </div>

            </div>

            <div className="courseList w-60 mt-4">
                <div className='courseItem'>
                    <div className="course font-bold text-base">Amelioration des plantes</div>
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
                    <div className="course font-bold text-base">Amelioration des plantes</div>
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
 
   
   
            <div className="Enregistrer flex w-full">
                <input type="button" value="Enregistrer"
                    className='cursor-pointer bg-gray-300 mt-4 border-gray-500 rounded-lg h-10 w-full '
                />
            </div>
        </div>
    )
}

export default TeacherCourses
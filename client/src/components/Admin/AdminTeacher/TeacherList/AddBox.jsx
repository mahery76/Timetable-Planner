import React from 'react'

function AddBox() {
    return (
        <div className='mt-8 flex flex-col justify-center items-center'>
            <input type="text" name="" id=""
                className='bg-white border-2 border-gray-400 rounded-lg h-10 pl-2 w-60'
            />
            <input type="button"
                value="Ajouter enseignant" name="" id=""
                className='cursor-pointer bg-gray-400 mt-4 border-gray-500 rounded-lg h-10 w-60 '
            />
        </div>
    )
}

export default AddBox
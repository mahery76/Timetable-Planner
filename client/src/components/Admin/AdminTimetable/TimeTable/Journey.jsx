import React from 'react'
import Occupation from './Journey/Occupation'

function Journey() {
    return (
        <div className='text-center w-full'>
            <div className='mb-4'>Lundi</div>

            <div className='grid grid-rows-4'>
                <Occupation />
                <Occupation />
                <Occupation />
                <Occupation />
            </div>


        </div>
    )
}

export default Journey
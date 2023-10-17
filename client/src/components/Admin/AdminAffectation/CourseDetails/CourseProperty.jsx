import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CourseProperty({detailTitle, detailValue}) {
    return (
        <div className="bg-white mt-6">
            <div className="text-sky-700 font-bold text-base mb-2 bg-white text-center">{detailTitle}</div>
            <div className="flex justify-between bg-white w-60">
                <div className='truncate'>{detailValue}</div>
                <div>
                    <PencilSquareIcon className='stroke-green-700 w-5 mx-2 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default CourseProperty
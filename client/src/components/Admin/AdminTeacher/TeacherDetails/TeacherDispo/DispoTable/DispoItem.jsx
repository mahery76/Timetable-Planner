import React from 'react'

function DispoItem({jour}) {
    return (
        <div className="lun mr-2">
            <div className='jour_cren'>{jour}</div>

            <div className='slot flex items-center justify-center h-6'>
                <input type="checkbox" />
            </div>
            <div className='slot flex items-center justify-center h-6'>
                <input type="checkbox" />
            </div>
            <div className='slot flex items-center justify-center h-6'>
                <input type="checkbox" />
            </div>
            <div className='slot flex items-center justify-center h-6'>
                <input type="checkbox" />
            </div>
           
        </div>

    )
}

export default DispoItem
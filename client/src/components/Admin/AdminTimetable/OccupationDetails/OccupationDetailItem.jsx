import React from 'react'

function OccupationDetailItem({itemValue}) {
  return (
    <div className='bg-white m-2 text-center p-3 rounded-xl'>
        <div title={itemValue} className='truncate w-36'>{itemValue}</div>
    </div>
  )
}

export default OccupationDetailItem
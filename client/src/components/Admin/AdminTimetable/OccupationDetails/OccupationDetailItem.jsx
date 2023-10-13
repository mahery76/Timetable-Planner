import React from 'react'

function OccupationDetailItem({itemTitle, itemValue}) {
  return (
    <div className='bg-white m-4 p-3 rounded-xl'>
        <div className='text-base font-bold'>{itemTitle}</div>
        <div title={itemValue} className='truncate w-36'>{itemValue}</div>
    </div>
  )
}

export default OccupationDetailItem
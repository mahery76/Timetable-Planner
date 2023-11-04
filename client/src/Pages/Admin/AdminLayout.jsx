import React from 'react'
import { Outlet } from 'react-router-dom'
import { BellIcon, CalendarDaysIcon, CalendarIcon, PencilIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/solid'
import HeaderItem from '../../components/HeaderItem'
import TodayDate from '../../components/TodayDate'
import logoEjeryemploi from '../../Assets/logo.png'
import { FrDate } from '../../Helpers/Calendar'

function AdminLayout() {
  return (
    <div className='max-h-screen'>

      {/* the all header */}
      <div className='

      flex shadow-md top-0 bg-white h-20
      
      '>
        {/* logo and new Date() */}
        <div className='
        w-52 ml-6 flex flex-col items-center justify-between
        md:ml-14 md:flex md:flex-col md:items-center md:justify-between

        '>
          <img src={logoEjeryemploi} className='mt-2 w-36' alt="" />
          <div className='text-xs pb-2 text-sky-600 mt-12 font-bold absolute '>{FrDate(new Date())}</div>
        </div>

        <div className='
        flex items-center w-full justify-center

        '>
          <HeaderItem
            icon={<CalendarDaysIcon className='w-5' />}
            pathlink="/admin"
            itemTitle="Emplois du temps"
          />
          <HeaderItem
            icon={<PencilSquareIcon className='w-5 ' />}
            pathlink="/admin/AdminAffectation"
            itemTitle="Classes"
          />
          {/* <HeaderItem
            icon={<BellIcon className='w-5 ' />}
            pathlink="/admin/AdminNotification"
            itemTitle="Notifications"
          /> */}
          <HeaderItem
            icon={<UserIcon className='w-5 ' />}
            pathlink="/admin/AdminTeacher"
            itemTitle="Enseignants"
          />

        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default AdminLayout


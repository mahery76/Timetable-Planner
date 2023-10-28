import React from 'react'
import { Outlet } from 'react-router-dom'
import { BellIcon, CalendarDaysIcon, CalendarIcon, PencilIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/solid'
import HeaderItem from '../../components/HeaderItem'
import TodayDate from '../../components/TodayDate'

function AdminLayout() {
  return (
    <div className='max-h-screen'>

      <div className='header__nav flex shadow-md top-0 bg-white h-20'>

        <div className='w-52 ml-14 flex flex-col items-center'>
          <div className='font-bold text-2xl pt-4 text-sky-700' >Ejeryemploi</div>
          <div className='text-xs pb-2 text-sky-700'><TodayDate /></div>
        </div>

        <div className='flex items-center w-full justify-center'>
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


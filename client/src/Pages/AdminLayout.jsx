import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BellIcon, CalendarIcon, PencilIcon, UsersIcon } from '@heroicons/react/24/solid'
import HeaderItem from '../components/headerItem'
import TodayDate from '../components/todayDate'

function AdminLayout() {
  return (
    <>

      <div className='header__nav flex shadow-md'>

        <div className='w-52 ml-8 flex flex-col items-center'>
          <div className='font-bold text-2xl pt-4' >Ejeryemploi</div>
          <div className='text-xs pb-2'><TodayDate/></div>
        </div>

        <div className='flex items-center w-full justify-center'>

          <HeaderItem
            icon={<CalendarIcon className='w-5' />}
            pathlink="/admin"
            itemTitle="Emplois du temps"
          />
          <HeaderItem
            icon={<PencilIcon className='w-5 ' />}
            pathlink="/admin/AdminAffectation"
            itemTitle="Matières"
          />
          <HeaderItem
            icon={<BellIcon className='w-5 ' />}
            pathlink="/admin/AdminNotification"
            itemTitle="Notifications"
          />
          <HeaderItem
            icon={<UsersIcon className='w-5 ' />}
            pathlink="/admin/AdminTeacher"
            itemTitle="Enseignants"
          />

        </div>

      </div>

      <Outlet />
    </>
  )
}

export default AdminLayout


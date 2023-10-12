import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CalendarIcon } from '@heroicons/react/24/outline'

function AdminLayout() {
  return (
    <div>
      <div>
        <p>Ejeryemploi</p>
        <p>{new Date().toString()}</p>
      </div>
      <div>
        <NavLink to="/admin"> </NavLink>
      </div>
      <div>
        <NavLink to="/admin/AdminAffectation">
         <CalendarIcon className='w-5 '/>
        </NavLink>
      </div>
      <div>
        <NavLink to="/admin/AdminNotification">Notification</NavLink>
      </div>
      <div>
        <NavLink to="/admin/AdminTeacher">Enseignant</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default AdminLayout


import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            AdminLayout
            <aside className='w-full max-w-[270px] bg-gray-200 hidden lg:block'>Sidebar</aside>

            <main className='children'><Outlet /></main>
        </div>
    )
}

export default AdminLayout

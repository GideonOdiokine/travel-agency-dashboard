import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { MobileSidebar, NavItems } from 'components'

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            <MobileSidebar />
            <aside className='w-full max-w-[270px] bg-gray-200 hidden lg:block'>
                <SidebarComponent enableGestures={false} width={270}>
                    <NavItems />
                </SidebarComponent>
            </aside>

            <main className='children'><Outlet /></main>
        </div>
    )
}

export default AdminLayout

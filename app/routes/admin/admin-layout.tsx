import React from 'react'
import { Outlet, redirect } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { MobileSidebar, NavItems } from 'components'
import { account } from '~/appwrite/client';
import { getExistingUser, storeUserData } from '~/appwrite/auth';


export async function clientLoader() {
    try {
        const user = await account.get();

        if (!user.$id) return redirect('/sign-in');

        const existingUSer = await getExistingUser(user.$id)
        if (existingUSer?.status === 'user') {
            return redirect('/')
        }

        return existingUSer?.$id ? existingUSer : await storeUserData()
    } catch (e) {
        console.log('Error in clientLoader', e)
        return redirect('/sign-in')
    }
}
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

import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import AdminNavbar from '@/app/component/admin/AdminComponent/AdminNavbar'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import Professors from '@/app/component/admin/AdminComponent/Professors'
import SideBar from '@/app/component/admin/AdminComponent/SideBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="All Instrucrors"
                    mainLink="Instrucrorss"
                    link="All Instrucrors"
                />
                <AdminFilter />
                <Professors />
            </div>
        </AdminLayout>
    )
}

export default page
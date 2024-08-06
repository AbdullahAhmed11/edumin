'use client'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import React from 'react'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import Fees from '@/app/component/admin/AdminComponent/Fees'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Fees Collection"
                    mainLink="Fees"
                    link="Fees Collection"
                />
                <AdminFilter />
                <Fees />
            </div>
        </AdminLayout>
    )
}

export default page
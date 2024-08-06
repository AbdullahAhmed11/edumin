import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import AllStudents from '@/app/component/admin/AdminComponent/AllStudents'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="All Student"
                    mainLink="Students"
                    link="All Student"
                />
                <AdminFilter />
                <AllStudents />
            </div>
        </AdminLayout>
    )
}

export default page
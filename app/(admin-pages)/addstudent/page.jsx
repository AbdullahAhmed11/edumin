import React from 'react'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import AddStudentForm from '@/app/component/admin/AdminComponent/AddStudentForm'
const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Student"
                    mainLink="Students"
                    link="Add Studen"
                />
                <AddStudentForm />
            </div>
        </AdminLayout>
    )
}

export default page
'use client'
import AddCourseForm from '@/app/component/admin/AdminComponent/AddCourseForm'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Course"
                    mainLink="Courses"
                    link="Add Course"
                />
                <AddCourseForm />
            </div>
        </AdminLayout>
    )
}

export default page
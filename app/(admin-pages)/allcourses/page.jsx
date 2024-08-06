'use client'
import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import CourseCard from '@/app/component/admin/AdminComponent/CourseCard'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="All Courses"
                    mainLink="Courses"
                    link="All Courses"
                />
                <AdminFilter />
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[100px]">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>

                </div>
            </div>
        </AdminLayout>
    )
}

export default page
'use client'
import AdminCard from '@/app/component/admin/AdminComponent/AdminCard'
import AdminNavbar from '@/app/component/admin/AdminComponent/AdminNavbar'
import Fees from '@/app/component/admin/AdminComponent/Fees'
import SideBar from '@/app/component/admin/AdminComponent/SideBar'
import StudentComplain from '@/app/component/admin/AdminComponent/StudentComplain'
import StudentFeedback from '@/app/component/admin/AdminComponent/StudentFeedback'
import StudentList from '@/app/component/admin/AdminComponent/StudentList'
import CourseCard from '@/app/component/admin/AdminComponent/CourseCard'
import React, { useState } from 'react'

const page = () => {
    const [openSide, setOpenSide] = useState(true)
    const handleOpenSide = () => {
        setOpenSide(!openSide)
        console.log(openSide)
    }
    return (
        <div>
            <AdminNavbar handleOpenSide={handleOpenSide} />
            <div className='w-full  bg-primaryBg h-screen flex gap-3'>
                <SideBar openSide={openSide} />
                <div className='w-full'>
                    <AdminCard />
                    <StudentComplain />
                    <StudentFeedback />
                    <Fees />
                    <StudentList />
                    <div className='grid grid-cols-3 gap-2'>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

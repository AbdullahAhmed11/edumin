'use client'
import InstructorLayout from '@/app/component/instructor/InstructorLayout'
import React from 'react'
import InstructorLinebar from '@/app/component/instructor/InstructorLinebar'
import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import InstFeesCollection from '@/app/component/instructor/InstFeesCollection'
const page = () => {
    return (
        <InstructorLayout>
            <div className='flex flex-col gap-5'>
                <InstructorLinebar
                    title="Fees Collection"
                    mainLink="Fees"
                    link="Fees Collection"
                />
                <AdminFilter />
                <InstFeesCollection />
            </div>
        </InstructorLayout>
    )
}

export default page
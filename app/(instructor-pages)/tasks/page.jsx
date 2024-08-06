import InstructorLayout from '@/app/component/instructor/InstructorLayout'
import React from 'react'
import InstructorLinebar from '@/app/component/instructor/InstructorLinebar'
import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import AllStudentsTable from '@/app/component/admin/AdminComponent/AllStudentsTable'
const page = () => {
    return (
        <InstructorLayout>
            <div className='flex flex-col gap-5'>
                <InstructorLinebar
                    title="All Taskes"
                    mainLink="Tasks"
                    link="All Taskes"
                />
                <AdminFilter />
                <div className='w-full bg-white rounded-md shadow-md'>
                    <AllStudentsTable />
                </div>
            </div>
        </InstructorLayout>
    )
}

export default page

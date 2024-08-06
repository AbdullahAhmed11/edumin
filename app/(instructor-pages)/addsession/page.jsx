import AddHolidayForm from '@/app/component/admin/AdminComponent/AddHolidayForm'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'
import InstructorLayout from '@/app/component/instructor/InstructorLayout'
const page = () => {
    return (
        <InstructorLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Holiday"
                    mainLink="Holiday"
                    link="Add Holiday"
                />
                <AddHolidayForm />
            </div>
        </InstructorLayout>
    )
}

export default page
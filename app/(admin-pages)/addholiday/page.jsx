import AddHolidayForm from '@/app/component/admin/AdminComponent/AddHolidayForm'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Holiday"
                    mainLink="Holiday"
                    link="Add Holiday"
                />
                <AddHolidayForm />
            </div>
        </AdminLayout>
    )
}

export default page
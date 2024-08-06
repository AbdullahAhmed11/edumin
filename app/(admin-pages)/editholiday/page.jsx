import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import EditHolidayForm from '@/app/component/admin/AdminComponent/EditHolidayForm'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Edit Holiday"
                    mainLink="Holiday"
                    link="Edit Holiday"
                />
                <EditHolidayForm />
            </div>
        </AdminLayout>
    )
}

export default page
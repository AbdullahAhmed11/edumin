import AddFeesForm from '@/app/component/admin/AdminComponent/AddFeesForm'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Fees"
                    mainLink="Fees"
                    link="Add Fees"
                />
                <AddFeesForm />
            </div>
        </AdminLayout>
    )
}

export default page
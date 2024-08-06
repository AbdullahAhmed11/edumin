import AddProfessorForm from '@/app/component/admin/AdminComponent/AddProfessorForm'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Add Professor"
                    mainLink="Add Professor"
                    link="Professors"
                />
                <AddProfessorForm />
            </div>
        </AdminLayout>
    )
}

export default page
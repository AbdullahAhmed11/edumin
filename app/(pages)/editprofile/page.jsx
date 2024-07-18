import React from 'react'
import Navbar from '@/app/component/student/Navbar/Navbar'
import { Divider } from '@mui/material'
import EditProfile from '@/app/component/student/StudentComponent/EditProfile'
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='p-4'>
                <div className='w-full bg-white border rounded-md mt-5 flex flex-col gap-4'>
                    <h2 className='p-4 text-primary text-[1.4rem] font-bold'>Basic Info</h2>
                    <Divider />
                    <EditProfile />
                </div>
            </div>
        </div>
    )
}

export default page
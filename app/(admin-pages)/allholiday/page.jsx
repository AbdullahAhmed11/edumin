'use client'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import React from 'react'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import AdminFilter from '@/app/component/admin/AdminComponent/AdminFilter'
import { Divider } from '@mui/material'
import Link from 'next/link'
import HolidayListTable from '@/app/component/admin/AdminComponent/HolidayListTable'
const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="All Holiday"
                    mainLink="Holiday"
                    link="All Holiday"
                />
                <AdminFilter />
                <div className='flex flex-col  w-full  bg-white rounded-md shadow-md'>
                    <div className='flex items-center p-4 justify-between'>
                        <h2 className=' text-[1.25rem] font-medium p-6 capitalize'>Holiday List                        </h2>
                        <Link href="/">
                            <button className='w-[120px] h-[40px] text-white text-[1rem] rounded-md bg-primary'>
                                + Add New
                            </button>
                        </Link>
                    </div>
                    <Divider />
                    <div>
                        <HolidayListTable />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default page
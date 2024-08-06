import React from 'react'
import Link from 'next/link'
import { Divider } from '@mui/material'
import AllStudentsTable from './AllStudentsTable'
const AllStudents = () => {
    return (
        <div className='flex flex-col  w-full  bg-white rounded-md shadow-md'>
            <div className='flex items-center p-4 justify-between'>
                <h2 className=' text-[1.25rem] font-medium p-6 capitalize'>All Students </h2>
                <Link href="/">
                    <button className='w-[120px] h-[40px] text-white text-[1rem] rounded-md bg-primary'>
                        + Add New
                    </button>
                </Link>
            </div>
            <Divider />
            <div>
                <AllStudentsTable />
            </div>
        </div>
    )
}

export default AllStudents
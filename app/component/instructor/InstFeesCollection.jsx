'use client'

import React from 'react'
import InstructorFees from '../admin/AdminComponent/InstructorFees'

const InstFeesCollection = () => {
    return (
        <div className='p-2'>
            <div className='bg-white flex flex-col w-full  rounded-md '>
                <h2 className='text-primary text-[1rem] font-medium p-6'>Fees Collection
                </h2>
                <div>
                    <InstructorFees />
                </div>
            </div>
        </div>)
}

export default InstFeesCollection
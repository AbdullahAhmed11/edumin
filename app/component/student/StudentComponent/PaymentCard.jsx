import React from 'react'
import Divider from '@mui/material/Divider';

const PaymentCard = () => {
    return (
        <div className='w-full bg-white border h-[450px]  flex flex-col'>
            <h2 className='text-lableColor font-medium text-[1.25rem] p-4 mb-5'>Your Payment</h2>
            <Divider />
            <p className='p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className='p-4 flex flex-col'>
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Course Fees</h2>
                    <p>5000</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Faces</h2>
                    <p>1500</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Amount ramaining</h2>
                    <p>2500</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Payment deadline</h2>
                    <p>2-Sep-2024</p>
                </div>
            </div>
            <Divider />
            <div className=' flex items-center gap-4 h-full'>
                <div className='w-1/3 '>
                    <div className='flex items-center flex-col'>
                        <h2 className='font-bold text-[1.25rem] text-labelColor'>150</h2>
                        <h2>Projects</h2>
                    </div>
                </div>
                <Divider orientation="vertical" />
                <div className='w-1/3 '>
                    <div className='flex items-center flex-col'>
                        <h2 className='font-bold text-[1.25rem] text-labelColor'>150</h2>
                        <h2>Uploads</h2>
                    </div>
                </div>
                <Divider orientation="vertical" />
                <div className='w-1/3 '>
                    <div className='flex items-center justify-center flex-col'>
                        <h2 className='font-bold text-[1.25rem] text-labelColor'>150</h2>
                        <h2>Tasks</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentCard
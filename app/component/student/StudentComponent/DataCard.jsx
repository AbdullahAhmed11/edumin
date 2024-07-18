import React from 'react'
import Divider from '@mui/material/Divider';

const DataCard = () => {
    return (
        <div className='w-full '>
            <div className='relative'>
                <img
                    src="/images/img1.jpg"
                    objectFit="cover"
                    className='w-full h-[170px]'
                    alt="Background Image"
                />
                <div className="absolute inset-0 bg-primary opacity-80"></div>
                <div className='absolute flex flex-col items-center top-[10px] left-[35%]'>
                    <div className=' flex items-center flex-col justiy-center rounded-full border  w-[90px] h-[90px]'>
                        <img src="/images/profile.png" />
                    </div>
                    <h2 className='text-white  text-[1rem] font-bold'>Deangelo Sena</h2>
                </div>
            </div>
            <div className='w-full flex flex-col  bg-white p-4'>
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Course Fees</h2>
                    <p>5000</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Course Fees</h2>
                    <p>5000</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Course Fees</h2>
                    <p>5000</p>
                </div>
                <Divider />
                <div className="flex items-center mb-4 justify-between">
                    <h2 className='font-bold text-labelColor text-[1rem]'>Course Fees</h2>
                    <p>5000</p>
                </div>
            </div>
            <div>
                <button className='text-[0.9375rem] rounded-md p-2 bg-primary text-white w-full hover:bg-primaryHover '>
                    Generate Your Certificate
                </button>
            </div>
        </div>
    )
}

export default DataCard
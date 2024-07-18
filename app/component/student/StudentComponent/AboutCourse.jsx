import { Divider } from '@mui/material'
import React from 'react'

const AboutCourse = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col mt-3 gap-3'>
                <h2 className='text-primary text-[1.5rem] font-medium'>Our Courses </h2>
                <div className='flex gap-3 items-center'>
                    <div className="w-[120px] h-[40px] rounded-full text-textColor cursor-pointer border flex items-center justify-center hover:bg-textColor hover:text-white">
                        <p className=' font-medium text-[1rem] '>Computer</p>
                    </div>
                    <div className="w-[120px] h-[40px] rounded-full text-textColor cursor-pointer border flex items-center justify-center hover:bg-textColor hover:text-white">
                        <p className=' font-medium text-[1rem] '>Computer</p>
                    </div>
                    <div className="w-[120px] h-[40px] rounded-full text-textColor cursor-pointer border flex items-center justify-center hover:bg-textColor hover:text-white">
                        <p className=' font-medium text-[1rem] '>Computer</p>
                    </div>
                    <div className="w-[120px] h-[40px] rounded-full text-textColor cursor-pointer border flex items-center justify-center hover:bg-textColor hover:text-white">
                        <p className=' font-medium text-[1rem] '>Computer</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-3 gap-3'>
                <h2 className='text-primary text-[1.5rem] font-medium'>Language</h2>
                <div className='flex gap-3'>
                    <div className='bg-primaryBg text-primary w-[80px] h-[30px] flex items-center justify-center  rounded-md'>
                        <span className='text-[.7rem] font-bold'>English</span>
                    </div>
                    <div className='bg-primaryBg text-primary w-[80px] h-[30px] flex items-center justify-center  rounded-md'>
                        <span className='text-[.7rem] font-bold'>English</span>
                    </div>
                    <div className='bg-primaryBg text-primary w-[80px] h-[30px] flex items-center justify-center  rounded-md'>
                        <span className='text-[.7rem] font-bold'>English</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-3 gap-3'>
                <h2 className='text-primary text-[1.5rem] font-medium'>Courses Information            </h2>
                <div className='flex gap-3 flex-col'>
                    <div className='flex flex-col gap-3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Divider />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Divider />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Divider />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Divider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCourse
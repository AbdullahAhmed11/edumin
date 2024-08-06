import InstructorLayout from '@/app/component/instructor/InstructorLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import Image from 'next/image'
import React from 'react'
import { Divider } from '@mui/material'
const page = () => {
    return (
        <InstructorLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="About Courses"
                    mainLink="Courses"
                    link="About Courses"
                />
                <div className="flex gap-3 flex-col md:flex-row w-full">
                    <div className='flex w-full md:w-1/3 flex-col gap-3'>
                        <div className="w-full border flex flex-col bg-white">
                            <Image
                                style={{
                                    width: "100%"
                                }}
                                width={500}
                                height={300}
                                src="/images/pic1.jpg"
                            />
                            <h2 className='p-4 font-medium text-[1.125rem]'>Why is Early Education Essential                            </h2>
                        </div>
                        <div className="w-full border  bg-white flex flex-col">
                            <h2 className='text-lableColor font-medium text-[1.25rem] p-4 mb-5'>About Course
                            </h2>
                            <Divider />
                            <p className='p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className='p-4 flex flex-col'>
                                <div className="flex items-center mb-4 justify-between">
                                    <h2 className='font-bold text-labelColor text-[1rem]'>Duration</h2>
                                    <p>5000</p>
                                </div>
                                <Divider />
                                <div className="flex items-center mb-4 justify-between">
                                    <h2 className='font-bold text-labelColor text-[1rem]'>Professor                                    </h2>
                                    <p>1500</p>
                                </div>
                                <Divider />
                                <div className="flex items-center mb-4 justify-between">
                                    <h2 className='font-bold text-labelColor text-[1rem]'>Price
                                    </h2>
                                    <p>2500</p>
                                </div>
                                <Divider />
                                <div className="flex items-center mb-4 justify-between">
                                    <h2 className='font-bold text-labelColor text-[1rem]'>Date
                                    </h2>
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
                    </div>
                    <div className='md:w-2/3 w-full bg-white p-5'>
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
                </div>
            </div>
        </InstructorLayout>
    )
}

export default page
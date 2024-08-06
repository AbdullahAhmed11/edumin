'use client'
import React from 'react'
import { MdOutlineGroups } from "react-icons/md";
import LinearProgress from '@mui/material/LinearProgress';

const AdminCard = () => {
    const [progress, setProgress] = React.useState(40);


    return (
        <div className='p-2 mt-5 w-full grid gap-3 grid-cols-1 md:grid-cols-4'>
            <div className='w-full gap-2 bg-primary flex items-center justify-center rounded-md  h-[200px] border border-2'>
                <div className='flex bg-primaryBg items-center justify-center w-[50px] h-[50px] rounded-full'>
                    <MdOutlineGroups />
                </div>
                <div className='flex flex-col  gap-1 text-white'>
                    <h2 className='font-medium'>Total Students</h2>
                    <p className='font-medium text-[20px]'>3280</p>
                    <div className='w-full'>
                        <LinearProgress
                            sx={{
                                // backgroundColor: '#00263f',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'white',
                                }
                            }}
                            variant="determinate"
                            value={progress} />
                    </div>
                    <p className='text-[10px]'>80% increase in 20 days</p>
                </div>
            </div>
            <div className='w-full gap-2 bg-[#ffaa16] flex items-center justify-center rounded-md  h-[200px] border border-2'>
                <div className='flex bg-primaryBg items-center justify-center w-[50px] h-[50px] rounded-full'>
                    <MdOutlineGroups />
                </div>
                <div className='flex flex-col  gap-1 text-white'>
                    <h2 className='font-medium'>Total Students</h2>
                    <p className='font-medium text-[20px]'>3280</p>
                    <div className='w-full'>
                        <LinearProgress
                            sx={{
                                // backgroundColor: '#00263f',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'white',
                                }
                            }}
                            variant="determinate"
                            value={progress} />
                    </div>
                    <p className='text-[10px]'>80% increase in 20 days</p>
                </div>
            </div>
            <div className='w-full gap-2 bg-[#673bb7] flex items-center justify-center rounded-md  h-[200px] border border-2'>
                <div className='flex bg-primaryBg items-center justify-center w-[50px] h-[50px] rounded-full'>
                    <MdOutlineGroups />
                </div>
                <div className='flex flex-col  gap-1 text-white'>
                    <h2 className='font-medium'>Total Students</h2>
                    <p className='font-medium text-[20px]'>3280</p>
                    <div className='w-full'>
                        <LinearProgress
                            sx={{
                                // backgroundColor: '#00263f',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'white',
                                }
                            }}
                            variant="determinate"
                            value={progress} />
                    </div>
                    <p className='text-[10px]'>80% increase in 20 days</p>
                </div>
            </div>
            <div className='w-full gap-2 bg-[#ff1616] flex items-center justify-center rounded-md  h-[200px] border border-2'>
                <div className='flex bg-primaryBg items-center justify-center w-[50px] h-[50px] rounded-full'>
                    <MdOutlineGroups />
                </div>
                <div className='flex flex-col  gap-1 text-white'>
                    <h2 className='font-medium'>Total Students</h2>
                    <p className='font-medium text-[20px]'>3280</p>
                    <div className='w-full'>
                        <LinearProgress
                            sx={{
                                // backgroundColor: '#00263f',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'white',
                                }
                            }}
                            variant="determinate"
                            value={progress} />
                    </div>
                    <p className='text-[10px]'>80% increase in 20 days</p>
                </div>
            </div>
        </div>
    )
}

export default AdminCard
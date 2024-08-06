import { Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const CourseCard = ({ linkTo }) => {
    return (
        <div className='p-2 w-full '>
            <div className='w-full flex flex-col  border border-2 md:h-[400px]'>
                <Image
                    width={500}
                    height={150}
                    alt="course"
                    src="/images/pic1.jpg"
                />
                <div className='flex flex-col gap-2 p-4 bg-white w-full h-full'>
                    <p className='font-medium text-[1rem]'>When Is the Best Time to Take an Education Course?</p>
                    <div className='flex items-center justify-between'>
                        <p>April 23</p>
                        <p>230</p>
                    </div>
                    <Divider />
                    <div className='flex items-center justify-between'>
                        <p>Duration:</p>
                        <p className='font-medium'>12 Months</p>
                    </div>
                    <Divider />
                    <div className='flex items-center justify-between'>
                        <p>Professor:</p>
                        <p className='font-medium'>Jack Ronan
                        </p>
                    </div>
                    <Divider />
                    <div className='flex items-center justify-between'>
                        <p>Student:</p>
                        <p className='font-medium'>120
                        </p>
                    </div>
                    <button
                        href={linkTo}
                        className=' bg-primary w-[100px] h-[35px] rounded-md text-white text-[0.8rem]'>Read More
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CourseCard
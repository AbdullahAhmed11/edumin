import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const InstructorLinebar = ({ title, mainLink, link }) => {
    return (
        <div className='w-full p-4 h-[60px] bg-white dark:bg-darkBg  rounded-md flex items-center justify-between'>
            <div>
                <h2 className='text-[1.5rem] text-primary dark:text-white font-medium'>{title}</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='text-secondryColor dark:text-white'>{mainLink}</p>
                <IoIosArrowForward className='text-secondryColor' />
                <p className='text-primary dark:text-white'>{link}</p>
            </div>
        </div>
    )
}

export default InstructorLinebar
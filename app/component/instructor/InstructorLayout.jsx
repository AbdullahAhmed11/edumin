'use client'
import React, { useState } from 'react'
import InstructorNav from './InstructorNav'
import InstructorSide from './InstructorSide'
const InstructorLayout = ({ children }) => {

    const [openSide, setOpenSide] = useState(true)
    const handleOpenSide = () => {
        setOpenSide(!openSide)
        console.log(openSide)
    }
    return (
        <div className="flex  h-screen">
            <InstructorSide openSide={openSide} />
            <div className="flex-1 flex flex-col">
                <InstructorNav handleOpenSide={handleOpenSide} />
                <main className="flex-1 p-4  bg-primaryBg dark:bg-[#17171e] overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default InstructorLayout
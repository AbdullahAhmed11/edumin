'use client '
import React from 'react'
import Link from 'next/link'
import ProfessorCard from './ProfessorCard'

const Professors = () => {
    return (
        <div className='flex gap-5 flex-col'>
            <div className='w-full p-4 h-[6 0px] rounded-md bg-white flex items-center justify-between'>
                <h2 className='text-[1.5rem] text-primary font-medium'>All Instrucrors</h2>
                <Link href="/">
                    <button className='w-[120px] h-[40px] text-white text-[1rem] rounded-md bg-primary'>
                        + Add New
                    </button>
                </Link>
            </div>
            <ProfessorCard />
        </div>
    )
}

export default Professors
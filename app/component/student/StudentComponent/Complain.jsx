import React from 'react'

const Complain = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-primary text-[2rem] font-bold '>Student Complaint Form </h2>
            <p className='text-primary text-[1rem] fonr-medium'>Personal Information</p>
            <div className='flex flex-col w-full justify-between gap-2'>
                <div className='w-1/2'>
                    <label className='text-labelColor'>Your Full Legal Name (As Enrolled)</label>
                </div>
                <div className='w-full flex items-center gap-3'>
                    <input className='w-1/2 h-[20px] p-3 border rounded-md' placeholder='First' />
                    <input className='w-1/2 h-[20px] p-3 border rounded-md' placeholder='Last' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Major</label>
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='Major' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Expected Year of Graduation</label>
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='' />
            </div>
            <div className='w-full flex flex-col gap-3'>
                <label className='text-labelColor'>Adress</label>
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='Street Adresses' />
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='Street Adresses Line 2' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Email</label>
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='Email' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor' >Phone</label>
                <input className='w-full h-[20px] p-3 border rounded-md' placeholder='Phone' />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Name(s) of the person(s) involved</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Please describe your complaint in detail. Include the names of persons, locations, and dates involved. If this complaint is against specific person(s), please list their names and titles</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>What attempts have you made to resolve this complaint up to now? Please state who you contacted and what transpired</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Why do you think the complaint was not able to be resolved in your prior attempts?</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>What resolution would you consider fair? What resolution do you seek?</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-labelColor'>Any other information you want to provide?</label>
                <textarea className='w-full h-[150px]  p-3 border rounded-md' />
            </div>

        </div>
    )
}

export default Complain
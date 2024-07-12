'use client'
import React, { useState } from 'react'
import { Input } from '@mui/material';


const page = () => {

    return (
        <div className='w-full h-[100vh] bg-primaryBg flex items-center justify-center top-[30px]'>
            <div className='w-[400px] rounded-md   bg-white border flex   flex-col p-4'>
                <h2 className='mt-[100px] text-[20px] font-bold text-center'>Sign in your account</h2>
                <form className="flex flex-col gap-3">
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-[0.875rem] text-labelColor'>Username</label>
                        <Input
                            className='w-full h-[30px] p-5 border rounded-md'
                            placeholder='username'
                            type='text'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-[0.875rem] text-labelColor'>password</label>
                        <Input
                            className='w-full h-[30px] p-5 border rounded-md'
                            placeholder='password'
                            type='password'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm'>Remmember my preference</p>
                        <a href="#" className='text-sm text-primary'>Forget Password?</a>
                    </div>
                    <div>
                        <button className='text-[0.9375rem] rounded-md p-2 bg-primary text-white w-full hover:bg-primaryHover '>
                            Sign Me In
                        </button>
                    </div>
                    <div className='mb-10'>
                        <p>Don't have an account? <a href="#" className='text-primary'>Sign Up</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default page
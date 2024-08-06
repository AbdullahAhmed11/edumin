'use client'
import { Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const StudentFeedback = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="p-2">
            <div className="w-full flex flex-col  h-[500px] bg-white rounded-md border">
                <h2 className=' text-[1rem] font-medium p-6'>Student Feedback
                </h2>
                <Divider />
                <div der />
                <div className="flex-grow overflow-y-auto">
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-6'>
                        <div className='flex items-center gap-2'>
                            <Image
                                width={50}
                                height={50}
                                className='rounded-md'
                                alt="person"
                                src="/images/pic7.jpg"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[0.8rem] font-medium'>Alfie Mason<span className='text-secondryColor'> 29 July 2020</span></h2>
                                <p className='text-secondryColor'>I shared this on my fb wall a few months back..</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='text-white w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-primary rounded-md'>
                                        Reply
                                    </button>
                                    <button className='text-[#ff1616] border border-[#ff1616] w-[50px] h-[20px] flex items-center justify-center text-[0.6rem] bg-white rounded-md'>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}
                                className='w-[40px] h-[40px] rounded-md bg-primaryBg flex items-center justify-center'
                            >
                                <BsThreeDots />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete    </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentFeedback
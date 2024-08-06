'use client'
import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { Divider } from '@mui/material';

const ProfessorCard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className="h-[500px] p-4 rounded-md bg-white flex flex-col">
                <div className='flex items-center justify-between'>
                    <div></div>
                    <div>
                        <button
                            onClick={handleClick}
                            className='w-[40px] h-[40px] rounded-md  flex items-center justify-center'
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
                <div className='flex items-center flex-col gap-2 justify-center'>
                    <Image
                        src="/images/pic7.jpg"
                        width={100}
                        height={100}
                        alt="person"
                        className='rounded-full'
                    />
                    <h2 className='text-[1.5rem] font-bold'>Alexander</h2>
                    <p className='text-secondryColor text-[0.8rem]'>M.COM., P.H.D.</p>
                </div>
                <div className='flex flex-col gap-3 mt-6'>
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Gender:</p>
                        <p className='font-medium'>Male</p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Phone No:</p>
                        <p className='font-medium'>+01 123 456 7890
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Email:</p>
                        <p className='font-medium'>info@example.com
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Address:</p>
                        <p className='font-medium'>#8901 Marmora Road                        </p>
                    </div>

                </div>
                <div className='flex items-center justify-center mt-9'>
                    <button className='w-[100px] h-[30px] rounded-full hover:bg-primaryHover hover:text-white text-primary border border-primary text-[0.8rem] bg-transparent'>Read More</button>
                </div>
            </div>
            <div className="h-[500px] p-4 rounded-md bg-white flex flex-col">
                <div className='flex items-center justify-between'>
                    <div></div>
                    <div>
                        <button
                            onClick={handleClick}
                            className='w-[40px] h-[40px] rounded-md  flex items-center justify-center'
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
                <div className='flex items-center flex-col gap-2 justify-center'>
                    <Image
                        src="/images/pic7.jpg"
                        width={100}
                        height={100}
                        alt="person"
                        className='rounded-full'
                    />
                    <h2 className='text-[1.5rem] font-bold'>Alexander</h2>
                    <p className='text-secondryColor text-[0.8rem]'>M.COM., P.H.D.</p>
                </div>
                <div className='flex flex-col gap-3 mt-6'>
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Gender:</p>
                        <p className='font-medium'>Male</p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Phone No:</p>
                        <p className='font-medium'>+01 123 456 7890
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Email:</p>
                        <p className='font-medium'>info@example.com
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Address:</p>
                        <p className='font-medium'>#8901 Marmora Road                        </p>
                    </div>

                </div>
                <div className='flex items-center justify-center mt-9'>
                    <button className='w-[100px] h-[30px] rounded-full hover:bg-primaryHover hover:text-white text-primary border border-primary text-[0.8rem] bg-transparent'>Read More</button>
                </div>
            </div>
            <div className="h-[500px] p-4 rounded-md bg-white flex flex-col">
                <div className='flex items-center justify-between'>
                    <div></div>
                    <div>
                        <button
                            onClick={handleClick}
                            className='w-[40px] h-[40px] rounded-md  flex items-center justify-center'
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
                <div className='flex items-center flex-col gap-2 justify-center'>
                    <Image
                        src="/images/pic7.jpg"
                        width={100}
                        height={100}
                        alt="person"
                        className='rounded-full'
                    />
                    <h2 className='text-[1.5rem] font-bold'>Alexander</h2>
                    <p className='text-secondryColor text-[0.8rem]'>M.COM., P.H.D.</p>
                </div>
                <div className='flex flex-col gap-3 mt-6'>
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Gender:</p>
                        <p className='font-medium'>Male</p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Phone No:</p>
                        <p className='font-medium'>+01 123 456 7890
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Email:</p>
                        <p className='font-medium'>info@example.com
                        </p>
                    </div>
                    <Divider />
                    <div className='flex  items-center justify-between'>
                        <p className='text-secondryColor'>Address:</p>
                        <p className='font-medium'>#8901 Marmora Road                        </p>
                    </div>

                </div>
                <div className='flex items-center justify-center mt-9'>
                    <button className='w-[100px] h-[30px] rounded-full hover:bg-primaryHover hover:text-white text-primary border border-primary text-[0.8rem] bg-transparent'>Read More</button>
                </div>
            </div>

        </div>
    )
}

export default ProfessorCard
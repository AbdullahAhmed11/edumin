'use client'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from '../ThemeToggle';

const InstructorNav = ({ handleOpenSide }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className=" ">
            <nav className='w-full p-4 bg-white dark:bg-darkBg flex items-center justify-between'>

                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[450px] p-4 h-[50px] bg-primaryBg rounded-full pl-12"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoIosSearch className="text-gray-400 w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className='block md:hidden cursor-pointer'>
                    <GiHamburgerMenu onClick={handleOpenSide} className='w-10 h-10 text-primary' />
                </div>
                <div className='flex items-center gap-5 '>
                    <div>
                        <ThemeToggle />
                    </div>
                    <div className='relative'>
                        <BsChatSquareText className=" w-[16px] h-[16px] dark:text-white" />
                        <div className='absolute bg-primary dark:bg-white w-[20px] top-[-15px] left-[10px] h-[20px] rounded-full flex items-center justify-center text-white dark:text-[#000]'>
                            <p className='text-[9px]'>100</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <IoMdNotificationsOutline className=" w-[24px] h-[24px] dark:text-white" />
                        <div className='absolute bg-primary w-[7px] top-[-1px] left-[15px] h-[7px] rounded-full flex items-center justify-center text-white'>
                        </div>
                    </div>
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    // sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Link href="/editprofile">
                                <MenuItem onClick={handleClose} >
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Edit Profile
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default InstructorNav
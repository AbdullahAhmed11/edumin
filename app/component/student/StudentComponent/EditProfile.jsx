'use client'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, Input, TextareaAutosize } from '@mui/material';
import { FormLabel } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';


const EditProfile = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='w-full flex flex-col  gap-3 p-4'>
            <FormControl>
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>First Name</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Last Name</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                </div>
            </FormControl>
            <FormControl>
                <div className='flex items-center w-full gap-3'>

                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Email</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Registration Date</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='date' />
                    </div>
                </div>
            </FormControl>
            <FormControl >
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Role N0.</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='date' />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Class</FormLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            fullWidth
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </div>
            </FormControl>
            <FormControl >
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Gender</FormLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            fullWidth
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Mobile Number</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='number' />
                    </div>
                </div>
            </FormControl>
            <FormControl >
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Parents Name</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='text' />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Parents Mobile Number</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='number' />
                    </div>
                </div>
            </FormControl>
            <FormControl >
                <div className='flex items-center w-full gap-3'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Date of Birth</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='date' />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <FormLabel className='text-labelColor'>Blood Group</FormLabel>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='text' />
                    </div>
                </div>
            </FormControl>
            <FormControl>
                <div className='w-full flex flex-col gap-2'>
                    <FormLabel className='text-labelColor'>Address</FormLabel>
                    <TextareaAutosize style={{
                        height: "200px",
                        border: "3px solid #f5f5f5",
                        borderRadius: "3px"
                    }} />
                </div>
            </FormControl>
            <FormControl>
                <div className='w-full flex flex-col gap-2'>
                    <div className='w-1/2 '>
                        <TextField fullWidth id="outlined-basic" variant="outlined" type='file' />
                    </div>
                </div>
            </FormControl>
            <div className='flex gap-3'>
                <button className='w-[100px] h-[40px] font-bold rounded-md bg-primary text-white flex items-center justify-center'>
                    Submit
                </button>
                <button className='w-[100px] h-[40px] font-bold rounded-md bg-[#dadada] text-labelColor flex items-center justify-center'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditProfile
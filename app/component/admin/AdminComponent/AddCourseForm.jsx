'use client'
import { Divider } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, Input, TextareaAutosize, Select, MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';

const AddCourseForm = () => {
    const [age, setAge] = React.useState('Gender');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='flex flex-col w-full  bg-white'>
            <h2 className='text-[1.1rem] font-medium p-4'>Basic Info</h2>
            <Divider />
            <div className='w-full flex flex-col p-4 gap-4'>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Course Name</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Course Name"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Course Code</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Course Code"
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full '>
                    <div className='flex flex-col w-full'>
                        <FormLabel className='text-labelColor'>Course Details</FormLabel>
                        <TextareaAutosize
                            placeholder='Course Details'
                            style={{
                                height: "200px",
                                border: "3px solid #f5f5f5",
                                borderRadius: "3px"
                            }} />
                    </div>

                </FormControl>

                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Start Form                        </FormLabel>
                        <TextField
                            size="small"
                            type="date"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Start Form"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Course Duration</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="text"
                            placeholder='Course Duration'
                        />
                    </div>
                </FormControl>

                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Course Price</FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Course Price"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Professor Name
                        </FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Professor Name"
                        />
                    </div>
                </FormControl>

                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Maximum Students</FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Maximum Students"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Maximum Students
                        </FormLabel>
                        <TextField
                            size="small"
                            type="number"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Maximum Students"
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full'>
                    <TextField
                        className='w-1/2'
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        type='file'
                    />
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
        </div>)
}

export default AddCourseForm
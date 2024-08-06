'use client'
import { Divider } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, Input, TextareaAutosize, Select, MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';

const EditHolidayForm = () => {
    const [age, setAge] = React.useState('Gender');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='flex flex-col w-full  bg-white'>
            <h2 className='text-[1.1rem] font-medium p-4'>Add Holiday            </h2>
            <Divider />
            <div className='w-full flex flex-col p-4 gap-4'>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Title</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Title"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Holiday Types </FormLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            fullWidth
                            size="small"
                            inputProps={{ 'aria-label': 'Without label' }}
                        >

                            <MenuItem value={10}>Gender</MenuItem>
                            <MenuItem value={20}>Male</MenuItem>
                            <MenuItem value={30}>Female</MenuItem>
                        </Select>
                    </div>
                </FormControl>

                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Holiday Start Date
                        </FormLabel>
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
                        <FormLabel className='text-labelColor'>Holiday End Date
                        </FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="date"
                            placeholder='Course Duration'
                        />
                    </div>
                </FormControl>


                <FormControl className='w-full '>
                    <div className='flex flex-col w-full'>
                        <FormLabel className='text-labelColor'>Holiday Details</FormLabel>
                        <TextareaAutosize
                            placeholder='Holiday Details'
                            style={{
                                height: "200px",
                                border: "3px solid #f5f5f5",
                                borderRadius: "3px"
                            }} />
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
        </div>)
}

export default EditHolidayForm
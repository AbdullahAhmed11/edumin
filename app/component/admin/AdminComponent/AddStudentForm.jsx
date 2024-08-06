'use client'
import { Divider } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, Input, TextareaAutosize, Select, MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';


const AddStudentForm = () => {
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
                        <FormLabel className='text-labelColor'>First Name</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Last Name</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Enter Last Name"
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Email Here</FormLabel>
                        <TextField
                            size="small"
                            type="Email"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Email here"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Registration Date</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="date"
                            placeholder='Joining Date'
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Roll No.                        </FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Roll No."
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Class
                        </FormLabel>
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
                        <FormLabel className='text-labelColor'>Gender
                        </FormLabel>
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
                    <div>
                        <FormLabel className='text-labelColor'>Mobile Number                        </FormLabel>
                        <TextField
                            size="small"
                            type="number"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Mobile Number"
                        />
                    </div>

                </FormControl>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Parents Name                     </FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Parents Name"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Parents Mobile Number
                        </FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="number"
                            placeholder='Parents Mobile Number'
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Date of Birth
                        </FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="date"
                            placeholder='Date of Birth
'
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Blood Group</FormLabel>
                        <TextField
                            size="small"
                            type="text"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Blood Group"
                        />
                    </div>
                </FormControl>
                <FormControl className='w-full  gap-3'>
                    <div className='flex flex-col '>
                        <FormLabel className='text-labelColor'>Address</FormLabel>
                        <TextareaAutosize
                            minRows={6}
                            placeholder='Address'
                            variant="outlined"
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
        </div>
    )
}

export default AddStudentForm
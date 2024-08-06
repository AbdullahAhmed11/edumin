'use client'
import { Divider } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormControl, Input, TextareaAutosize, Select, MenuItem } from '@mui/material';
import { FormLabel } from '@mui/material';

const AddFeesForm = () => {
    const [age, setAge] = React.useState('Gender');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='flex flex-col w-full  bg-white'>
            <h2 className='text-[1.1rem] font-medium p-4'>Add Department
            </h2>
            <Divider />
            <div className='w-full flex flex-col p-4 gap-4'>
                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Roll No.</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Roll No."
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Student Name </FormLabel>

                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Student Name"
                        />
                    </div>
                </FormControl>

                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Department
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
                        <FormLabel className='text-labelColor'>Department
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


                <FormControl className='w-full '>
                    <div className='flex flex-col w-full'>
                        <FormLabel className='text-labelColor'>Ammount</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Ammount"
                        />
                    </div>
                </FormControl>


                <FormControl className='w-full grid grid-cols-2 gap-3'>
                    <div>
                        <FormLabel className='text-labelColor'>Collection Date</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="date"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Payment Type
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
                        <FormLabel className='text-labelColor'>Payment Reference Number</FormLabel>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            type="number"
                        />
                    </div>
                    <div>
                        <FormLabel className='text-labelColor'>Status
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

                <FormControl className='w-full '>
                    <div className='flex flex-col w-full'>
                        <FormLabel className='text-labelColor'>Payment Details</FormLabel>
                        <TextareaAutosize
                            placeholder='Payment Details'
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

export default AddFeesForm
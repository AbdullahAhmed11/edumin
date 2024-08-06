'use client'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { RiFilter2Fill } from "react-icons/ri";
import { Divider } from '@mui/material';
import { FormControl, Input, FormLabel, TextField, Select, MenuItem } from '@mui/material';

const AdminFilter = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="flex items-center gap-2"
                    >
                        <RiFilter2Fill className="text-primary w-10 h-10" />
                        <h2 className='text-primary text-[1rem]'>Filter</h2>
                    </div>
                    <Divider />
                </AccordionSummary>
                <AccordionDetails>
                    <div className='w-full gap-2 grid grid-cols-2 md:grid-cols-4'>
                        <FormControl>
                            <FormLabel className='text-labelColor'>Group Name</FormLabel>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                fullWidth
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>                        </FormControl>
                        <FormControl>
                            <FormLabel className='text-labelColor'>Course</FormLabel>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                fullWidth
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>                           </FormControl>
                        <FormControl>
                            <FormLabel className='text-labelColor'>Start Date</FormLabel>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                                type="date"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel className='text-labelColor'>End Date</FormLabel>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                                type="date"
                            />
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AdminFilter
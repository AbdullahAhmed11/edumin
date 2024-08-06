'use client'
import { Divider } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InstructorFees from './InstructorFees';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Fees = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='p-2'>
            <div className='bg-white flex flex-col w-full  rounded-md '>
                <h2 className='text-primary text-[1rem] font-medium p-6'>Fees </h2>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                className=""
                                orientation={{ xs: 'vertical', sm: 'horizontal' }} // Change orientation based on screen size
                                sx={{
                                    '& .MuiTabs-flexContainer': {
                                        flexDirection: { xs: 'column', sm: 'row' } // Stack tabs vertically on small screens, horizontally on larger screens
                                    }
                                }}
                            >
                                <Tab style={{
                                    color: "#00263f"
                                }} label="Instructor " {...a11yProps(0)} />
                                <Tab style={{
                                    color: "#00263f"
                                }} label="Student" {...a11yProps(1)} />

                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <InstructorFees />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <InstructorFees />
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Fees
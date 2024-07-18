import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LifeSession from './LifeSession';
import VideoCard from './VideoCard';
import Complain from './Complain';
import FeedBack from './FeedBack';
import AboutCourse from './AboutCourse';
import Eveluation from './Eveluation';

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

export default function TablesHome() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
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
                    }} label="Life Session " {...a11yProps(0)} />
                    <Tab style={{
                        color: "#00263f"
                    }} label="All Sessions" {...a11yProps(1)} />
                    <Tab style={{
                        color: "#00263f"
                    }} label="Complain" {...a11yProps(2)} />
                    <Tab style={{
                        color: "#00263f"
                    }} label="Feedback" {...a11yProps(3)} />
                    <Tab style={{
                        color: "#00263f"
                    }} label="About Course" {...a11yProps(4)} />
                    <Tab style={{
                        color: "#00263f"
                    }} label="Evaluation" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <LifeSession />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <VideoCard />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Complain />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <FeedBack />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <AboutCourse />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <Eveluation />
            </CustomTabPanel>
        </Box>
    );
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography,Tabs ,Tab } from '@mui/material';
import Header from '../../Components/Header/Header';
import Team from './Team/Team';
import { SettingStyle } from './Style';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
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

const Setting = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <SettingStyle>
        <Header/>
        <Box className="settingMain">
            <Typography variant="h5">Settings</Typography>
            <Box sx={{ width: '100%' }} className="tabMain">
                <Box sx={{ borderBottom: 1, borderColor: '#E7EAEE' }} className="tabPanelWrap">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="My details" {...a11yProps(0)} />
                    <Tab label="Profile" {...a11yProps(1)} />
                    <Tab label="Password" {...a11yProps(2)} />
                    <Tab label="Team" {...a11yProps(3)} />
                    <Tab label="Plan" {...a11yProps(4)} />
                    <Tab label="Billing" {...a11yProps(5)} />
                    <Tab label="Email" {...a11yProps(6)} />
                    <Tab label="Notifications" {...a11yProps(7)} />
                    <Tab label="Integrations" {...a11yProps(8)} />
                    <Tab label="API" {...a11yProps(9)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    My details
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Profile
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Password
                </TabPanel>
                <TabPanel value={value} index={3} className="teamPanel">
                    <Team/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Plan
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Billing
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Email
                </TabPanel>
                <TabPanel value={value} index={7}>
                    Notifications
                </TabPanel>
                <TabPanel value={value} index={8}>
                    Integrations
                </TabPanel>
                <TabPanel value={value} index={9}>
                    API
                </TabPanel>
            </Box>
        </Box>
      </SettingStyle>
  )
}

export default Setting
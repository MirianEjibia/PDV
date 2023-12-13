import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tab2 } from './Tabs/tab2';
import { Tab1 } from './Tabs/tab1';
import { Tab3 } from './Tabs/tab3';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function PDVTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ПППДВ (Садашња)" {...a11yProps(0)} />
          <Tab label="Обрачунати ПДВ - СЕФ" {...a11yProps(1)} />
          <Tab label="Претходни ПДВ - СЕФ" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Tab1/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Tab2/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Tab3/>
      </CustomTabPanel>
    </Box>
  );
}


import React from 'react';
import TopFiveHamsters from './TopFiveHamsters'
import BottomFiveHamsters from './BottomFiveHamsters'
import OldestHamsters from './OldestHamsters'
import YoungestHamsters from './YoungestHamsters'
import './Components.css'


import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={2}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
    primary: {
        main: green[500],
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className="Stats">
            <div >
                <header>
                    <h1>Statistics</h1>
                    <p>Want to know more about the little fellas?</p>
                </header>
                <AppBar className="StatsBar" position="static" color="white">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab className="Stats" label="Top Five" />
                        <Tab label="Bottom Five" />
                        <Tab label="Oldest" />
                        <Tab label="Youngest" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <TopFiveHamsters />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <BottomFiveHamsters />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <OldestHamsters />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <YoungestHamsters />
                </TabPanel>
            </div>
        </main>
    );
}
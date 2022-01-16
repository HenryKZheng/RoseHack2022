import React, { useReducer, useState } from 'react';
import { render } from "react-dom";
import { makeStyles } from '@mui/material/styles';
import { Calendar, momentLocalizer} from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css";
import TaskCalendar from "./calendar"
import Header from "../header"
import { 
  Button, 
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
  } from "@mui/material"
// import AddTask from "./addTask"
import Navbar from '../NavBar';
import '../styles/lotus.css'
import DailyQuote from './dailyQuote'
import { padding } from '@mui/system';
import DailyManifestation from "./dailyManifestation"


const gradient1 = {
  position: "absolute",
  width: "150%",
  height: "300%",
 
  
  background: "linear-gradient(130.45deg, #FFFFFF 43.8%, #E4FDC3 98.67%)",
  borderRadius: "2px",
  transform: "rotate(4.5deg)",
}

const gradient2 = {
  position: "absolute",
  width: "150%",
  height: "300%",
  
  background: "linear-gradient(141.1deg, #FFFFFF 50.03%, #9CC48E 115.15%)",
  borderRadius:" 2px",
  transform: "rotate(4.5deg)",
}

const gradient3 = {
  position: "absolute",
  width: "150%",
  height: "300%",

background: "linear-gradient(140.89deg, #FFFFFF 41.92%, #9CC48E 114.98%)",
bordeRadius: "2px",
transform: "rotate(-175.5deg)",
}

export default class TaskManager extends React.Component {

  render() {
    return (
      
      <main>
      <div style={gradient1}></div>
      <div style={gradient2}></div>
      <div style={gradient3}></div>
        <div>
          <Navbar className = "navbarOverlap"/>
          <div className = "calendarOverlap">
            <main>
              <TaskCalendar/>
            </main>
          </div>
        </div>
        <div>
        <Drawer
            sx={{
              width: 250,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
              width: "30%",
              boxSizing: 'border-box',
              },
            }}
            anchor="right"
            variant="permanent"
        > 
          <Box className = "dailyQuote">
            <DailyQuote/>
          </Box>

          <Box className = "dailyManifestation">
          <DailyManifestation/> </Box>
        </Drawer>
        </div>
        
        
        </main>
    );
  }
}

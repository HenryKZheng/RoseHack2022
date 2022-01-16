import React, { useReducer, useState } from 'react';
import { render } from "react-dom";
import { makeStyles } from '@mui/material/styles';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import TaskCalendar from "./calendar"
import Header from "../header"
import { 
  Button, 
  Box,
  Grid,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material"
// import AddTask from "./addTask"
import Navbar from '../NavBar';
import '../styles/lotus.css'
// import * as React from 'react';
// import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MyList from "./myLists"
import MyHabits from "./myHabits"
import MyTasks from "./myTasks"

export default class Lotus extends React.Component {

  render() {
    return (
      
      <>

        <div style={{margin: "0 200px 0 200px", top: "50px", position:"fixed" }}>
          <Navbar className = "navbarOverlap"/>


        <div style={{height: "100px", width:"100px;", padding: "100px", float:"left"}} ><h2> My Lists</h2> <MyList/></div>





        <Box style={{height: "100px", width:"100px;", padding: "100px",float:"left"}}><h2> My Habits</h2>
          <List>
            <ListItem>
              <MyHabits/>
            </ListItem>
          </List>
        </Box>


        <Box style={{height: "100px", width:"100px;", padding: "100px", float: "left", marginTop:"100px"}}>
          <h2> My Tasks</h2>
          <MyTasks/>
        </Box>


      </div>
      </>
    );
  }
}

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LotusIcon from "../icons/lotus_logo.png";
import MyLotusIcon from "../icons/whatup.png";
import TaskIcon from "../icons/taskicon.png";



export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  
  const list = (anchor) => (
    <Box>
      <div className = "navTitle">
        <List>
          <ListItem button key = "Lotus" component = {Link} to="/taskManager">
            <ListItemIcon>
              <img  src={LotusIcon}/>
            </ListItemIcon>
            <ListItemText primary = "Lotus" />
          </ListItem>
        </List>
      </div>
      <Divider className = "horizontalRule"/>
      <div className = "listItems">
        <List>
          <ListItem button key="Tasks" className = "listTitle" component = {Link} to="/taskManager">
            <ListItemIcon >
              <img  src={TaskIcon} style={{
                color: "#5A7252",
                width: "15%",
                height: "15%",
              }}/><span>Tasks</span>
            </ListItemIcon>
            <ListItemText primary= "Tasks"/>
          </ListItem>
          <ListItem button key="My Lotus" className = "listTitle" component = {Link} to="/lotus">
            <ListItemIcon>
              <img  src={MyLotusIcon} style={{
                color: "#5A7252",
                width: "6%",
                height: "6%"
              }}
              /><span>My Lotus</span>
            </ListItemIcon>
            <ListItemText primary= "My Lotus" />
          </ListItem>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            sx={{
              width: 205,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
              width: 200,
              boxSizing: 'border-box',
              },
            }}
            anchor="left"
            variant="permanent"
          > 
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}



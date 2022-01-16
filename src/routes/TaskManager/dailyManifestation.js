import React, { useReducer, useState, setState } from 'react';
import { render } from "react-dom";
import { makeStyles } from '@mui/material/styles';
import '../styles/lotus.css'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';





const DailyManifestation = () =>{

    return (

        <div>
        <h1 style = {{fontFamily: "Inter",
        fontSize: "18px",
        padding: "50px 0 0 30px" }}>Daily Manifestation</h1>
        <input type="text" name="dailyManifestation" style = {{fontFamily: "Inter",
        fontSize: "18px",
        margin: "0 0 0 30px" }}/>
</div>

    );

};

export default DailyManifestation
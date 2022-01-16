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

// var dailyQuotes = [
//     "“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.”",
//     "“People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.”",
//     "“Think like a proton. Always positive.”",
//     "“You’re only given a little spark of madness. You mustn’t lose it.”",
//     "“Opportunity is missed by most people because it is dressed in overalls and looks like work.”",
//     "“Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.”"
// ]

const listOfQuotes = () => {
  return (
    [
    { id: 1, quote: "“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.”"},
    { id: 2, quote: "“People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.”"},
    { id: 3, quote: "“Think like a proton. Always positive.”"},
    { id: 4, quote: "“You’re only given a little spark of madness. You mustn’t lose it.”"},
    { id: 5, quote: "“Opportunity is missed by most people because it is dressed in overalls and looks like work.”"},
    { id: 6, quote: "“Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.”"}
    ]
  )
};

function getRandIndex() {
    return ((Math.floor(Math.random() * 100) % 6) + 1);
}

const theme = createTheme();

theme.typography.h5 = {
    
    fontFamily: "Inter",
    fontSize: "18px",
    padding: "100px 0 0 30px "
}; 

theme.typography.body1 = {
    
    fontFamily: "Inter",
    fontSize: "18px",
    padding: "5px 0 0 30px",
    color: "#6C737E"
}; 

const DailyQuotes = ()  => {
    const quoteList = listOfQuotes();
    const indexNum = getRandIndex();
    return (
        <Box className = "dailyQuotesClass">
        <ThemeProvider theme={theme}>
            <Typography variant = "h5" >Daily Quote</Typography>
            <div>
                {quoteList.map((chosenQuote, index) => (
                    <React.Fragment key = {index}>
                        <Typography variant = "body1">{(indexNum == chosenQuote.id ? chosenQuote.quote : "")}</Typography>
                    </React.Fragment>
                ))}

                
            </div>
            </ThemeProvider>
        </Box>
    );

}

export default DailyQuotes
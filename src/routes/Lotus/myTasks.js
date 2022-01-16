import React, { useReducer, useState } from 'react';
import { render } from "react-dom";
import { makeStyles } from '@mui/material/styles';
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
  ListItemText,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl
} from "@mui/material"
import { FavoriteBorder } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import LotusIcon from "../../icons/lotus_logo.png";


export default function MyTasks() {

    return (
        <FormControl component="fieldset" style={{border:"solid", padding:"35px", boxShadow:"10px 10px 5px grey"}}>
            <FormGroup aria-label="position" row>
                <FormControlLabel labelPlacement="left" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "Study"/>
            </FormGroup>
            <FormGroup aria-label="position" row>
                <FormControlLabel labelPlacement="left" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "Walk My Dog"/>
            </FormGroup>
            <FormGroup aria-label="position" row>
                <FormControlLabel labelPlacement="left" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "Meditate"/>
            </FormGroup>
            

    
        </FormControl>

       
    );

}
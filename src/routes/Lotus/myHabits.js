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


export default function MyHabits() {

    return (
        <FormControl component="fieldset" style={{border:"solid", padding:"35px", boxShadow:"10px 10px 5px grey"}}>
            <FormGroup aria-label="position" row>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "S"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "M"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "T"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "W"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "T"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "F"/>
                <FormControlLabel labelPlacement="top" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label = "S"/>
            </FormGroup>
        </FormControl>
    );

}
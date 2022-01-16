import React, { useReducer, useState } from 'react';
import ReactDOM from "react-dom"
import { render } from "react-dom";
import { makeStyles } from '@mui/material/styles';
import { 
    Button, 
    Box,
    Grid,
    TextField,
    Typography,
} from "@mui/material"
import { DateTimePicker } from "@mui/lab"
import DateAdapter from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { SimpleReactValidator } from 'simple-react-validator';
import { validateDateTime as Validation } from '@mui/lab/internal/pickers/date-time-utils';


const useStyles = makeStyles((theme) => ({
    button: {
      marginLeft: 20,
      color: 'white',
      backgroundColor: '#7e7eff',
      '&:hover': {
        backgroundColor: '#5757ff',
      },
      float: 'right',
    },
    paper: { minWidth: '33%' },
    dateTimePicker: {
        width: 220
    }
  }));


const AddTask = (props) => {
    const classes = useStyles();
    // const [validator] = useState(new SimpleReactValidator());
    const [date, setValue] = React.useState(new Date());

    // const handleDateTimeChange = (date: MUIPickersDate) => {
    //     if (date != NULL) {
    //         console.log(`${date.format('YYYY-MM-DD hh:mm A')} ${date.tz()}`);
    //     }
    // }

    return (
        <><Box>
            <Grid container item spacing={0} justify="flex-end">
                <Grid item alignItems="right">
                    <Button
                        variant = "contained"
                        size = "small"
                        className='classes.button'
                    >
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </Box><LocalizationProvider dateAdapter={DateAdapter}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DueDate"
                    toolbarPlaceholder="Due Date"
                    value={date}
                    onChange={(newDate) => {
                        console.log(newDate.toUTCString());
                        setValue(newDate);
                    } }
                    showTodayButton
                    renderInput={(params) => <TextField {...params} />} />
            </LocalizationProvider></>
    );
}

export default AddTask;
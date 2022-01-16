// import ReactDOM from "react-dom";
// import { render } from "react-dom";
// import React, { useReducer, useState } from 'react';
// import { makeStyles } from '@mui/material/styles';
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import { Calendar, momentLocalizer} from "react-big-calendar"
// import moment from "moment"
// import "react-big-calendar/lib/css/react-big-calendar.css";


// const localizer = momentLocalizer(moment)

// var myEventsList = [
//   { start: new Date(), end: new Date(), title: "special event" }
// ];

// // const DragandDropCalendar

// const MyCalendar = props => (
//   <div>
//     <Calendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
// )

// const TaskCalendar = (props) => {
//   return (
//     <MyCalendar/>
//   );
// }

// export default TaskCalendar;


import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { makeStyles } from '@mui/material/styles';
import '../Navbar.css'
import { 
    Button, 
    Box,
    Grid,
    TextField,
    Typography,
    Popover,
} from "@mui/material"
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function TaskCalendar() {
  
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    const [open, setOpen] = React.useState(false);
    const toggle = () => {
      setOpen((prev) => !prev);
    }


    return (
        <Box>
            <h1>Calendar</h1>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: "70vh"}}/>
            <Button onClick={toggle} style={{color: "white", backgroundColor:"#5A7252"}}>Add New Task</Button>
            <Popover style={{maxWidth: "400px", maxHeight: "1000px"}} onClose={toggle} open={open}>
              <h2 style={{color: "white"}}>Add New Event</h2>
              <div>
                  <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                  <Box>
                    <DatePicker style={{minWidth: "100px"}} placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker style={{minWidth: "100px"}} placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                  </Box>
                  <Button  onClick={handleAddEvent} style={{color: "#5A7252"}}>
                      Add Event
                  </Button>
              </div>
            </Popover>
        </Box> 
    );
}



export default TaskCalendar;
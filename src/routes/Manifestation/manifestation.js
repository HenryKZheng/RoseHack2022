import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { 
  Button, 
  Box,
  Grid,
  TextField,
  Typography,
  Popover,
} from "@mui/material"



export default class Manifestation extends React.Component {
  render() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h1> Morning Manifestations</h1>

        <form>
            <label>Number 1</label>
            <input type="text" name="manifestation1"></input>
        </form>
      </main>
    );
  }
}

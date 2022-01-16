import React from "react"
import { render } from "react-dom";
import Navbar from '../NavBar';
import '../styles/lotus.css'



export default class Affirmation extends React.Component {
  render() {
    return (
      <div>
        <Navbar className = "navbarOverlap"/>
        <main style={{ padding: "1rem 0" }}>
          <h2 style={{padding: "1rem 1rem 1rem 1rem"}}>Habits</h2>
          
        </main>
      </div>
    );
  }
}
  
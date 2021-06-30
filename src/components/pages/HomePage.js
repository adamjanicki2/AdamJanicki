import React, { Component } from "react";
import IconBar from '../modules/IconBar.js';
import About from "../modules/About.js";
import "../../utilities.css";
import "./HomePage.css";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'about',
    }
  }

  render() {
    return (
        <div className='homepage-container'>
          <div className='top-bar'><h1 className='u-textCenter name-header'>Adam Janicki</h1></div>
          <About />
          <IconBar/>
        </div>
    );
  }
}

export default HomePage;
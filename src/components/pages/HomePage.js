import React, { Component } from "react";
import IconBar from '../modules/IconBar.js';
import About from "../modules/About.js";
import Courses from "../modules/Courses.js";
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
          <div className='u-bluegreen'><h1 className='u-textCenter name-header'>Adam Janicki</h1></div>
          <div className='navbar-container'>
            <h1 onClick={()=>{this.setState({content: 'about'})}} className={this.state.content === 'about'? 'header-links selected-link':'header-links'}>About</h1>
            <h1 onClick={()=>{this.setState({content: 'classes'})}} className={this.state.content === 'classes'? 'header-links selected-link':'header-links'}>{'Courses & Projects'}</h1>
          </div>
          <div className='content-container'>{this.state.content === 'about'? <About />:<Courses />}</div>
          <IconBar/>
        </div>

    );
  }
}

export default HomePage;
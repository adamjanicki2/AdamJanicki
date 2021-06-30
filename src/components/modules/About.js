import React, { Component } from "react";
import "./About.css";
import picture from "../../img/pfp_square.jpg";

class About extends Component {
    constructor(props) {
      super(props);
      
    }

    render() {
      return (
        <div className='About-container'>
          <div className='u-auto'><img src={picture} className='About-pfp'/></div>
          <div className='bio-text'>
            <br/>
            <div>Hi! My name is <a className='u-bold'>Adam Janicki</a>, and I'm a junior at MIT studying Computer Science and Engineering (Course 6-3).</div>
            <br/>
            <div>Recently, I've been working as a Software Developer Intern for <a className='bio-routes' rel='noreferrer' target='_blank' href='https://capitaltg.com'>Capital Technology Group</a>, as well as a Lab Assistant for 6.0001/2 (Intro to CS) under the MIT Department of EECS.</div>
            <br/>
            <div>Outside of Academics, I'm a member of the MIT Varsity Swimming and Diving Team, and also a mentor for <a className='bio-routes' rel="noreferrer" target='_blank'href='https://amphibious.mit.edu/'>Amphibious Achievement</a>. I'm a total geek for movies and TV, and enjoy <a className='bio-routes' rel='noreferrer' target='_blank' href='https://adamovies.com'>sharing</a> about what I watch.</div>
            <br/>
            <div>Thanks for stopping by; I'd love to connect! Feel free to reach out to me by <a rel="noreferrer"className='bio-routes' href='mailto:ajanicki@mit.edu'>email</a>!</div>
          </div>
        </div>
      );
    }
  }
  
  export default About;
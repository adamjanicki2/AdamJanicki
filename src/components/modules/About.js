import React, { Component } from "react";
import "./About.css";
import picture from "../../img/pfp2.jpg";

class About extends Component {
    constructor(props) {
      super(props);
      
    }

    render() {
      return (
        <div className='About-container'>
            <div className='image-container'><img src={picture} className='About-pfp' /></div>
            <div className='bio-container'>
                <p className='bio-text'>
                    Hi! My name is Adam Janicki, and I'm a sophomore at MIT studying Computer Science and Engineering (Course 6-3) with a minor in Math.
                    <br></br><br></br>Recently, I've been working as an Undergraduate Research Assistant at the <a rel="noreferrer"href='http://civicdatadesignlab.mit.edu/' target='_blank'className='bio-routes'>MIT Civic Data Design Lab</a>, as well as a Lab Assistant for 6.0001/2 (Intro to CS) under the MIT Department of EECS.
                     <br></br><br></br>Outside of Academics, I'm a member of the MIT Varsity Swimming and Diving Team, and also a mentor for <a className='bio-routes' rel="noreferrer" target='_blank'href='https://amphibious.mit.edu/'>Amphibious Achievement</a>. I'm a total geek for movies and also an amateur gamer.
                     <br></br><br></br>Thanks for stopping by; I'd love to connect! Feel free to reach out to me by <a rel="noreferrer"className='bio-routes' href='mailto:ajanicki@mit.edu'>email</a>!
                </p>
            </div>
        </div>
      );
    }
  }
  
  export default About;
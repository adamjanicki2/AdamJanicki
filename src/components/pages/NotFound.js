import React, { Component } from "react";
import "../../utilities.css";
import { navigate } from '@reach/router';
class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className='u-textCenter big-text'>404 Not Found!</h1>
        <h1 className='smaller-text u-textCenter'>Sorry, pathname '{window.location.pathname}' could not be found</h1>
        <h1 onClick={()=>{navigate('/')}} className='smaller-text u-textCenter return-home'>Return Home</h1>
      </div>
    );
  }
}

export default NotFound;
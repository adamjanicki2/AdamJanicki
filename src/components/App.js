import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import HomePage from "./pages/HomePage.js";


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    console.log("PATHNAME: ["+window.location.pathname+"]")
  }

  render() {
    return (
      <>
      <div>
        <Router>
          <HomePage path="/AdamJanicki/"/>
          <HomePage path="/AdamJanicki"/>
          <HomePage path="/"/>
          <NotFound default />
        </Router>
        </div>
      </>
    );
  }
}

export default App;

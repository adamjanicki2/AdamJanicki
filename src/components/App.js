import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import HomePage from "./pages/HomePage.js";


class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <>
      <div>
        <Router>
          <HomePage path="/"/>
          <NotFound default />
        </Router>
        </div>
      </>
    );
  }
}

export default App;

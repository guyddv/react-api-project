import React, { Component } from "react";
import "./App.css";
import RandomData from "./Components/randomData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Random Data Generator</h1>
        <hr />
        <RandomData />
      </div>
    );
  }
}

export default App;

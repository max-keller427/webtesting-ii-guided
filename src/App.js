import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    greeting: ""
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <div>{this.state.greeting}</div>
      </div>
    );
  }
  greet = () => {
    this.setState({ greeting: "Hello FSWPT4" });
  };
}

export default App;

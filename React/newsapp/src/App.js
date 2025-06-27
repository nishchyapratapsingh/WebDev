import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  state = {
    query: "world",
  };
  updateQuery = (newQuery) => {
    this.setState({ query: newQuery });
  };
  render() {
    return (
      <>
        <Navbar querySelect={this.updateQuery} />
        <News query={this.state.query} />
      </>
    );
  }
}

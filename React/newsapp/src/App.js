import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    query: "world",
    progress: 10
  };

  setProgress = (p) => {
    this.setState({progress: p});
  }

  updateQuery = (newQuery) => {
    this.setState({ query: newQuery });
  };
  render() {
    return (
      <>
        <LoadingBar
          color="#a25e36"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Navbar querySelect={this.updateQuery} />
        <News query={this.state.query} setProgress={this.setProgress} />
      </>
    );
  }
}

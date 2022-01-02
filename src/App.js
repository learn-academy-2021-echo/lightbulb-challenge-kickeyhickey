import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Box />
        <Footer />
      </>
    );
  }
}
export default App;

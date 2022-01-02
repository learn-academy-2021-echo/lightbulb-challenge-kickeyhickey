import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Addbox from "./components/Addbox.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Addbox />
        <Footer />
      </>
    );
  }
}
export default App;

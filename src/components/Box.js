import React, { Component } from "react";
import Bulb from "./Bulb";
import bulboff from "./pics/bulboff.png";
import bulbon from "./pics/bulbon.png";
import flykite from "./pics/flykite.png";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff: "off",
      color: "white",
      lightoffon: bulboff,
    };
  }
  // Create method that decides and uses each of the states needed
  switch = () => {
    if (this.state.onoff === "off") {
      this.setState({ onoff: "on", color: "yellow", lightoffon: bulbon });
    } else {
      this.setState({ onoff: "off", color: "white", lightoffon: bulboff });
    }
  };
  // render your button that uses your method with this.switch. Create id to style it in css.
  // Import Bulb from Bulb.js and then render it below. Bulb will contain the render of the lightbulb image.
  // Decorate page with images rendered below
  render() {
    return (
      <>
        <Bulb lightoffon={this.state.lightoffon} />
        <img src={flykite} style={{ height: "300px" }} id="flykite" />
        <img src={flykite} style={{ height: "300px" }} id="flykite2" />
        <div>
          <button
            id="box"
            onClick={this.switch}
            style={{ backgroundColor: this.state.color }}
          >
            {this.state.onoff}
          </button>
          <br></br>
        </div>
      </>
    );
  }
}
export default Box;

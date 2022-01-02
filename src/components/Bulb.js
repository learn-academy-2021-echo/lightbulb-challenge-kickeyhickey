import React, { Component } from "react";

class Bulb extends Component {
  // Use this child to render the image imported into Box.js
  render() {
    return (
      <div className="bulb">
        <img
          src={this.props.lightoffon}
          alt="new"
          style={{ height: "200px" }}
        />
      </div>
    );
  }
}
export default Bulb;

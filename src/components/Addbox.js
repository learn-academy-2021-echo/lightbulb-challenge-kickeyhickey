import React, { Component } from "react";
import Box from "./Box";
class Addbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightArray: [],
    };
  }

  moreBoxes = () => {
    if (this.state.lightArray) {
      this.setState({ lightArray: [...this.state.lightArray, <Box />] });
    }
  };

  lessBoxes = () => {
    if (this.state.lightArray[0] !== false) {
      let newArr = [...this.state.lightArray];
      newArr.pop();
      this.setState({ lightArray: newArr });
    }
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.moreBoxes}>add bulbs</button>
          <button onClick={this.lessBoxes}>delete bulbs</button>
          <div>{this.state.lightArray}</div>
        </div>
      </>
    );
  }
}

export default Addbox;

import React, { Component } from 'react'
class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
        onoff: "off",
        color: "white"
        }
    }
    switch = () =>{
   if (this.state.onoff === "on"){
       this.setState ({onoff: "off", color: "white"})
   } else if (this.state.onoff === "off"){
       this.setState ({onoff: "on", color: "yellow"})
   }

    }
    render() {
        return (
            <>
            <button id = "box" onClick={this.switch} style={{backgroundColor: this.state.color}}>{this.state.onoff}</button>
            </>
        )
    }
}
export default Box;
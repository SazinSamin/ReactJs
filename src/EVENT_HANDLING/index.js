import React, { Component } from "react";

export default class EVENT_HANDLER extends Component {

  constructor(props) {
    super(props)

    this.state = {
      outputMessage: ''
    }
  }

  handleMessage = (e) => {
    this.setState({
      outputMessage : e.target.value
    })
  }


  render() {
    return <div>
      <h1>Welcome</h1>
      <input type="text" onChange={this.handleMessage}></input>
      <p>{this.state.outputMessage}</p>
    </div>;
  }
}

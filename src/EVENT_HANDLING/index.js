import React, { Component } from "react";

export default class EVENT_HANDLER extends Component {

  constructor(props) {
    super(props)

    this.state = {
      outputMessage: ''
    }
  }

  // If we use normal function instead of arrow function
  // we have to bind the this
  // read the reason
  // https://github.com/SazinSamin/Samin_Reading_Room/blob/main/Javascript/Good_Practice/1117_this_in_arrow_function.js
  handleMessage (e) {
    this.setState({
      outputMessage : e.target.value
    })
  }


  render() {
    return <div>
      <h1>Welcome</h1>
      {/* We bind this with the function */}
      <input type="text" onChange={this.handleMessage.bind(this)}></input>
      <p>{this.state.outputMessage}</p>
    </div>;
  }
}

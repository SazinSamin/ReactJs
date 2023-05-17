import React from "react";
import { Component } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default class RenderingSelection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn : false
    }
  }

  LogginInProcedure = () => {
    this.setState({
      isLoggedIn : true
    })
  }

  SinOutProcedure = () => {
    this.setState({
      isLoggedIn : false
    })
  }



  render() {
    return (
      <div>
        { /* rendering will happened based on the given condition */}
        {(this.state.isLoggedIn) ? <HomePage /> : <LoginPage />}
        <button onClick={this.LogginInProcedure}>Log In</button>
        <button onClick={this.SinOutProcedure}>Sign Out</button>
      </div>
    )
  }
}

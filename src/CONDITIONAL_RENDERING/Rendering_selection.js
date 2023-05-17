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


  render() {
    return (
      <div>
        { /* rendering will happened based on the given condition */}
        {(this.state.isLoggedIn) ? <HomePage /> : <LoginPage />}
      </div>
    )
  }
}

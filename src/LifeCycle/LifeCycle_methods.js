import { Component } from "react";

export default class LifeCycle extends Component {

  constructor(props) {
    super(props);

    console.log("Constructor called")
    this.state = {
      count: 0,
    };

  }

  componentDidMount () {
    console.log("componentDidMount"); 
  }

  shouldComponentUpdate () {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate () {
    console.log("componentDidUpdate")
  }

  handleIncrement = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
    return <div>
      {console.log("UI Rendered")}
      <h1>{this.state.count}</h1>
      <button onClick={this.handleIncrement}>+</button>
    </div>
  }

}
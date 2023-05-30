import { Component } from "react";

export default class LifeCycle extends Component {

  constructor(props) {
    super(props);

    console.log("Constructor called")
    this.state = {
      count: 0,
    };

  }

  //componentWillMount && componentWillUpdate is depricated
  
  // this function will excetuded once after the render executed for the first
  // time
  componentDidMount () {
    console.log("componentDidMount"); 
  }

  // this component check should the state has update or not, should
  // the component will render again or nor
  // return false explicitly will not update the component although we update the state
  shouldComponentUpdate () {
    console.log("shouldComponentUpdate");
    return true;
  }


  // executed after the state has update
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
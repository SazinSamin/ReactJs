const { Component, createRef } = require("react");

// ref is used to access and modify the DOM element directly 
// without using React or React state
// That's why it is called Uncontrolled element
// ref is slow.


class Ref extends Component {
  constructor (props) {
    super(props);
    this.userNameRef = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameRef.current.value);
  }

  render () {
    return <div>
      <h1>Ref in Class component</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input type="text" ref={this.userNameRef}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}


export default Ref;
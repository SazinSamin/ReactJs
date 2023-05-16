import React, {Component} from "react";

// Class component
class Card extends Component {
  render () {
    return <div>
      {/* Access props in class component using this */}
      <h2>{this.props.title}</h2>
      <h2>{this.props.desc}</h2>
    </div>
  }
}

export default Card;
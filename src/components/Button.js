import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      additionalClasses: typeof props.additionalClasses !== 'undefined' ? props.additionalClasses : ''
    });
  }
  render() {
    return (
      <button className={"button " + this.state.additionalClasses} onClick={this.props.action}>
        {this.props.buttonText}
      </button>
    )
  }
}

export default Button;

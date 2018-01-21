import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  render() {
    let stepData = this.props.stepData;
    return (
      <div className="step" style={{width: this.props.width + 'px'}}>
        <h2 className="step-title">{stepData.title}</h2>
        <p className="step-description">{stepData.description}</p>
      </div>
    )
  }
}

export default Step;

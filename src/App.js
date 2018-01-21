import React, { Component } from 'react';
import Steps from './components/Steps.js';
import sequence from './sequences/sample.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: sequence.title,
      steps: sequence.steps
    }
  }

  render() {
    return (
      <div>
        <div className="app-container">
          <header>
            <h1 className="sequence-title">{this.state.title}</h1>
          </header>
          <Steps steps={this.state.steps} />
        </div>
      </div>
    );
  }
}

export default App;

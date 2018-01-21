import React, { Component } from 'react';
import Steps from './components/Steps.js';
import {SettingsButton, SettingsOverlay} from './components/Settings.js';
import sequence from './sequences/sample.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: sequence.title,
      steps: sequence.steps,
      isSettingsOpen: false
    }

    //TODO: Implement settings. Uncomment HTML.
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  toggleSettings() {
    this.setState({
      isSettingsOpen: !this.state.isSettingsOpen
    });
  }

  render() {
    return (
      <div>
        {/*<SettingsButton action = {this.toggleSettings} /> */}
        <div className="app-container">
          <header>
            <h1 className="sequence-title">{this.state.title}</h1>
          </header>
          <Steps steps={this.state.steps} />
        </div>
        {/*this.state.isSettingsOpen ? <SettingsOverlay></SettingsOverlay> : null */}
      </div>
    );
  }
}

export default App;

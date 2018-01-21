import React, { Component } from 'react';
import './Settings.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/fontawesome-free-solid'

class SettingsButton extends Component {

  render() {
    return (
      <FontAwesomeIcon className="settings-button" icon={faCog} size="lg" onClick={this.props.action} />
    )
  }
}

class SettingsOverlay extends Component {

  render() {
    return (
      <div className = "overlay">
        <h2 className = "overlay-title">Settings</h2>
        //TODO: Add Settings Implementation
      </div>
    )
  }
}

export {
  SettingsOverlay,
  SettingsButton
}

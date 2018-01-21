import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      time: this.props.duration
    })

    this.countdown = this.countdown.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.countdown, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  countdown(){
    let newTime = this.state.time - 1;

    if (newTime < 0) {
      //TODO: Find a new way other than a hidden JS <audio> to implement this as it doesnt work on mobile browsers.
      this.props.action();
    } else {
      this.setState({time: newTime});
    }
  }

  render() {
    return (
      <span className="counter">{this.state.time}</span>
    )
  }
}

export default Counter;

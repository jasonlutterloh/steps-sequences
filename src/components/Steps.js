import React, { Component } from 'react';
import Step from './Step.js';
import Button from './Button.js';
import Counter from './Counter.js';
import './Steps.css';

class Steps extends Component {
  constructor (props) {
    super(props);

    let isButtonEnabled = this.shouldButtonBeEnabled(0);
    let isTimerEnabled = this.shouldTimerBeEnabled(0);
    let timerDuration = this.shouldTimerBeEnabled(0) ? props.steps[0].timing.duration : 0;

    this.state = {
      currentStep: 0,
      isButtonEnabled: isButtonEnabled,
      isTimerEnabled: isTimerEnabled,
      timerDuration: timerDuration,
      width: 0,
      height: 0
    }

    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleBackStep = this.handleBackStep.bind(this);
    this.resetSteps = this.resetSteps.bind(this);
    this.getNewStateValues = this.getNewStateValues.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  shouldTimerBeEnabled(stepNumber) {
    if (this.props.steps[stepNumber].timing.type === 'timer' || this.props.steps[stepNumber].timing.type === 'manualTimer') {
      return true;
    }
    return false;
  }

  shouldButtonBeEnabled(stepNumber) {
    if (this.props.steps[stepNumber].timing.type === 'manual'){
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getNewStateValues(stepNumber) {
    return {
      currentStep: stepNumber,
      isButtonEnabled: this.shouldButtonBeEnabled(stepNumber),
      isTimerEnabled: this.shouldTimerBeEnabled(stepNumber) ,
      timerDuration: (this.shouldTimerBeEnabled(stepNumber) ? this.props.steps[stepNumber].timing.duration : 0)
    }
  }

  resetTimer(callback) {
    this.setState({
      isTimerEnabled: false
    }, callback);
  }

  handleNextStep() {
    if (this.props.steps[this.state.currentStep].timing.type === 'manualTimer' && this.state.isButtonEnabled === false){
      this.setState({
        isButtonEnabled: true,
        isTimerEnabled: false
      });
    } else {
      this.resetTimer(() => {
        let newStep = this.state.currentStep + 1;
        if (newStep >= this.props.steps.length - 1){
          this.setState({
            isButtonEnabled: false,
            isTimerEnabled: false,
            currentStep: newStep,
            timerDuration: 0
          });
        } else {
          this.setState(this.getNewStateValues(newStep));
        }
      });
    }
  }

  handleBackStep() {
    this.resetTimer(() => {
      let newStep = this.state.currentStep - 1;
      this.setState(this.getNewStateValues(newStep));
    });
  }

  resetSteps() {
    this.resetTimer(() => {
      let newStep = 0;
      this.setState(this.getNewStateValues(newStep));
    });
  }

  render() {
    let stepData = this.props.steps;
    let stepWidth = stepData.length * this.state.width + 'px';
    let stepLeft = '-' + (this.state.currentStep * this.state.width) + 'px';

    //TODO: Make the footer section readable
    return (
      <div>
        <div className="steps">
          <div className="steps-container" style={{width: stepWidth, left: stepLeft }}>
            {stepData.map((item, index) => (
              <Step key={'Step'+index} stepData = {stepData[index]} width={this.state.width}/>
            ))}
          </div>
        </div>
        {this.state.currentStep > 0 ? <Button additionalClasses = "back-button" action={this.handleBackStep} buttonText = '<' /> : null }
        {this.state.isTimerEnabled ? <Counter duration={this.state.timerDuration} action={this.handleNextStep}/> : null}
        {this.state.isButtonEnabled ? <Button action={this.handleNextStep} buttonText = 'Next'/> : null }
        {this.state.currentStep >= (stepData.length - 1) ? <Button additionalClasses = "reset-button" action={this.resetSteps} buttonText = 'Reset'/> : null }
        {(this.state.currentStep < (stepData.length - 1) && !this.state.isButtonEnabled) ? <Button additionalClasses = "next-button" action={this.handleNextStep} buttonText = '>' /> : null }
      </div>
    )
  }
}

export default Steps;

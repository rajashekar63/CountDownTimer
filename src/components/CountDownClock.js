import React from 'react';
import './style.css'
class CountDownClock extends React.Component {
   constructor(props) {
    super(props);
    this.timer = null;
    this.inputTimer = 0;
    this.state = { 
        time: '00:00:00', 
        value: ''
        };
    this.startTimer = this.startTimer.bind(this);
    this.countTime = this.countTime.bind(this);
  }
  startTimer(e) {
    e.preventDefault();
    const inputVal = parseInt(this.state.value);
    if(inputVal > 0) {
      this.inputEl.classList.remove('error');
      clearInterval(this.timer);
      this.timerEl.classList.remove('blink');
      this.inputTimer = inputVal;
      this.timer = setInterval(this.countTime, 1000);
    } else {
      this.inputEl.classList.add('error');
    }
  }

  countTime() {
    this.inputTimer = (this.inputTimer - 1);
    this.setState({
      time: this.props.secondsToTime(this.inputTimer),
      seconds: this.inputTimer,
    });
    
    if (this.inputTimer === 0) { 
      clearInterval(this.timer);
      this.timerEl.classList.add('blink')
    }
  }

  render() {
    return(
      <div className="timer-component">
        <form>
          <input 
            className="number-field"
            type="number" 
            name="timer" 
            value={ this.state.value } 
            onChange={ (e) => this.setState({ value:(e.target.value) }) }
            placeholder="Enter time in Seconds"
            ref={el => this.inputEl = el}
          />
          <button className="button" onClick={this.startTimer}>Start Timer</button>
        </form>
          <div className="timer-container">
            <label className="label">Remaining Time: </label>
            <div className="timer" ref={el => this.timerEl = el}>{this.state.time}
            </div>
          </div>
      </div>
    );
  }
}
export default CountDownClock;


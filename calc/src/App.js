import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    input: 0,
    result: 0,
    oper: '',
    equat: 0
  };

  addToOper = (fig) => {
    if (this.state.oper != '') {
      if (fig == '+') {
        this.setState({equat: this.state.equat + parseInt(this.state.input)});
        this.setState({result: this.state.equat + parseInt(this.state.input) + fig});
        this.setState({input: 0});
      } else if (fig == '-') {
        this.setState({equat: this.state.equat - parseInt(this.state.input)});
        this.setState({result: this.state.equat - parseInt(this.state.input)});
        this.setState({input: 0});
      } else if (fig == '*') {
        this.setState({equat: this.state.equat * parseInt(this.state.input)});
        this.setState({result: this.state.equat * parseInt(this.state.input)});
        this.setState({input: 0});
      } else {
        this.setState({equat: this.state.equat / parseInt(this.state.input)});
        this.setState({result: this.state.equat / parseInt(this.state.input)});
        this.setState({input: 0});
      }
    } else {
      this.setState({result: this.state.result + fig});
      this.setState({equat: parseInt(this.state.input)})
      this.setState({input: 0})
      this.setState({oper: fig});
    }
  }
  
  addToInput = (fig) => {
    this.setState({input: this.state.input + fig});
    this.setState({result: this.state.result + fig});
  }

  clearInput = () => {
    this.setState({
      result: 0,
      oper: '',
      input: 0,
      equat: 0
    });
  }

  executeInput = () => {
    console.log(this.state.oper);
    console.log(this.state.equat);
    console.log(parseInt(this.state.input));

    if (this.state.oper == '+') {
      this.setState({equat: this.state.equat + parseInt(this.state.input)});
      console.log(this.state.equat);
      this.setState({result: this.state.equat + parseInt(this.state.input)});
      this.setState({input: 0});
    } else if (this.state.oper == '-') {
      this.setState({input: this.state.equat - parseInt(this.state.input)});
      this.setState({result: this.state.equat - parseInt(this.state.input)});
      this.setState({input: 0});
    } else if (this.state.oper == '*') {
      this.setState({input: this.state.equat * parseInt(this.state.input)});
      this.setState({result: this.state.equat * parseInt(this.state.input)});
      this.setState({input: 0});
    } else if (this.state.oper == '÷') {
      this.setState({input: this.state.equat / parseInt(this.state.input)});
      this.setState({result: this.state.equat / parseInt(this.state.input)});
      this.setState({input: 0});
    } else {
      return
    }
  }

  render() {
    return(
      <div className="App">
        <div className="calcApp">
          <div className="row">
            <text>{this.state.result}</text>
          </div>
          <div className="row buttons">
            <button onClick={() => this.addToInput('7')}>7</button>
            <button onClick={() => this.addToInput('8')}>8</button>
            <button onClick={() => this.addToInput('9')}>9</button>
            <button onClick={() => this.addToOper('÷')}>÷</button>
          </div>
          <div className='row buttons'>
            <button onClick={() => this.addToInput('4')}>4</button>
            <button onClick={() => this.addToInput('5')}>5</button>
            <button onClick={() => this.addToInput('6')}>6</button>
            <button onClick={() => this.addToOper('*')}>*</button>
          </div>
          <div className='row buttons'>
            <button onClick={() => this.addToInput('1')}>1</button>
            <button onClick={() => this.addToInput('2')}>2</button>
            <button onClick={() => this.addToInput('3')}>3</button>
            <button onClick={() => this.addToOper('+')}>+</button>
          </div>
          <div className='row buttons'>
            <button onClick={() => this.addToInput('.')}>.</button>
            <button onClick={() => this.addToInput('0')}>0</button>
            <button onClick={() => this.clearInput()}>C</button>
            <button onClick={() => this.addToOper('-')}>-</button>
          </div>
          <div className='row buttons'>
            <button onClick={() => this.executeInput()}>=</button>
          </div>
        </div>
      </div>
    )
  };
}

export default App;

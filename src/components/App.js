import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const calcStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calculate(this.state, buttonName);
    const  { next, total, operation} = data;

    this.setState({
      next: next,
      total: total,
      operation: operation,
    })
  }

  render() {
    return (
      <div style={calcStyle}>
        <Display result={this.state.total || this.state.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

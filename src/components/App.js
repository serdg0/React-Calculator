import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const calcStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700
}

class App extends React.Component {// eslint-disable-line
  render() {
    return (
      <div style={calcStyle}>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;

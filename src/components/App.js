import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {// eslint-disable-line
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Display from './Display';
import {ButtonPanel} from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App;
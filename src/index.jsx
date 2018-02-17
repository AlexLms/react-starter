import React from 'react';
import ReactDOM from 'react-dom';
import '~/styles/index.js';

// components
import HelloPanel from '~/pages/helloPanel/HelloPanel';


class App extends React.Component {
  render() {
    return (
      <HelloPanel />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

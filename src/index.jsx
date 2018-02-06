import React from 'react';
import ReactDOM from 'react-dom';

// components
import HelloPanel from '~/containers/helloPanel/HelloPanel';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: '',
    };
  }

  render() {
    return (
      <HelloPanel />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

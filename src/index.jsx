import React from 'react'
import ReactDOM from 'react-dom'

// components
import Hello from 'components/Hello'


import './styles/style.sass'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // selected: '',
    }
  }

  render() {
    return (
      <main>
        {Hello()}
      </main>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

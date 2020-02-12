import React from 'react'
import InchToCm from './InchToCm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <InchToCm />
      </div>
    )
  }
}

export default App

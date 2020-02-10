import React from 'react'

const TestView = props => <div>{props.value}</div>

class TestForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form onSubmit={(e, v) => this.props.update(e, this.state.value)}>
        <input type='text' onChange={e => this.handleChange(e)} />
        <input type='submit' />
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: 'first' }
  }

  handleSubmit (e, value) {
    e.preventDefault()
    this.setState({ value: value })
  }
  render () {
    return (
      <div>
        <TestView value={this.state.value} />
        <TestForm update={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default App

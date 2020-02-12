import React from 'react'

class ValueInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange (e) {
    const v = e.target.value
    console.log(v)
    const newValue = v.replace(/[^0-9.]+/g, '')
    console.log(newValue)
    this.setState({ value: newValue })
    if (this.props.onChange) {
      this.props.onChang nextProps.valuee({
        target: this,
        value: newValue
      })
    }
  }

  //UNSAFE_componentWillReceiveProps (nextProps) {
  //   this.setState({ value: nextProps.value })
  //}

  componentDidUpdate = nextProps => {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: this.props.value })
    }
  }

  render () {
    return (
      <div>
        <label>
          {this.props.title}: <br />
          <input
            type='text'
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
        </label>
      </div>
    )
  }
}

export default ValueInput

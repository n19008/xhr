import React from 'react'
import axios from 'axios'
//import ReactDOM from 'react-dom'
const url = 'https://holidays-jp.github.io/api/v1/date.json'
const url2 =
  'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      //isLoading: false
    }
  }
    handleClick = () => {
        axios
            .get(url2)
            .then(res => console.log(res))
    }

  render () {
    // if (this.isLoading) {
    //return <p>loading...</p>
    // }
      return (
          <div>
          <button onClick = {this.handleClick}>wa-i</button>
          </div>
      )
  }
}

export default App

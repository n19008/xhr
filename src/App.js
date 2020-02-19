import React from 'react'
import axios from 'axios'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360"
const url2 = 'https://holidays-jp.github.io/api/v1/date.json'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      //isLoading: false
        data1 : null
    }
  }
    handleClick = () => {
        axios
            .get(url)
            .then((res) => {console.log(res.data)
                const json = JSON.stringify(res)
                this.setState({
                    //data1 : JSON.parse(json)
                    data1 : res.data
                    })
                //console.log(this.state.data1.data['result'][0]['foodImageUrl'])
                //console.log(this.state.data1['2019-01-01'])
                console.log(this.state.data1)
            })
    }

  render () {
    // if (this.isLoading) {
    //return <p>loading...</p>
    // }
      var url = ''
      if (this.state.data1 != null) {
          url = this.state.data1['result'][0]['foodImageUrl']
      }
      return (
          <div>
          <button onClick = {this.handleClick}>wa-i</button>
          <img src ={url} alr='' />
          </div>
      )
  }
}

export default App

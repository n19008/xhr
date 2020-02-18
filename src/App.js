import React from 'react'
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
    componentDidMount() {
        fetch(url)
            .then((res) => {
                this.setState({
                    isLoding : true
                })
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render () {
        //if (this.isLoading) {
        //return <p>loading...</p>
        //}
        return <div></div>
    }
}

export default App

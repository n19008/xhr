import React from 'react'
import './main.css'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data1 : null,
        }
    }

    handleClick = () => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                this.setState ({
                    data1 : data
                })
                console.log(JSON.stringify(this.state.data1['result'][0]['foodImageUrl']))
                //   console.log(this.state.images)
            })
           .catch((err) => {
               console.log(err)
           })
    }

    render () {
        //if (this.isLoading) {
        //return <p>loading...</p>
        //}
        var ur = ''
        if (this.state.data1 != null) {
            ur = this.state.data1['result'][0]['foodImageUrl']
        }
        return (
            <div className='imagesource'>
                <button onClick = {this.handleClick}>wa-i</button>
                <img src = {ur} alt=''/>
            </div>
        )

    }
}

export default App

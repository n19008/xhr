import React from 'react'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            //isLoading: false
            images : '' ,
            data1 : null,
            formTxt : ''
        }
    }

    handleClick = () => {
        fetch(url)
            .then((res) => {
                //this.setState({
                //isLoding : true
                //})
                //console.log(res)
                return res.json()
            })
            .then((data) => {
                //オブジェクトがreslut
                //console.log(data['result'][0])
                //const v = data['result'][0]
                //console.log(v['recipeDescription'])
                //画像パス
                //const image = v['foodImageUrl']
                console.log(data)
                this.setState ({
                    // images : image,
                    data1 : data
                    // data1 : v
                })
                console.log(JSON.stringify(this.state.data1['result'][0]['foodImageUrl']))
                //   console.log(this.state.images)
            })
        //   .catch((err) => {
        //       console.log(err)
        //   })
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
            <div>
                <button onClick = {this.handleClick}>wa-i</button>
                <p>{ur}</p>
            </div>
        )

    }
}

export default App

import React from 'react'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=???"
 const url1 = 'https://holidays-jp.github.io/api/v1/date.json'

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
    componentDidMount() {
        fetch(url1)
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
                var d = new Date()
                var year = d.getFullYear()
                console.log(year)
                this.setState ({
                    // images : image,
                    data1 : data
                    // data1 : v
                })
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
        return (
            <div>
            </div>
        )

    }
}

export default App

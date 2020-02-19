import React from 'react'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            //isLoading: false
            images : '',
            data1 : {},
            formTxt : ''
        }
    }
    componentDidMount() {
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
                const v = data['result'][0]
                console.log(v['recipeDescription'])
                //画像パス
                const image = v['foodImageUrl']
                //console.log(image)
                this.state = {
                    images : image,
                    //data1 : JSON.stringify(v)
                    data1 : v
                }
                console.log(this.state.data1)
                //console.log(this.state.images)
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
                <p>{this.state.data1}</p>
            </div>
        )

    }
}

export default App

import React from 'react'
import './main.css'
//import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=???"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data1 : null,
            index1 : 0,
            valuedata : {},
            images : {},
            menu : '次のメニュー',
        }
    }

    handleClick = () => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if(this.state.index1 < 3) {
                    this.setState ({
                        data1 : data,
                        valuedata: data['result'][this.state.index1],
                        images : this.state.valuedata,
                        index1 : this.state.index1 += 1
                    })
                    console.log(this.state.valuedata)
                    console.log(this.state.images)
                }else {
                    this.setState({
                        menu : '最後のメニューです'
                    })}
                    //console.log(this.state.index1)
                    //console.log(this.state.valuedata)
                    //console.log(JSON.stringify(this.state.data1['result'][0]['foodImageUrl']))
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
        var name = ''
        if (this.state.data1 != null) {
           ur = this.state.valuedata['foodImageUrl']
            name = this.state.valuedata['recipeDescription']
        }
        return (
            <div>
                <div className='imagesource'>
                    <button onClick = {this.handleClick}>{this.state.menu}</button>
                    <img src={ur} alt='' />
                    <div className='name'>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        )

    }
}

export default App

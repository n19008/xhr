import React from 'react'
import './main.css'
import ReactDOM from 'react-dom'
const url = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data1 : null,
            index1 : 0,
            valuedata : {},
            images : {},
            menu : 'メニューを表示する'
        }
    }

    handleClick = () => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if(this.state.index1 < 4) {
                    this.setState ({
                        valuedata: data['result'][this.state.index1],
                        //images: data['result'][this.state.index1]['foodImageUrl'],
                        index1 : this.state.index1 += 1,
                        menu : '次のメニュー'
                    })
                    if(this.state.index1 === 4) {
                        this.setState({
                            menu : '最後のメニューです'
                        })}
                    console.log(this.state.valuedata)
                }
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
        const {foodImageUrl, recipeDescription, recipeTitle, recipeUrl} = this.state.valuedata
        return (
            <div className='test'>
                <div className='button1'>
                    {recipeUrl ? '': <button onClick = {this.handleClick}>{this.state.menu}</button>}
                </div>
                <div className='info'>
                    <a href={recipeUrl}>{recipeTitle}</a>
                    <div className='imagesource'>
                        <img src={foodImageUrl} alt='' />
                    </div>
                    <div className='listRender'>
                        {recipeDescription ? <li>{recipeDescription}</li>: ''}
                    </div>
                </div>
                <div className="button2">
                {recipeUrl ? <button onClick = {this.handleClick}>{this.state.menu}</button>: ''}
            </div>
            </div>
        )

    }
}

export default App

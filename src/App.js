import React from 'react'
import './main.css'
import ReactDOM from 'react-dom'
const url =
  'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&formatVersion=1&applicationId=1025199417506477360'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index1: 0,
      valuedata: {},
      images: {},
      menu: 'メニューを表示する',
      maindata: {}
    }
  }
  componentDidMount () {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          maindata: data
        })
      })
  }

  handleClick = (page) => {
    if (this.state.index1 >= 0 && this.state.index1 < 4) {
      this.setState({
        index1: this.state.index1 += page,
        valuedata: this.state.maindata['result'][this.state.index1]
      })
        //console.log(this.state.index1)
        //console.log(this.state.valuedata)
      //if (this.state.index1 >= 4) {
      // this.setState({
      //  menu: '最後のメニューです',
      // index1: this.state.index1 -= 1,
      //valuedata: this.state.maindata['result'][this.state.index1]
      // })
      //  alert(this.state.menu)
      //}
      //if (this.state.index1 < 0) {
      // this.setState({
      //  index: this.state.index1 += 1,
      // valuedata: this.state.maindata['result'][this.state.index1],
      //menu: '前のメニューはありません'
      // })
      //  alert(this.state.menu)
      //}
      console.log(this.state.index1)
      console.log(this.state.valuedata)
      //console.log(this.state.valuedata)
    }else {
      this.setState({
        index : this.state.index +=1,
        valuedata: this.state.maindata['result'][this.state.index1]
      })
      console.log(this.state.index1)}
  }

  render () {
    //if (this.isLoading) {
    //return <p>loading...</p>
    //}
      console.log(this.state.index1)
      console.log(this.state.valuedata)
    const {
      foodImageUrl,
      recipeDescription,
      recipeTitle,
      recipeUrl
    } = this.state.valuedata
    return (
      <div className='test'>
        <div className='button'>
          {recipeUrl ? (
            ''
          ) : (
            <button className='button1' onClick={() => this.handleClick(0)}>
              {this.state.menu}
            </button>
          )}
        </div>
        <div className='info'>
          <a href={recipeUrl}>{recipeTitle}</a>
          <div className='imagesource'>
            <img src={foodImageUrl} alt='' />
          </div>
          <div className='listRender'>
            {recipeDescription ? <li>{recipeDescription}</li> : ''}
          </div>
        </div>
        <div className='button'>
          {recipeUrl ? 
            <button className='button2' onClick={() => {this.handleClick(-1)}}>
              戻る
            </button>
            : 
              ''
          }
          {recipeUrl ? 
            <button className='button2' onClick={() => {this.handleClick(+1)}}>
              次へ
            </button>
            : 
              ''
          }
        </div>
      </div>
    )
  }
}

export default App


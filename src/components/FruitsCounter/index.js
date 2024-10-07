// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  mangoIncr = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  bananaIncr = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
        <h1 className="heading">
          Bob ate <span> {mangoCount} </span> mangoes <span>{bananaCount} </span> bananas
        </h1>
        <div className="items-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="Mango" className="image"
            />
            <button onClick={this.mangoIncr} className="btn">Eat Mango</button>
          </div>
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="Banana" className="image"
            />
            <button onClick={this.bananaIncr} className="btn">Eat Banana</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default FruitsCounter

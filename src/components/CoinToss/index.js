import {Component} from 'react'

import './index.css'

const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

class CoinToss extends Component {
  state = {coin: heads, total: 0, H: 0, T: 0}

  onToss = () => {
    const {coin} = this.state
    this.setState(prev => ({total: prev.total + 1}))
    const result = Math.floor(Math.random() * 2)
    if (result > 0) {
      this.setState({coin: tails})
      this.setState(prev => ({T: prev.T + 1}))
    } else {
      this.setState({coin: heads})
      this.setState(prev => ({H: prev.H + 1}))
    }
  }

  render() {
    const {coin, total, T, H} = this.state
    return (
      <div className="main-constainer">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>
            <img src={coin} alt="toss result" className="coin" />
          </div>
          <button type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="contents">
            <p>Total: {total}</p>
            <p>Heads: {H}</p>
            <p>Tails: {T}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

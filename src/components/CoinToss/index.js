import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    startingImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  btn = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (toss === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }
    this.setState({
      startingImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {startingImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="d1">
        <div className="d2">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={startingImage} alt="img" className="img" />
          <button type="button" className="btn" onClick={this.btn}>
            Toss Coin
          </button>
          <div className="d3">
            <p className="p1">Total: {totalCount}</p>
            <p className="p1">Heads: {headsCount}</p>
            <p className="p1">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

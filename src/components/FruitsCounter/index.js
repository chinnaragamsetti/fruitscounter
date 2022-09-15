import {Component} from 'react'
import './index.css'

import {className} from 'postcss-selector-parser'

class FruitsCounter extends Component {

    const state={mango:0,banana:0}
    
    mangoIncrement=()=>{
            this.setState((prevstate)=>({mango:prevstate.mango+1}))
    }
    bananaIncrement=()=>{
        this.setState((prevstate)=>({banana:prevstate.banana+1}))

    }
  render() {
        const {mango,banana}=this.state;
    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="h">
            Bob ate <span className="span">{mango}</span>mangoes
            <span className="span">{bananas}</span> bananas
          </h1>
          <div className="fruitscontainer">
            <div className="fruit">
              <image
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className={image}
              />
              <button className="butt1" onClick={this.mangoIncrement}>Eat Mango</button>
            </div>
            <div className="fruit">
              <image
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className={image}
              />
              <button className="butt1" onClick={this.bananaIncrement}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

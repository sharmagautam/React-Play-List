import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component { 
      render() {
          const {count, clickHandler} = this.props
          return (
          <div>
              <button onMouseOver={clickHandler}> mouse over { count } times</button>
          </div>
          )
      }
}

export default withCounter(HoverCounter,10)

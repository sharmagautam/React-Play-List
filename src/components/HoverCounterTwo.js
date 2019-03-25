import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onMouseOver={incrementCount}> hover me {count}</button>
      </div>
    )
  }
}

export default HoverCounterTwo

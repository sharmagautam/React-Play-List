import React, { Component } from 'react'

class clickCounterTwo extends Component {
 
  render() {
    const{count, incrementCount} = this.props  
   // console.log(count);
    
    return (        
      <div>
        <button onClick={incrementCount}>click me { count }</button>
      </div>
    )
  }
}

export default clickCounterTwo

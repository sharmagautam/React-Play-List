import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           counter : 0
        }
      }
      
      onMouseOver = ()=>{
          this.setState( previousState=>{
              return {counter : previousState.counter +1}            
      })
          console.log(this.state.counter);
      }
  
      render() {
          //const count = this.state.counter
  
                     // or
          const {counter} = this.state  
                
          return (
          <div>
              <button onMouseOver={this.onMouseOver}> mouse over { counter } times</button>
          </div>
          )
      }
}

export default HoverCounter

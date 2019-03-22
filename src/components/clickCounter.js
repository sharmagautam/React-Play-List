import React, { Component } from 'react'

class clickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }
    
    clickHandler = ()=>{
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
            <button onClick={this.clickHandler}> clicked { counter } times</button>
        </div>
        )
    }
}

export default clickCounter

import React, { Component } from 'react'

class CounterByUsingRenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
      incrementCount = ()=>{
          this.setState(previoiusState=>{
              return { count : previoiusState.count +1 }
          })
      }
    render() {
        return (
        <div>

            {
                this.props.children(this.state.count, this.incrementCount)
            }
            
        </div>
        )
    }
}

export default CounterByUsingRenderProps

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    // increase the value of counter directly
    // incrementCounter(){
    //     this.state.count = this.state.count + 1;  {/* if u set the value of state without setState method it will not render the screen but u can see the changes in console*/}
    //     console.log(this.state.count);
    // }

    // increase the value of counter using setState

    // incrementCounter(){
    //     this.setState({
    //         count : this.state.count +1
    //     })
    //     console.log(this.state.count);  // before increment the value of count in setState console.log will display the non incremented value
    //                                     // of count since this is asynchronous. in order to make it synchronous do following
    // }    

    // in order to print the log after increment ie synchronous way we need to pass second param to the setState method as a call back function.

    incrementCounter(){
        this.setState({
            count : this.state.count +1
        }, () => {console.log(this.state.count)})                                        
    } // if u call this method 5 times it will give u 1 as o/p in console 5 time and in ui 1 will display instead of 5. 

    // for the desire result ie in ui if u want 5 thn do following
    // incrementCounter(){(){
    //      this.setState(
    //          preState => ({count : preState.count+1})   
    //       , () => console.log(this.state.count))  // sychronous       display 5 times 5
    //       console.log(this.state.count);       // asynchronous  display 5 times 0         
    // }
    
    // incrementCounterFiveTimes(){
    //     this.incrementCounter();
    //     this.incrementCounter();
    //     this.incrementCounter();
    //     this.incrementCounter();
    //     this.incrementCounter();
    // }

  render() {
    return (
      <div>        
        <p> {this.state.count} </p>

        
       <button onClick={() => this.incrementCounter()}>Increment</button>

        {/* either use call back function or bind this to call function.   if u can't bind this thn this keyword inside the state will be undefine */}
       {/* <button onClick={this.incrementCounter.bind(this)}>Increment</button> */}

      </div>
    )
  }
}

export default Counter

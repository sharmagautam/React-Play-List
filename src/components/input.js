import React, { Component } from 'react'

class input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.inputref = React.createRef()
    }
    

    // in this example we are focus on input from clik on the button which is in parent,
    // and this.inputref.current.focus(); is not calling in componentDidMount() method, insted of that 
    // we are creating focusInput() method which is called by parent FocusInput.js
    focusInput(){
        this.inputref.current.focus();
    }

    render() {
        return (
        <div>
            <input type='text' ref = {this.inputref}></input>
        </div>
        )
    }
}

export default input

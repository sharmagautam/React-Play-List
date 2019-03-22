import React, { Component } from 'react';
import Input from './input';

class FocusInput extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.inputref = React.createRef();
  }
  clickHandler = ()=>{
    this.inputref.current.focusInput();  // call function inside child
  }  
  render() {
    return (
      <div>
        <Input ref={this.inputref}/>
        <button onClick={this.clickHandler}>click to focus</button>
      </div>
    )
  }
}

export default FocusInput

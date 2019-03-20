import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.inputrefes = React.createRef();
    }

    componentDidMount(){
        console.log( this.inputrefes);
        this.inputrefes.current.focus()  // this is responsible for focus the cursor in input box
    }
    
    // second usecase of using React.createRef() method is to fetch the value 
    hadleClick = ()=>{
        alert(this.inputrefes.current.value);
    }

    render() {
        
        return (
        <div>
            <input type='text' ref={this.inputrefes}></input>
            <button onClick={this.hadleClick}>Click</button>
        </div>
        )
    }
}

export default RefsDemo

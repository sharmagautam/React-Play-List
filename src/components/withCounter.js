import React, {Component} from 'react';

const UpdatedComponent = (OriginalComponent, incrementNumber) =>{
    
        class NewComponent extends Component{

            constructor(props) {
                super(props)
              
                this.state = {
                   counter : 0
                }
              }
              
              clickHandler = ()=>{
                  this.setState( previousState=>{
                      return {counter : previousState.counter +incrementNumber}            
              })
                  console.log(this.state.counter);
              }
            render(){
                return <OriginalComponent count={this.state.counter} 
                clickHandler={this.clickHandler}
                {...this.props}/> // passing remaining param to the componnet, if u will not pass the props u will not able to access in the component 
                                 //  which are importing the HOC (higher order component)
            }
        }
    return NewComponent 
}

export default UpdatedComponent;
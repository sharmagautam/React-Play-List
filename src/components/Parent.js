import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component{

    constructor(props){
        super(props);
        this.state = {
            parentName : 'Parent'
        }
    }
    render(){
        return (
            <div> 
                <Child greetParent = {this.GreetParent}/>
            </div>
        )
    }
    GreetParent = (childname) => {
        alert(` hello ${this.state.parentName} from ${childname}`);   
    }
}

export default Parent;
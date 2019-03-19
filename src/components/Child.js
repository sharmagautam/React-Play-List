import React, {Component} from 'react';

class Child extends Component{

    render(){        
        return (
            <div> 
                <button onClick={() =>this.props.greetParent('child')}>click from child</button>
            </div>
        )
    }
   
}
export default Child;
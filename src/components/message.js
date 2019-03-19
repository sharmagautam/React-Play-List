import React, {Component} from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message : 'Welcome visitors'
        }
    }

    changeMessage(){
        this.setState ({
            message : 'Thank you for subscription.'
        })
    }
    render(){
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=>this.changeMessage()}> click to Subscribe</button>
            </div>
        );
    }
}

export default Message;
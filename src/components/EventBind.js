import React, {Component} from 'react';

class EventBind extends Component{
    constructor(props){
        super(props);

        this.state ={
            message : "Thre is 4 way of Event binding"
        }

        // 4th way of binding
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler(){
        this.setState({
             message : "click to see the changes..."
                 });
    }
    // 3rd way of binding the event
    // eventHandler = ()=>{
    //     this.setState({
    //         message : "this is the first way..."
    //     });
        
    // }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.eventHandler.bind(this)}> click</button> */}  {}
                {/* <button onClick={() =>this.eventHandler()}> click </button> */}
                <button onClick={this.eventHandler}> click </button>

            </div>
        );
    }
}

export default EventBind;
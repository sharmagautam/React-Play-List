import React, {Component} from 'react';

class ConditionalRendering extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        // if else 

        // if(this.state.isLoggedIn){
        //     return <div> welcome Gautam</div>
        // }
        // else{
        //    return <div> welcome Guest</div>
        // }

        // element method

        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div> welcome Gautam</div>
        // }
        // else{
        //     message = <div> welcome Guest</div>
        // }
        // return message;

        // ternary operator 

        return (this.state.isLoggedIn ? <div> welcome Gautam</div> : <div> welcome Guest</div>)

        // short curcuit operator  (this will display yes or nothing)

       // return this.state.isLoggedIn && <div> welcome Gautam</div>
    }
}

export default ConditionalRendering;
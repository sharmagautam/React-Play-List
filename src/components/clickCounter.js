import React, { Component } from 'react';
import withCounter from './withCounter';

class clickCounter extends Component {
    
    render() {
        //const count = this.state.counter
        const {count, clickHandler} = this.props    
       
        return (
        <div>
            <button onClick={clickHandler}> {this.props.name} clicked { count } times</button>           
        </div>
        )
    }
}

export default withCounter(clickCounter,5)

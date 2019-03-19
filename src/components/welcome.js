// class component

import React, { Component } from 'react';


// without distructuring  the props

// class Welcome extends Component{
//     render(){
//         return (
//         <div>
//             <h1> welcome {this.props.name} </h1>
//             <p> {this.props.children} </p>
//         </div>);
//     }
// }

// destructuring the pros
class Welcome extends Component{
    
    render(){
        const {name,age} = this.props ;
        return (
        <div>
            <h1> welcome {name} your age is { age } </h1>
            <p> {this.props.children} </p>
        </div>);
    }
}

export default Welcome;
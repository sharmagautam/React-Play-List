// this is the functional component

import React from 'react'

const Greet = (props)=>{    
    //console.log(props);
   const {name, age} = props;
    return (
    <div>
        <h1>
            Hello {name} your age is {age}
        </h1>
        {props.children}  
    </div>);
}

// we can also destructuring in param as  
// const Greet = (name, age)=>{   
//        return (
//     <div>
//         <h1>
//             Hello {name} your age is {age}
//         </h1>
//         {/* {props.children}  { but this line will give u error bcoz we are not rcvng the props now instead we destrcture the obj} */}
//     </div>);
// }

export default Greet;
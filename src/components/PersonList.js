import React, {Component} from 'react'

const PersonList = ({personlist})=> {
  return (
    <div>
      <h1>your name is  {personlist.name} and age is {personlist.age} and your skill is {personlist.skill} </h1>
    </div>
  )
}

// check how to achive above functionality in class components

// class PersonList extends Component{
   
//       render(){

//         return(
//             <div>
//                 {this.props}
//             </div>
//         );
//     }
// }


export default PersonList

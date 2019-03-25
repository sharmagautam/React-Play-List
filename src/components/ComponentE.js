import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends Component {

  static contextType = UserContext;
  render() {
    // this.context will give u the value 'gautam' passing in tha top component ComponentC
    // this is the another way of getting the context 
    return (
      <div>
        {this.context}
        <ComponentF/>

      </div>
     
    )
  }
}

// either use outside the class  or above in class with static keyword
// ComponentE.contextType = UserContext;

export default ComponentE

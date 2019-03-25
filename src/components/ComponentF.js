import React, { Component } from 'react';
import {UserConsumer} from './UserContext';

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (userName)=>{
            return (
              <div> hello {userName}</div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF;

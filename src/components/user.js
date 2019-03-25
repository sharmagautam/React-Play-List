import React, { Component } from 'react'

class user extends Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.name}</h1>  if you will pass the name as props */}
        <h1>{this.props.render(false)}</h1>  {/* if you will pass the name props as function */}
      </div>
    )
  }
}

export default user

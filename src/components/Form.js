// controlled component : the form which is controlled by react is called controlled component.


import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       comments : '',
       topic : 'React'
    }
  }

  handleUserChange = (event)=>{
        this.setState({
            userName : event.target.value
        })
  }

  handleUserComment = (event)=>{
    this.setState({
        comments : event.target.value
    })
}

handleUserTopic = (event)=>{
    this.setState({
        topic : event.target.value
    })
}
handleSubmitChange = (event)=>{
   alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);

   // after clicking the submit button default behaviour is to refresh the page. so after dissmiss the alert
   // all the data on page get clear so for avoid the default behaviour of submit button we use the below method.
   event.preventDefault();

}
  // the value of the input box is controlled by the state as soon as the onChange event will occur 
  // handleUserChange handler will get called, there the value of  state has been changed and the render method get called and 
  // the value of the input box will set by the state.

  // Note: Render method is called if any changes occurs in state or props but we can handle this default behaviour by using the component
  //  updatating life cycle method called "shouldCompontnUpdate(nextProps, nextState)"
  render() {
      console.log(this.state);
      
      const {userName, comments, topic} = this.state;
    return (
      <form onSubmit={this.handleSubmitChange}>   
      <div>
        <lebel>UserName</lebel>
        <input type='text' value={userName} onChange={this.handleUserChange}></input>
      </div>
      <div>
          <label>comments</label>
          <textarea type='text' value={comments} onChange={this.handleUserComment}></textarea>
      </div>

      <div>
          <select value={topic} onChange={this.handleUserTopic}>
              <option value='React'>React</option>
              <option value='Angular'>Angular</option>
              <option value='Vue'>Vue</option>
          </select>
      </div>
      <div>
          <button type='submit'>Save</button>
      </div>
      </form>
    )
  }
}

export default Form

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';
import Classclick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import ConditionalRender from './components/ConditionalRendering';
import Namelist from './components/NameList';
import Stylesheet from './components/Stylesheets';
import InLine from './components/inLine';

// regular stylesheets import 
import './myAppStyle.css';

// module.css stylesheet import
import styles from './myAppStyle.module.css';

import Form from './components/Form';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/FocusInput';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
      { /* <h1 className = 'error'> error</h1> */}   {/* if you copy this line into child component it will work there also, so there is chaces of css conflict
                                              ie import will apply to child component also*/}
     { /*<h1 className = {styles.success}> success</h1>*/}  {/* but if u use the css module approach its scope will be localy hence the style is applied to 
                                              those compnent to whom we want to apply*/}

        {/* <Greet name="gautamaa" age="29"> <p> this is children</p> </Greet>    {/* we can pass children in betwwen component without specifyin in property*/}
        {/* <Greet name="nitesh"/>   */}
        {/* <Greet name="usha"/>   */}
       {/* <Welcome  name="bhopal" age="40"> this is children from class component </Welcome> */}
       {/* <Message/> */}
       {/* <Counter/> */}
       {/* <FunctionClick/> */}
       {/* <Classclick/> */} 
        {/* <EventBind/> */}
        {/* <Parent/> */}
         {/* <ConditionalRender/> */}
        {/* <Namelist/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <InLine/> */}
        {/* <Form/> */}
        {/* <RefsDemo/> */}
        {/* <FocusInput/> */}
        <ClickCounter name='Gautam'/>  {/* name prop cant not access to the click counter until  */}
        <HoverCounter/>
      </div>
    );
  }
}

export default App;

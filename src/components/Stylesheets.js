import React from 'react';
import './myStyle.css'

// simply apply css to style

// const Stylesheets = ()=> {  
//   return (
//     <div>
//       <h1 className='primary'>my style </h1>
//     </div>
//   )
// }

// if u want to put some condition thn we can do like this

// const Stylesheets = (props)=> {
//     const className = props.primary ? 'primary' : ''
//   return (
//     <div>
//       <h1 className={className}>my style </h1>
//     </div>
//   )
// }


// if we want to apply more than one css u can use string literals

const Stylesheets = (props)=> {
    const className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl `}>my style </h1>
    </div>
  )
}

export default Stylesheets

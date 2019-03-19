import React from 'react'

// this is inline style css make sure that the key should in camel case
const heading = {
    fontSize : '72px',
    color : 'blue'
}
function inLine() {
    
  return (
    <div>
      <h1 style = {heading}>inline css </h1>
    </div>
  )
}

export default inLine

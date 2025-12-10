import React from 'react'
const Button = ({incr}) => {
    console.log("Button");
    
  return (
    <button onClick={incr}>Click</button>
  )
}

export default React.memo(Button)
import React from 'react'
const Count = ({text,data}) => {
    console.log("count"+text);
    
  return (
    <h1>{text} : {data}</h1>
  )
}

export default  React.memo(Count)
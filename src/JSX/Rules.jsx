import React from 'react'

const Rules = () => {
  return (
   <>
   <h1>Rules of JSX</h1>
   <ol>
    <li>Adjacent JSX Elements must be wrapped in as single parent and must be adjacent to return keyword or must be in parenthasis</li>
    <li>Unpaired tags must be closed properly</li>
    <li>Attributes like class and for must be replaced with classname and htmlfor</li>
    <li>JSX Elements should always be written in lowercase</li>
   </ol>
   <p>Note: Fragments </p>
   <p>These are used to remove the creation of extra node </p>
   </>
  )
}

export default Rules
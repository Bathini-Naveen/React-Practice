import React from 'react'

const Header = () => {
    let date = new Date();
  return (
    <>
    <h1>Welcome user 😄</h1>
        <p>Todays Date is : {date.toDateString()}</p>
    </>
  )
}

export default Header
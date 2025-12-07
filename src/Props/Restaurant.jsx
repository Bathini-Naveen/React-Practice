import React from 'react'

const Restaurant = ({name,location,pincode}) => {
  return (
    <>
<marquee behavior="" direction="">
      <h3>Restaurant Name : <mark>🥇 {name}</mark>
    </h3>
    <p>Location :📍 {location}</p>
    <p>Pincode: 📌{pincode}</p>
</marquee>
    </>
  )
}

export default Restaurant
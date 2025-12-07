// @useState()
// !Example 1 using Integer
// import { useState } from "react"
// const State = () => {
//     let [count,setCount]=useState(0)
//     let handleIncrement =()=>{
//         setCount(count+1)

//     }
//       let handleDecrement =()=>{
//          setCount(count>0 && count-1)
//     }
//       let handleReset =()=>{
//          setCount(0)

//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//         <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default State

// !Example 2 using String
// import { useState } from "react"
// const State = () => {
//     let [food,setFood]=useState("________")
//     let handleChickenBiryani =()=>{
//         setFood("Chicken Biryani")
//     }
//       let handleMuttonBiryani =()=>{
//         setFood("Mutton Biryani")
//     }
//       let handleFrawnsBiryani =()=>{
//         setFood("Frawns Biryani")
//     }
//   return (
//     <div>
//         <h1>My favourite Food is :{food}</h1>
//         <button onClick={handleChickenBiryani}>Chicken Biryani</button> 
//         <button onClick={handleMuttonBiryani}>Mutton Biryani</button>
//         <button onClick={handleFrawnsBiryani}>Frawns Biryani</button>
//     </div>
//   )
// }

// export default State

// !Example 3 using Boolean 
// import { useState } from "react"
// const State = () => {
//     let[mode,setMode]=useState(true)
//     let handleMode=()=>{
//         setMode(!mode)
//     }
//   return (
//     <div>
//         <button onClick={handleMode}>{mode ? "Light Mode 🌞":"Dark Mode 🌚"}</button>
//     </div>
//   )
// }

// export default State

// !Example 5 using Objects
// import {useState} from 'react'

// const State = () => {
//     let [moviedetails,setmoviedeatils] = useState(
//         {name:"The GirlFriend",
//             ratings:9
//         }
//     )
//     let {name,ratings} = moviedetails
    
//     let handleRatings = ()=>{
//         setmoviedeatils({
//             ...moviedetails,
//             ratings :7.5
//         })
//     }
//   return (
//     <div>
//         <h1>Movie name : <mark>{name}</mark> </h1>
//         <h1>Ratings : {ratings}⭐</h1>
//         <button onClick={handleRatings}>update Ratings</button>
//     </div>
//   )
// }

// export default State

// !Example 6 using Array objects
// import  { useState,Fragment } from 'react'

// const State = () => {
//     let [restaurant,setRestaurant]=useState([{id: 1,name:"Kritunga",famousdish:"Raagi mudha"},
//         {id: 2,name:"Pista House",famousdish:"Haleem"}
//     ])
//     let handleName=()=>{
//          setRestaurant(restaurant.map((ele)=>{
//             return ele.id == 1 ? {...ele,name:"Krishnapatnam"} : ele
           
//         }))
//     }
//   return (
//     <div>
//         <h1>List of Restaurants</h1>
//         <ul>
//         {restaurant.map((ele)=>{
//             return <Fragment key={ele.id}>
//            <li> {ele.name} - {ele.famousdish}</li>
//             </Fragment>
//         })}
//         </ul>
//         <button onClick={handleName}>Change Name</button>
//     </div>
//   )
// }

// export default State

// !Example 7 using Props
import { useState } from 'react'
import Salary from './Salary'
const State = () => {
    let[salary,setSalary]  = useState(10000)
    let incrementSalary =()=>{
        setSalary(salary+10000)
    }
     let decrementSalary =()=>{
        setSalary(salary>0 && salary-10000)
    }

  return (
    <Salary salaryamount={salary} infun={incrementSalary} defun={decrementSalary}/>
  )
}

export default State

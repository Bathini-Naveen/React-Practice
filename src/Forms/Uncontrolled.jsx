// !Example 1
// import { useRef } from "react"
// const Uncontrolled = () => {
//     let inputRef = useRef()
//     let handleFocus =()=>{
//         inputRef.current.focus()
//     }
//   return <div>
//     <input type="text" ref={inputRef}/>
//     <button onClick={handleFocus}>Click to Focus</button>
//   </div>
// }



// export default Uncontrolled

// !Example 2
// import { useRef } from "react"
// const Uncontrolled = () => {
//     let nameRef = useRef()
//     let emailRef = useRef()
//     let passwordRef = useRef()
//     let handleSubmit = (e)=>{
//         e.preventDefault()

//     console.log(nameRef.current.value);
//     console.log(emailRef.current.value);
//     console.log(passwordRef.current.value);
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter your name" ref={nameRef}/> <br /><br />
//         <input type="email" placeholder="Enter your email"ref={emailRef}/> <br /><br />
//         <input type="password" placeholder="Enter your password"ref={passwordRef}/> <br /><br />
//         <button type="submit">Register</button>
//     </form>
//   )
// }

// export default Uncontrolled

// !Example 3 
import {useRef} from 'react'
const Uncontrolled = () => {
    let styleRef =  useRef()
    let handleStyles = ()=>{
        styleRef.current.style.color="white"
        styleRef.current.style.backgroundColor="maroon"
        // styleRef.current.style="center"

    }
  return (
    <div>
        <h1 ref={styleRef}>Are you eating ?</h1>
        <button onClick={handleStyles}>Yes</button>
    </div>
  )
}

export default Uncontrolled

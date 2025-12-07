// !Example 1
//     import { useState } from "react"
// const Controlled = () => {
//     let [name,setName]=useState("")
//     let handleNameChange=(e)=>{
//         setName(e.target.value)
//     }
//   return (
//     <div>
//         <label htmlFor="name">Name : </label>
//         <input type="text" id="name" value={name} onChange={handleNameChange}/>
//         <p>My Name is : {name}</p>
//     </div>
//   )
// }


// export default Controlled

// !Example 2
// import { useState } from "react"
// const Controlled = () => {
//    let [name,setName] = useState("")
//    let [email,setEmail] = useState("")
//    let [password,setPassword] = useState("")

//    let handleSubmit =(e)=>{
//     e.preventDefault()
//     let details = {
//         name,email,password
//     }
//     console.log(details);
//    }
   
//   return (
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name : </label>
//         <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <br /><br />
//          <label htmlFor="email">Email : </label>
//         <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//         <br /><br />
//          <label htmlFor="password">Password : </label>
//         <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <br /><br />
//         <button type="submit">Register</button>
//     </form>
//   )
// }

// export default Controlled

// !Eaxmple 3
import { useState } from "react"
const Controlled = () => {
  let [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phonenumber:"",
    dob:"",
    gender:"",
    skills:[],
    country:"--Select Option --",
    feedback:"",
    photo:""
  })
  let {name,email,password,phonenumber,dob,skills,country,feedback}=formData

  let handleChange = (e)=>{
      let {name,value,checked,type}= e.target
      if(type == "checkbox"){
        let copiedskills = [...skills]
        if(checked){
            copiedskills.push(value)
        }else{
          copiedskills = copiedskills.filter(ele=>ele!==value)
        }
        setFormData({...formData,[name]:copiedskills})
      }else if(type == "file"){
            setFormData({...formData,[name]:e.target.files[0].name})
      }else{
        setFormData({...formData,[name]:value})
      }
    
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form 🔥</legend>

           <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name"value={name}  onChange={handleChange}/>
      <br /><br />
        <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
      <br /><br />
        <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
      <br /><br />
        <label htmlFor="phonenumber">PhoneNumber::</label>
      <input type="tel" name="phonenumber" id="phonenumber" value={phonenumber} onChange={handleChange}/>
      <br /><br />
        <label htmlFor="dob">dob:</label>
      <input type="datetime-local" name="dob" id="dob" value={dob} onChange={handleChange}/>
      <br /><br />

      <label htmlFor="gender">Gender:</label> 
      <input type="radio" name="gender" id="male" value="male" onChange={handleChange}/>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="female" value="female" onChange={handleChange}/>
      <label htmlFor="female">Female</label> <br /><br />

       <label htmlFor="skills">Skills:</label> 
      <input type="checkbox" name="skills" id="html" value="html" onChange={handleChange}/>
      <label htmlFor="html">Html</label>
      <input type="checkbox" name="skills" id="css" value="css" onChange={handleChange}/>
      <label htmlFor="css">Css</label>
      <input type="checkbox" name="skills" id="js" value="js" onChange={handleChange}/>
      <label htmlFor="js">Js</label>
      <input type="checkbox" name="skills" id="react" value="react" onChange={handleChange}/>
      <label htmlFor="react">React Js</label> <br /><br />

      <select name="country" id="country" value={country} onChange={handleChange}>
        <option selected hidden>--Select Option --</option>
        <option>India</option>
        <option>Russia</option>
        <option >Australia</option>
        <option>Thailand</option>
      </select><br /><br />

      <label htmlFor="feeback">Feedback:</label>
       <input type="text" name="feedback" value={feedback} rows="10" cols="50"onChange={handleChange}/> <br /><br />

      <label htmlFor="photo">Upload Photo:</label>
      <input type="file" name="photo" onChange={handleChange}/><br /><br />

      <button type="submit">Register</button>
      <button type="reset">Reset</button>
      </fieldset>

      
    </form>
  )
}

export default Controlled
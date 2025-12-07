// !Task
import { useRef } from "react"
const UncontrolledTask = () => {
  let inputName=useRef(null)
  let inputEmail=useRef(null)
  let inputPassword=useRef(null)
  let inputPhoneNumber=useRef(null)
  let inputDob=useRef(null)
  let inputMale=useRef(null)
  let inputFemale=useRef(null)
  let inputHtml=useRef(null)
  let inputCss=useRef(null)
  let inputJs=useRef(null)
  let inputCountry=useRef(null)
  let inputFeedback=useRef(null)
  let inputUploadId=useRef(null)

let skills = [];
    if (inputHtml.current?.checked) skills.push(inputHtml.current.value);
    if (inputCss.current?.checked) skills.push(inputCss.current.value);
    if (inputJs.current?.checked) skills.push(inputJs.current.value);

     let gender = inputMale.current?.checked
      ? "Male"
      : inputFemale.current?.checked
      ? "Female"
      : "";


let handleSubmit =(e)=>{
  e.preventDefault();
  let formdata ={
    name:inputName.current.value,
    email:inputEmail.current.value,
    password:inputPassword.current.value,
    phonenumber:inputPhoneNumber.current.value,
    dob:inputDob.current.value,
    gender,
    skills,
    feedback:inputFeedback.current.value,
    UploadId:inputUploadId.current.value,
  }
  console.log("FormData :",formdata);
}
  return <>
  <h1>UnControlled Form Using useRef()</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label><br />
    <input type="text" id="name" ref={inputName}/> <br /><br />

       <label htmlFor="email">Email:</label><br />
    <input type="email" id="email" ref={inputEmail}/> <br /><br />

       <label htmlFor="password" >Password:</label><br />
    <input type="password" id="password" ref={inputPassword}/> <br /><br />

       <label htmlFor="tel">Phonenumber:</label>
     <input type="phonenumber" id="phonenumber" ref={inputPhoneNumber}/> <br /> <br />

       <label htmlFor="date" >Date Of Birth: </label><br />
       <input type="datetime-local" id="date" ref={inputDob}/> <br /><br />

     <label htmlFor="gender">Gender:</label><br />
       <input type="radio" id="male"name="gender"  ref={inputMale}/>
       <label htmlFor="male" >Male</label>
         <input type="radio" id="female"name="gender"  ref={inputFemale}/>
       <label htmlFor="female">Female</label> <br /><br />

    <label htmlFor="skills" >Skills:</label><br />
       <input type="checkbox" id="html"name="skills" ref={inputHtml}/>
       <label htmlFor="html" >HTML</label>
         <input type="checkbox" id="css"name="skills"ref={inputCss}/>
       <label htmlFor="css">CSS</label>
         <input type="checkbox" id="js"name="skills" ref={inputJs}/>
       <label htmlFor="js">Javascript</label> <br /><br />

     <label htmlFor="country" >Country:</label><br />
     <select name="country" id="country" ref={inputCountry}>
      <option value=""disabled hidden >select</option>
      <option  value="iIndia">India</option>
      <option  value="Australia">Australia</option>
      <option value="Russia" >Russia</option>
      <option value="USA" >USA</option>
     </select> <br /> <br />

     <label htmlFor="feedback" >Feedback:</label><br />
     <textarea id="feedback"ref={inputFeedback}></textarea> <br /> <br />

     <label htmlFor="file" >UploadID:</label><br />
     <input type="file" id="file" ref={inputUploadId}/> <br /><br />

     <button>Register</button>


  </form>
  </>
}

export default UncontrolledTask
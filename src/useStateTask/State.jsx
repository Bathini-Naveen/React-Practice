import { useState } from "react"
const State = () => {
   let [studentName,setStudentName]= useState("Pavan")
   let [score,setScore]=useState(0)
   let [login,setLogin] = useState(false)
   let [skills,setSkills] = useState(["HTML"])
   let [profile,setProfile]=useState({age:20,city:"Hyderabad"})
   let [todos,setTodos]=useState([{id:1,task:"Learn React"}])

  return (
        <div>
        <h1>Student name is : {studentName}</h1>
        <button onClick={()=>setStudentName(studentName=="Pavan"?"Monty":"Pavan")}>Change Name</button>
        <hr />
        <h1>Score : {score}</h1>
        <button onClick={()=>setScore(score+5)}>Increment</button>
        <button onClick={()=>setScore(score-5)}>Decrement</button>
        <hr />
        <button onClick={()=>setLogin(!login)}>{login?"LoggedIn":"LoggedOut"}</button>
        <hr />

        <h1>My Skills </h1>
        <ul>  
            {skills.map((ele,ind)=>{
                    return <li key={ind}>{ele}</li>   
            })}
        </ul>
       <button onClick={()=>setSkills([...skills,"CSS"])}>ADD CSS</button>
       <button onClick={()=>setSkills([...skills,"JS"])}>ADD JS</button>
       <button onClick={()=>setSkills([])}>CLEAR SKILLS</button>
       <hr />

       <h1>My age : {profile.age}</h1>
       <h1>City :  {profile.city}</h1>
       <button onClick={()=>setProfile({...profile, age : profile.age + 1})}>Increment</button>
       <button onClick={()=>setProfile({...profile, city : profile.city=="Hyderabad"?"Banglore":"Hyderabad"})}>Change City Name</button>
        <hr />
           <div>
                 <p>The List of ToDos :</p>
                {todos.map((ele)=>(
               <p key={ele.id}> {ele.id}-{ele.task}</p>
            ))} 
           </div>
            
        <button onClick={()=>setTodos([...todos,{ id : todos.length + 1,task : "New Task"}])}>ADD TODO</button>
        <button onClick={()=>setTodos(todos.slice(0,-1))}>REMOVE TODO</button>

      </div>
  )
}

export default State
import { useEffect, useState } from "react"
import Title from './Title'

const Effect = () => {
    let [age,setAge] = useState(25)
    let [salary,setSalary] = useState(10000)
    // !useEffect with Empty dependency
    // useEffect(()=>{
    //     console.log("useEffect Running like Mount Methods");
    // },[])

    // !useEffect without dependency
    // useEffect(()=>{
    //     console.log("useEffect Running like Update Methods");
    // })
    // !useEffect with one dependency if we click on the age then it triggers or changes
    // useEffect(()=>{
    //     console.log('useEffect Runs only when age dependency changes');
    // },[age])

  return <div>
    {age < 30 && <Title/>}
    <h1>Age - {age}</h1>
    <button onClick={()=>{setAge(age+1)}}>Increment Age</button>
    <h1>Salary - {salary} </h1>
    <button onClick={()=>{setSalary(sal=>sal+10000)}}>Increment Salary</button>
  </div>
}

export default Effect
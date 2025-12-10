import Title from "./Title"
import Count from "./Count"
import Button from './Button'
import { useCallback, useState } from "react"

const Parent = () => {
    const [age,setAge]  = useState(25)
    const [salary,setSalary] = useState(10000)
     
    const handleAge =useCallback(()=>{
        setAge(age+1);
    },[age])

    const handleSalary =useCallback( ()=>{
        setSalary(salary+5000);
    },[salary])

  return (
    <div>
        <Title></Title>
        <Count text="age" data={age}></Count>
        <Button incr={handleAge}></Button>
         <Count text="Salary" data={salary}></Count>
        <Button incr={handleSalary}></Button>
    </div>
  )
}

export default Parent
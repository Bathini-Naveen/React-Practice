import { useEffect } from "react"

const Title = () => {
    // !useEffect Runs like Umounting phase
    useEffect(()=>{
        return () => {
                console.log("useEffect works like unMount Phase method");
        }
    },[])
  return (
     <div>
  <h1>useEffect Hook</h1>
  </div>
  )
}
export default Title
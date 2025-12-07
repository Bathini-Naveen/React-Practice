import Son from './Son'
import Hoc from './Hoc'
const Father = ({properties}) => {
  return <>
  <h1>List of Properties</h1>
  <ol>
      {properties.map((ele,ind)=>{
      return <li key={ind}>{ele}</li>
  })}
   </ol>
  <Son/>
  </>
}

export default Hoc(Father)
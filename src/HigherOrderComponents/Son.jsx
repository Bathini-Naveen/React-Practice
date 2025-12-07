import Hoc from './Hoc'
const Son = ({breakfast,price}) => {
  return (
    <h1>Son eats {breakfast} costs around ₹{price}</h1>
  )
}

export default Hoc(Son)
import Trainer from './Trainer'

const BranchHead = ({coursename,price,yop,children}) => {
  return (
  <>
  <Trainer course1={coursename} price1={price} yop1={yop} children1={children}>
  </Trainer>
  </>
  )
}

export default BranchHead
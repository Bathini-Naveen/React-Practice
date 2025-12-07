// !IF Else
// import Invalidpassword from './Invalidpassword'
// import ValidPassword from './ValidPassword'

// const Password = ({isvalid}) => {

//   if({isvalid}){
//     return <ValidPassword/>
//   }
//   else{
//     return <Invalidpassword/>
//   }
// }

// export default Password

// !Ternary Operator
import Invalidpassword from './Invalidpassword'
import ValidPassword from './ValidPassword'

const Password = ({isvalid}) => {
  return <>
    {isvalid ? <ValidPassword/> : <Invalidpassword/>}
  </>
}

export default Password
// !Components
// !28/10/2025.
import React, { useState } from 'react'
import JavascriptXtension from './JSX/JavascriptXtension'
import Rules from './JSX/Rules'
// import Title from './JSX/Title'
import Expression from './Expression/Expression'
import Navbar from './ExpressionTask/Navbar'
import Header from './ExpressionTask/Header'
import Main from './ExpressionTask/Main1'
import ListOfData from './Lists/ListOfData'
import UserList from './Lists/ProductList'
import ProductList from './Lists/UserList'
import User from './Props/User'
import Musarambagh from './useContext/Musarambagh'
import { BiscuitContext, ChocolateContext, MixingContext } from './useContext/Instamart'
//  !Class  Based Component
//  class App extends React.Component{
//     render(){
//         return <marquee>This is App.jsx file</marquee>
//     }
//  }
// !Function Based Component
// let App =()=>{
//     return <JavascriptXtension></JavascriptXtension>
// }
// export default App

// !Components
// const App = ()=>{
//     return (
//         <>
//         <Title></Title>
//         <Rules></Rules>
//         </>
//     )
// }

// export default App

// !Expression
// const App=()=>{
//     return <Expression></Expression>
// }

// export default App

// !Expressiontask

// const App = () => {
//   return (
//     <>
//     <Navbar></Navbar>
//     <Header/>
//     <Main></Main>
//     </>
//   )
// }

// export default App
//  !ListOfData

// const App = () => {
//   return <ListOfData></ListOfData>
// }

// export default App

// !ListsTask
// const App = () => {
//   return (
//     <>
//     <UserList/>
//     <ProductList/>
//     </>
//   )
// }

// export default App

// !03/11/2025
// @props
// const App = () => {
//   return (
//     <>
//     <h1>List of Trainers</h1>
//     <User trainerName="Pavan" age={16} isMarried={true} hasexgirlfriends={undefined} haskids={null} skills={["core java","singing","Dancing"]} address={{place:"Mysore",pincode:500065}} fun={()=>console.log("I'm core java trainer")}/>
//     <User trainerName="Monty" age={25} isMarried={true} hasexgirlfriends={undefined} haskids={null} skills={["Python","singing","Dancing"]} address={{place:"Mysore",pincode:500065}} fun={()=>console.log("I'm Python Trainer")}/>
//     </>
//   )
// }
// export default App
// !propsTask
// import Restaurant from './Props/Restaurant'
// import Dish from './Props/Dish'

// const App = () => {
//   return (
//    <>
//     <Restaurant name="Mana Ruchulu" location="Bongloor" pincode={501510}  />
//     <Dish dishname="Mutton Biryani" price={550}/>
//      <Restaurant name="Pista house" location="Dilsukhnagar" pincode={501506}  />
//     <Dish dishname="Chicken Biryani " price={350}/>
//    </>
//   )
// }

// export default App
// !Task2
// !PropsDestructuring
// import Trainer from './PropsDestructoring/Trainer'
// const App = () => {
//   return (
//     <div>
//       <Trainer name="Pavan" image="vite.svg" age={22} designation="core Java Trainer" />
//       <Trainer name="Rahul" image="vite.svg" age={24} designation="Web Trainer" />
//     </div>
//   )
// }

// export default App

// !04/11/2025
// @Props Children
// import Food from './PropsChildren/Food'

// const App = () => {
//   return (
//       <>
//         <Food>
//       <img src="https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg" alt="chicken biryani" height="300px" width="300px"
//       />
//       <h2>Chicken Biryani</h2>
//     </Food>
    
//        <Food>
//       <img src="https://5.imimg.com/data5/ECOM/Default/2024/2/383889520/ML/JS/WV/30496816/1707135193849-sku-3272-0.jpg" alt="chicken lollipop" height="300px" width="300px"/>
//       <h2>Chicken Lollipop</h2>
//     </Food>
//       </>
//   )
// }

// export default App

// !05/11/2025
// @Props Drilling
// import Anr from './Props/PropsDrilling/Anr'
// const App = () => {
//   return <Anr/>
// }

// export default App

// !Props Drilling Task
// import Management from './Props/PropsDrilling/Management'
// const App = () => {
//   return <Management/>
// }

// export default App

// !06/11/2025
// @Conditional Rendering
// import Password from './ConditionalRendering/Password'
// import Cart from './ConditionalRendering/Cart'
// const App = () => {

//     return (
//     <>
//     <Password isvalid={true}/>
//     <Cart items={["Shoes","Pants","Shirt","Bag","Watch"]}/>
//     </>
//     )
// }

// export default App
// !Conditional rendering Task
// import Weather from './ConditionalRendering/Weather'

// const App = () => {
//   return (
//     <>
//     <Weather temperature={35}/>
//     </>
//   )
// }

// export default App

// !useState()
// import State from './useState/State'
// const App = () => {
//   return <State/>
// }

// export default App

// !useStateTask
// import State from './useStateTask/State'
// const App = () => {
//   return <State/>
// }

// export default App

// !useContext
// const App = () => {
//   return <>
//   <ChocolateContext.Provider value="Kit-Kat">
//     <BiscuitContext.Provider value="Jim-Jam">
//       <MixingContext.Provider value="Soda">
//           <Musarambagh/>
//       </MixingContext.Provider>
//     </BiscuitContext.Provider>
//   </ChocolateContext.Provider >
//   </>
// }

// export default App

// !Stylings
// import Global from './Stylings/Global'
// import './Stylings/Global.css'

// const App = () => {
//   return <>
//   <Global/>
//   </>
// }

// export default App
// !ModuleCSS
// import Navbar1 from './Stylings/ModuleCSS/Navbar1'
// import Navbar2 from './Stylings/ModuleCSS/Navbar2'

// const App = () => {
//   return <>
//   <Navbar1/>
//   <Navbar2/>
//   </>
// }

// export default App
// !Stylingstask
// import Title from "./Stylingstask/Title"
// import Card from "./Stylingstask/Card"
// import './Global.css'
// const App = () => {
//   return <>
//   <Title />
//   <div className="card_container">
//     <Card image="AlluArjun.jpg" name="AlluArjun" designation="Web Trainer"/>
//      <Card image="Prabhas.webp" name="Prabhas" designation="Core javaTrainer"/>
//       <Card image="NTR.jpg" name="RamaRao" designation="PythonTrainer"/>
//   </div>
//   </>
// }

// export default App

// !Combinedtask
// import StudentCard from "./CombinedTask/StudentCard"
// import {ThemeContext} from "./CombinedTask/Context"
// const App = () => {
//   let [theme,setTheme] = useState("light")

//   let studentsArray =[{id:1,name:"Rahul",branch:"MECH",score:85},
//     {id:2,name:"Pavan",branch:"CIVIL",score:72},
//     {id:3,name:"Monty",branch:"CIVIL",score:90}
//   ];
//   return <>
//   <ThemeContext.Provider value={theme}>
//     <StudentCard studentsArray={studentsArray}/>
//   </ThemeContext.Provider>
//       <button onClick={()=>setTheme(!theme)}>{theme?"Light theme":"Dark Theme"}</button>
//   </>
  

// }

// export default App

// !Tailwind Css
// import HotWheels from './TailwindCSS/HotWheels'

// const App = () => {
//   return (
//     <HotWheels/>
//   )
// }

// export default App

// !20//11/2025
// !Forms(UnControlled)
// import Uncontrolled from './Forms/Uncontrolled'

// const App = () => {
//   return <Uncontrolled/>
// }

// export default App
// !UnControlledTask
//  import UncontrolledTask from './Forms/UncontrolledTask'
// const App = () => {
//   return <UncontrolledTask/>
// }

// export default App
//!Forms(Uncontrolled)
// import Controlled from './Forms/Controlled'

// const App = () => {
//   return <Controlled/>
// }

// export default App

// !ReactHookForm
// @26/11/2025
// import ReactHookForm from './Forms/ReactHookForm'
// const App = () => {
//   return <ReactHookForm/>
// }

// export default App
// !LifeCycle Phases
//@28/11/2025
// import LifeCyclePhases from './LifeCycle phases/LifeCyclephases'
// const App = () => {
//   return <LifeCyclePhases/>
// }

// export default App

// !useEffect()
// @1/11/2025
// import Effect from './UseEffect/Effect'
// const App = () => {
//   return <Effect/>
// }

// export default App

// !Axios
// @02/12/2025
// import Fetchdata from './Axios/Fetchdata'
// const App = () => {
//   return <Fetchdata/>
// }

// export default App

// !03/12/2025
// @Higherorder Components
// import Grandfather from './HigherOrderComponents/Grandfather'

// const App = () => {
//   return <>
//   <Grandfather/>
//   </>
// }

// export default App

// !Pure Components
// import Pure from './PureComponents/Pure'
// import Normal from './PureComponents/Normal'
// const App = () => {
//   return <>
//   <Pure/>
//   <Normal/>
//   </>
// }

// export default App

// !Memo
// @04/12/2025
// import Special from './Memo/Special'
// import Regular from './Memo/Regular'

// const App = () => {
//   let [trainer,setTrainer] = useState({
//     name:"Pavan"
//   })
//   let handleTrainer = ()=>{
//     setTrainer({name:"Asnan"})
//   }
//   return <>
//   <Regular hero={trainer.name}/>
//   <Special hero={trainer.name}/>
//   <button onClick={handleTrainer}>Change Trainer</button>
//   </>
// }
// //Instead of taking object in useState we can take string but this re-rendering will occurs only when we use objects 
// export default App

// !Portals
// import Forms from './Portals/Forms'

// const App = () => {
//   return <Forms/>
// }

// export default App

// !useMemo
// @05/12/2025
import UseMemoHook from './useMemo/UseMemoHook'
const App = () => {
  return <UseMemoHook/>
}

export default App
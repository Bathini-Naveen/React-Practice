// !Example 1
// const ListOfData = () => {
//     let trainers = ["Monty","Rahul","Harsha","Abbas","Asnan"]
//   return (
//     <>
//     <h1>List of Trainers</h1>
//      <ol>
//         {trainers.map((elements,index)=>{
//          return <li key={index}> {elements} </li>
//         })}
//          </ol>
//     </>
//   )
// }

// export default ListOfData

// !Example 2 
// const ListOfData = () => {
//     let sunday = ["Sleep","washing","Cooking","Cricket"]
//   return (
//     <>
//     <h1>List of Trainers</h1>
//      <ul>
//         {trainers.map((elements,index)=>{
//          return <li key={index}> {elements} </li>
//         })}
//          </ul>
//     </>
//   )
// }

// export default ListOfData

// !Example 3
import React from 'react'

const ListOfData = () => {
    let heroines=[
            {
            name:"Anushka shetty",
            age:43,
            Hitmovie:"Arundathi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9VYt5O7EjygQRdniJds7X82mLTFg0ZCRcA&s"
        },
          {
            name:"Samantha",
            age:38,
            Hitmovie:"Eega",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0WzjXrog48hrY10YKI6tCEyd45XkCMdMIw&s"
        },
          {
            name:"Kajal Agarwal",
            age:40,
            Hitmovie:"Magadheera",
            image:"https://www.kollybollyethnics.com/image/catalog/data/09Mar2021/Kajal-aggarwal-yellow-art-silk-festival-wear-saree-5152-1.jpg"
        }
    ]
    
  return (
    <>
    {heroines.map((ele,ind,arr)=>{
        return <React.Fragment  key={ind}>
           
            <img src={ele.image} alt="{ele.image}" height="400"/>   
            <h3>Name: {ele.name}</h3>
            <h3>Age: {ele.age}</h3>
            <h3>Hit Movie: {ele.Hitmovie}</h3>

        </React.Fragment>
    })}
    </>
  )
}

export default ListOfData

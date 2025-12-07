import React from 'react'

const UserList = () => {
    const users = [
  { id: 1, name: "Monty", age: 27 },
  { id: 2, name: "Rahul", age: 25 },
  { id: 3, name: "Pavan", age: 25 },
];
        return(
          <>
          <h1>List of Users</h1>
          {users.map((ele)=>{
           return  <div key={ele.id}>
            <h3>Username: {ele.name}</h3>
            <h3>Age: {ele.age}</h3>
            </div>
          })}
          </>
        )
    }
    

export default UserList
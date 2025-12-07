const User = ({trainerName,age,isMarried,hasexgirlfriends,haskids,skills,address:{place,pincode},fun}) => {
  return (
    <div>
        <p>My name is {trainerName}</p>
        <p>I am {age} years old</p>
        <p>{isMarried ? "Yes i am married":"No i am not married"}</p>
        <p>{hasexgirlfriends==undefined ? "Yes, I have ex girlfriends":"No i don't have exGirlFriends"}</p>
        <p>{haskids==null ? "No.I dont have kids":"Yes,I have kids"}</p>
        <p>My Skills are {skills}</p>
        <p>I am from {place} and pincode is {pincode}</p>
        <button onClick={fun}>Click</button>
    </div>
  )
}
export default User
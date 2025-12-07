const Expression =()=>{
let firstName ="Naveen"
let lastName="Bathini"
let product =(a,b)=>{
    return a*b
}
let details ={
    place:"Huzurnagar",
    state:"Telangana"
}
let{place,state}=details

return(
    <div>
        <h1>2+2={2+2}</h1>
        <h1>My Fullname is : <mark>{firstName} {lastName}</mark></h1>
        <h1>The product pf 2*2 is:{product(2,2)}</h1>
        <h1>My Skills are : {"Singing Dancing"}</h1>
        <h1>I am From {place} {state}</h1>
    </div>
)
}
export default Expression
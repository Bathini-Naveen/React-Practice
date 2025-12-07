const Hoc = (Comp) => {
  return ()=>{
    return <Comp breakfast="Puri with Chicken" price={90}  properties={["Land","House","car","Gold"]}/>
  }
}

export default Hoc
const Trainer = ({image,name,designation,age}) => {
  return (
    <div>
        <img src={image} alt="name" />
        <h1>{name}</h1>
        <p>I am {age} years old</p>
        <p>I am {designation}</p>
    </div>
  )
}

export default Trainer
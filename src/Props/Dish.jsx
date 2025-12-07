
const Dish = ({dishname,price}) => {
  return (
    <>
   <marquee behavior="" direction="">
       <h4>famous Dish Name: <mark> {dishname} 🍛</mark></h4>
    <p>Price: ₹{price}/-</p>
   </marquee>
    </>
  )
}

export default Dish
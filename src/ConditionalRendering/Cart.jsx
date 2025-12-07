const Cart = ({items}) => {
  return (
    <div>
       
        <ul>
            {items.map((ele,ind)=>{
                return  <li key={ind}>{ele}</li>
    })}
        </ul>
         <div> {items.length > 0 && <p>You have {items.length} items in the Cart</p>}</div>
    </div>
  )
}

export default Cart
import React from 'react'

const main = () => {
    let product={
        productname: "Parle-G",
        price:5,
        availability:true
    };
    let{productname,price,availability}=product
    return (
        <>
        <h1>Product details</h1>
        <h1>Productname:{productname}</h1>
        <h1>price:{price}</h1>
        <h1>availability:{availability ? "In Stock 😍" : "Not In Stock 😪"}</h1>
        </>
    )
}

export default main
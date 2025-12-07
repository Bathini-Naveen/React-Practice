import React from 'react'

const ProductList = () => {
    const products = [
    { id: 1, name: "T-Shirt", price: "₹699" },
     { id: 2, name: "Jeans", price: "₹1200" },
    { id: 3, name: "Shoes", price: "₹999" },
    ];
    return (
        <>
        <h1>List of Products</h1>
        {products.map((ele)=>[
            <div key={ele.id}> 
                <h3>Productname: {ele.name}</h3>
                <h3>Price: {ele.price}</h3>
            </div>
        ])}
        </>
    )
}

export default ProductList
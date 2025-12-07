// !Example 1
import axios from "axios";
import { useEffect, useState } from "react";
const Fetchdata = () => {
   let [recipesdata,setRecipesData] = useState([])
 useEffect(()=>{
         let api1 = async ()=>{
            let {data:{recipes}} = await axios.get('https://dummyjson.com/recipes')

             setRecipesData(recipes);
              }
          api1()
            },[])

  return (
    <table border={1} rules="all" width="100%" cellPadding={20}>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
                {
                recipesdata.map((ele)=>{
                    return <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.cuisine}</td>
                        <td>{ele.ingredients}</td>
                        <td>{ele.instructions}</td>
                        <td><img src={ele.image} alt={ele.name} height={200} width={200}/></td>

                    </tr>
                })
                }
        </tbody>
    </table>
  )
}

export default Fetchdata
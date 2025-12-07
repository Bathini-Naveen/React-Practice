import { useContext } from "react"
import { BiscuitContext, ChocolateContext, MixingContext } from "./Instamart"

const Chaitanyapuri = () => {
  let data1 = useContext(ChocolateContext)
  let data2 = useContext(BiscuitContext)
  let data3 = useContext(MixingContext)
  return (
    <div>Chaitanyapuri - {data1} - {data2} - {data3}</div>
  )
}

export default Chaitanyapuri
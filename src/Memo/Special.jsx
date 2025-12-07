import { memo } from "react";

const Special = ({hero}) => {
    console.log("Special Component rendering.........");
  return (
    <div>Special - {hero}</div>
  )
}

export default memo(Special)
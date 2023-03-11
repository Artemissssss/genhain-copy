import { useState } from "react"

function error() {
const [cont,setCont] = useState("")
const changer = (e) =>{
setCont(e.target.value)
}
  const push = () =>{

  }
  return (
    <>
    <input onChange={changer} type="text" placeholder="ok"/>
    <button onClick={push}>Submit</button>
    </>
  )
}
export default error
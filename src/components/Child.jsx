import { memo } from "react"


function Child(props) {
  console.log(`child component rendered`)
    
  return (
    <>
      <h3>Channel Youtube {props.name}</h3>
      <button onClick={props.aksi}>ganti nama channel</button>
    </>
  )
}

export default memo(Child)
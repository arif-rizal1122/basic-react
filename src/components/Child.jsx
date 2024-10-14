import { memo } from "react"


function Child(props) {
  console.log(`child component rendered`)
    
  return (
    <>
      <h3>Channel Youtube {props.name}</h3>
    </>
  )
}

export default memo(Child)
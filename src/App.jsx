import MenuResto from "./components/MenuResto"
import Header from "./components/Header"
import Mood from "./components/Mood"
import Button from "./components/Button"
import { useMemo, useState } from "react"
import Child from "./components/Child"


function App() {


  // function click() {
  //    console.log('dari app')
  // }

  const [likeCount, setLikeCount] = useState(0)
  const [subsCount, setSubsCount] = useState(0)
  const [name, setName] = useState("arif_rizal")

  function handleName(params) {
    let channelName = ''

    if (name == 'arif_rizal') {
        channelName = "wpu"
    } else {
        channelName = 'rumah saya'
    }
    setName(channelName)
    console.log(`run in ${name}`)
  }

  return (
    <>
      <Header />
      <MenuResto />
      <Mood hari="selasa" mood="sad"/>
      {/* <Button click={click}/> */}
      <Button />

      <p>
         <button onClick={()=>setLikeCount(likeCount+1)}>{likeCount} Like </button>
      </p>

      <p>
         <button onClick={()=>setSubsCount(subsCount+1)}>({subsCount}) Subscribe </button>
      </p>

      <Child name={name}/>
      <button onClick={handleName}>ganti nama channel</button>
    </>
    
  )
}

export default App
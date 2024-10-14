import MenuResto from "./components/MenuResto"
import Header from "./components/Header"
import Mood from "./components/Mood"
import Button from "./components/Button"
import { useMemo, useState } from "react"


function App() {


  // function click() {
  //    console.log('dari app')
  // }

  const [likeCount, setLikeCount] = useState(0)
  const [subsCount, setSubsCount] = useState(0)

  function pesanLike() {
      console.log(`pesan like rendered`)
      return (likeCount < 10) ? 'like kurang dari 10' : 'alhamdulillah lebih dari 10'
  }
  
  const displayPesanLike = useMemo(()=>pesanLike(), [likeCount])

  return (
    <>
      <Header />
      <MenuResto />
      <Mood hari="selasa" mood="sad"/>
      {/* <Button click={click}/> */}
      <Button />

      <p>
         <button onClick={()=>setLikeCount(likeCount+1)}>{likeCount} Like </button> <b> {displayPesanLike}</b>
      </p>

      <p>
         <button onClick={()=>setSubsCount(subsCount+1)}>({subsCount}) Subscribe </button>
      </p>
    </>
    
  )
}

export default App
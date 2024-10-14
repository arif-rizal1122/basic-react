import MenuResto from "./components/MenuResto"
import Header from "./components/Header"
import Mood from "./components/Mood"
import Button from "./components/Button"


function App() {

  function click() {
     console.log('dari app')
  }

  return (
    <>
      <Header />
      <MenuResto />
      <Mood hari="selasa" mood="sad"/>
      <Button click={click}/>
    </>
    
  )
}

export default App
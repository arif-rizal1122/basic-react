import MenuResto from "./components/MenuResto"
import Header from "./components/Header"
import Mood from "./components/Mood"


function App() {


  return (
    <>
      <Header />
      <MenuResto />
      <Mood hari="selasa" mood="sad"/>
    </>
    
  )
}

export default App
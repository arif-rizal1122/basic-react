import React, { useRef } from 'react'

function App() {

  const pesan = useRef(null)
  const displayPesan = useRef(null)

  function clickHandle() {
    console.log(pesan.current.value)
    displayPesan.current.innerHTML = pesan.current.value
    displayPesan.current.style.padding="5px";
    displayPesan.current.style.backgroundColor="#ffff";
    displayPesan.current.style.color="black";
  }

  return (
    <>
      
      <div>
        <input type="text" ref={pesan} placeholder='send your image'/>
      </div>
      <div>
        <button onClick={clickHandle}>Click Me</button>
      </div>
      <div ref={displayPesan}></div>
    </>
  )
}

export default App
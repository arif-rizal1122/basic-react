import { useEffect, useState } from "react"

const style = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   
}


// function Button(props) {

//   function clickHandle(nama) {
//     alert(`hy ${nama}`)
//     props.click()
//   }  

//   function clickHandle() {
//     alert(`hy`)
//     props.click()
//   }  

//   return (
//     <div style={style}>
        {/* cara pemanggilan ini akan langsung dirender begitu di refresh () */}
        {/* <button onClick={clickHandle()}>click me</button> */}
        // <button onClick={clickHandle('asep')}>click me</button>
        {/* <button onClick={clickHandle}>click me</button> */}
    // </div>

//   )
// }

// export default Button




// function Button() {
//   const [count, setCount] = useState(0)

//   let newCount = 0
//   function clickHandle() {
//      newCount = count +1
//      console.log(`saya diclick ${newCount} kali`)  
//      setCount(newCount)
//   }  

//   return (
//     <div style={style}>
//         <button onClick={clickHandle}>click me ({count})</button>
//     </div>
//   )
// }

// export default Button



function Button() {
    const [countLike, setCountLike] = useState(0)
    const [countDislike, setCountDislike] = useState(0)

    useEffect(()=> {
        console.log(`why like me ${countLike} | why dislike me ${countDislike}`)
    }, [countDislike, countLike])
  
    return (
      <>
      <div style={style}>
          <button onClick={()=>setCountLike(countLike + 1)}>({countLike}) LIKE </button>
      </div>

      <div style={style}>
          <button onClick={()=>setCountDislike(countDislike + 1)}>({countDislike}) DISLIKE </button>
      </div>
      </>  
    
    )
  }
  
  export default Button
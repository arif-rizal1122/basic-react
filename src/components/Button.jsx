
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


function Button(props) {

//   function clickHandle(nama) {
//     alert(`hy ${nama}`)
//     props.click()
//   }  

  function clickHandle() {
    alert(`hy`)
    props.click()
  }  

  return (
    <div style={style}>
        {/* cara pemanggilan ini akan langsung dirender begitu di refresh () */}
        {/* <button onClick={clickHandle()}>click me</button> */}
        <button onClick={clickHandle('asep')}>click me</button>
        {/* <button onClick={clickHandle}>click me</button> */}
    </div>

  )
}

export default Button
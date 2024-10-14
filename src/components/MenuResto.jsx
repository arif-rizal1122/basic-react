import '../style/MenuResto.css'

function MenuResto() {


const menu = [
 {nama: "nasi ayam", harga:"1.324"},
 {nama: "es teh", harga:"3e03"},
 {nama: "jamu", harga: "32e324"}
]

  return (
    <>
    {
          menu.map((item, index)=> (
            <div key={index} className='menu-item'>
              <div><b>Nama {item.nama}</b>  Harga: {item.harga}</div>
            </div>
          ))
    }    
    </>
 

    
  )
}

export default MenuResto
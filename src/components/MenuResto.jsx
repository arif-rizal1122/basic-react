import '../style/MenuResto.css'

function MenuResto() {


  const isMakanan = true

  return (
    // ketika mengunakan lebih satu div maka mesti dibungkus dulu mengunakan fragment <></>

     

    <div className="menu-item">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis quos eum, illum harum praesentium?</p>
        {
            // apakah is makanan true kalau tidak tipe minuman
            // jika true maka dia masuk setelah tanda tanya 
            // (isMakanan == true) ? (<div>tipe: makanan</div>):(<div>tipe: minuman</div>)

            (isMakanan == true) && (<div>tipe: makanan</div>)
        }
    </div>
    

    
  )
}

export default MenuResto
import {useState, useEffect} from 'react'
import './App.css'
import productsData from './products.json'

function App() {
  const [textinput, settextinput] = useState("")
  const [products, setproducts] = useState(productsData)

useEffect(() => {
  //run some fn
  let filteredData=productsData.filter((product)=>
  product.name.toLowerCase().includes(textinput.toLowerCase())
  )
setproducts(filteredData)
}, [textinput])

  return (
    <div className="App">
      <div>
      <h1>Ecom chrisstore</h1>
   
     <input
       type='text'
       name=''
       id=''
       onChange={(e)=>settextinput(e.target.value)}
        />
        <h3>This is the input={textinput}</h3>
        </div>
    <div>
      {products.map((product) => (
        <>
<h1>{product.name}</h1>
<h2>${product.price}</h2>
<h2>${product.description}</h2>
<img 
src={product.img}
 alt=""
  />
  <button onClick={()=>alert(product.name)}>Buy on whatsapp</button>
<hr />
<hr />
<hr />
</>

      ))}
      </div>
      </div>  
  )
}
export default App

import React from 'react'
import "./css/App.css"
import Header from './Header.jsx'
import { Products } from './product.jsx'
import ProductsList from './products.js'



function App() {

  return (
    <>
      <div>
       <Header/>
       {ProductsList.map((product,index)=>(
       
            <Products product={product} key={index} />
       ))}
      
      </div>
    
    </>
  )
}

export default App

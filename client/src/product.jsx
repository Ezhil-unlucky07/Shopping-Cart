import {useState} from 'react'
import "./css/App.css"
import { useNavigate,Link } from 'react-router-dom'
import { addcart } from './cartslice.jsx'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
export const Products = (prop) => {
 const [gotocart,setgotocart] = useState(true)
 const navi = useNavigate()
  const dispatch = useDispatch();

  const {id,name,amt,img} = prop.product;


  const handleaddCart = ()=>{
    toast.success("Added Sucessfully!");
    dispatch(addcart({
      productid:id,
      quantity:1,
      amt:amt,
      img:img,
      name:name
    }))
  }
 return (
    <>
    <div key={id} className='Products' >
         <div className="img">
          <img src={img} alt={name} />
         </div>
         <div className="products-detail">
             <Link to={"/product/"+id} className='links' > <h3>{name}</h3> </Link> 
              <h4>₹{amt}</h4>
              {gotocart ?  <button className='btn-cart' onClick={()=>{handleaddCart();setgotocart(false)}} >Add To Cart</button> :
               <button onClick={()=>navi("/ViewCart")} className='btn-cart' >Go To Cart</button> }
             </div>
          </div>
   </>   
  )
}

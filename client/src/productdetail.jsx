import ProductsList from "./products"
import { useParams } from "react-router-dom";
import './css/productdetailstyle.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast,Flip } from 'react-toastify';
import { addcart } from './cartslice.jsx'
import { useDispatch ,useSelector } from "react-redux";

function Productdetail() {
  const { id } = useParams();
  const Productdet = ProductsList[id]
  console.log(Productdet);
   const dispatch = useDispatch()
  const handleaddCart = ()=>{
    toast.success("Added Sucessfully!");
      dispatch(addcart({
        productid:Productdet.id,
        quantity:1,
        amt:Productdet.amt,
        img:Productdet.img,
        name:Productdet.name
      }))
    }
   const items = useSelector(stat=>stat.cart.items)
   const totalitems = items.length;
   return (
    <>
  <ToastContainer theme="dark" position="top-center" autoClose={1000} transition={Flip}/>  
      <div className="header-container">
      <h1>Shopping Cart</h1>
    <div>
        <Link className="links" to="/ViewCart" >🛒<span className="total-item">{totalitems}</span></Link>
    </div>
  </div>
      <div className="product-detail-image" >
      <div className="prodetimage">
        <img src={Productdet.img} alt={Productdet.name}/>
       </div>
    <div className="productdetail-con">
      <div className="productdetail-details">
        <div className="product-detail">
          <h1>{Productdet.name}</h1>
        </div>
           <div className="product-detail">
          <h3>₹{Productdet.amt}</h3>
        </div>
        <div className="sizebtn-con" >
         {Productdet.size? <h3>Select</h3> : ""}
            {Productdet.size?.map((siz,index)=>(
               <button className="size-btn" key={index} >{siz}</button>
            ))}
        </div>
        <button className='btn-cart' onClick={()=>{handleaddCart()}}>Add to Cart</button>
      </div>
     </div>
    </div>
 </>
 )
}

export default Productdetail;
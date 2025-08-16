import { useSelector } from "react-redux"
import "./css/App.css"
import { ToastContainer,Flip} from 'react-toastify';
import { Link } from 'react-router-dom'
const Header = () => {
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
    
  
    </>
   
  )
}

export default Header
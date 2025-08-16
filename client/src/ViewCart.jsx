
import { Link } from 'react-router-dom'
import "./css/App.css"
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement ,removeItem} from './cartslice.jsx'


export const ViewCart = () => {
  const AddcartList = useSelector(stat=>stat.cart)
  console.log(AddcartList)
  const dispatch = useDispatch()

  // const handleremove = (indx)=>{
  //   dispatch(removecart(indx))
  // }
  return (
    <>
     <div className="cart-header">
      <h1>Cart List</h1>
       <Link to="/" className='links' >Home</Link>
    </div>
  {AddcartList.items.length === 0 ? (
  <p>Your cart is empty. Add Items.</p>
) : (
  <>
    {AddcartList.items.map((item, index) => (
      <div className="Cart-products" key={index}>
        <div className="cart-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="cart-product-detail">
          <h3>{item.name}</h3>
          <h4>₹{item.amt}</h4>
        </div>
        <div className="cart-detail">
          <div className="btn-quantity">
            <button onClick={() => dispatch(decrement(item.productid))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increment(item.productid))}>+</button>
          </div>
          <button className='btn-remove' onClick={()=>dispatch(removeItem(item.productid))} >Remove</button>
        </div>
        <hr />
      </div>
))}
    <h2 className='total-amt'>
      Total Amount: ₹{AddcartList.items.reduce((total, item) => total + item.amt * item.quantity, 0)}
    </h2>
  </>
)}
 </>
)
}

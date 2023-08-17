import {useSelector} from "react-redux"
import {BsCart2} from "react-icons/bs"
const Navbar = () => {
const {amount}=useSelector((each:any)=>each.cart)
console.log(amount);
return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <BsCart2 />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

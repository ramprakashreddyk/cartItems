import { BsChevronUp } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"
import { decrease, increase, removeItem } from "../slice/Cartslice";
import { useDispatch } from "react-redux"
const CartItem: React.FC<any> = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn' onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn' onClick={() => dispatch(increase(id))}
        >
          <BsChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn' onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease(id))
          }}
        >
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem
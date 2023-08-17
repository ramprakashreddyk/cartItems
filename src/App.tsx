import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import Cartcontainer from "./components/Cartcontainer";
import Navbar from "./components/Navbar";
import { calculateTotal } from "./slice/Cartslice";
import Modal from "./components/Modal";
const App = () => {
  const { cartItems } = useSelector((state: any) => state.cart)
  const {isOpen}=useSelector((state:any)=>state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems]);
  return (
    <div>
      <Navbar />
      <Cartcontainer />
      {isOpen && <Modal/>}
    </div>
  )
}

export default App;

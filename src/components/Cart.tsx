import { useState, useEffect } from "react"
import CartIcon from "../components/icons/CartIcon"
import CartIconFav from "../components/icons/CartIconFav"
import { 
  useCustomContext, 
  useCustomDispatch, 
  ADD_TO_CART, 
  REMOVE_FROM_CART
} from "../state/state"

function Cart({ product }) {
  const [isInCart, setIsInCart] = useState(false)
  const context = useCustomContext()
  const dispatch = useCustomDispatch()
  
  useEffect(() => {
    setIsInCart(context.cart.includes(product.id));
  }, [context.cart, product.id]);
  
  return (
    <>
      {isInCart ? (
        <CartIconFav
          style="w-6 h-6 text-blue-500" 
          onClick={ () => dispatch({
            type: REMOVE_FROM_CART, 
            payload: product.id
          })}
        />
        ) : (
        <CartIcon
          style="w-6 h-6 text-gray-700" 
          onClick={ () => dispatch({
            type: ADD_TO_CART, 
            payload: product.id
          })}
        />
      )}
    </>
  )
}

export default Cart
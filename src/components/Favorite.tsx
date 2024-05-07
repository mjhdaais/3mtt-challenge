import { useState, useEffect } from "react"
import HeartIcon from "../components/icons/HeartIcon"
import HeartIconFav from "../components/icons/HeartIconFav"
import { 
  useCustomContext, 
  useCustomDispatch, 
  REMOVE_FAVORITE, 
  ADD_FAVORITE
} from "../state/state"

function Favorite({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const context = useCustomContext()
  const dispatch = useCustomDispatch()
  
  useEffect(() => {
    setIsFavorite(context.favorites.includes(product.id));
  }, [context.favorites, product.id]);
  
  return (
    <>
      {isFavorite ? (
        <HeartIconFav
          style="w-6 h-6 text-red-500" 
          onClick={ () => dispatch({
            type: REMOVE_FAVORITE, 
            payload: product.id
          })}
        />
        ) : (
        <HeartIcon
          style="w-6 h-6 text-gray-700" 
          onClick={ () => dispatch({
            type: ADD_FAVORITE, 
            payload: product.id
            })}
        />
      )}
    </>
  )
}

export default Favorite